import axios, { AxiosResponse, CancelTokenSource } from "axios";
import { toast } from "react-toastify";

interface ApiResponse {
    message: string;
    code: number;
    [key: string]: any;
}

interface ErrorObject {
    message: string;
    code: number;
    status: number;
}

export const throwError = (response: ApiResponse): never => {
    toast.error(response.message);
    const errorObject: ErrorObject = {
        message: response.message,
        code: response.code,
        status: response.code,
    };

    throw errorObject;
};

function handleSuccess<T = any>(response: AxiosResponse<T>): T {
    const data: any = response.data || {};
    if ([400, 401, 403, 500].includes(data.code)) {
        throwError(response.data as ApiResponse);
    }
    // If throwError does not throw, ensure a return value
    return response && response.data ? response.data : (response as any);
}

export default handleSuccess;

export const genCancelToken = (): { cancelToken: any; cancel: () => void } => {
    let cancel: () => void = () => {};
    const CancelToken = axios.CancelToken;
    const cancelToken = new CancelToken((c: () => void) => {
        cancel = c;
    });
    return { cancelToken, cancel };
};

interface CreateHeaderParams {
    accessToken?: string;
    headers?: Record<string, any>;
}

interface HeaderObject extends Record<string, any> {
    Authorization?: string;
}

export function createHeader({ accessToken, headers = {} }: CreateHeaderParams): HeaderObject {
    const header: HeaderObject = {
        // 'Content-Type': 'application/json',
        // 'Access-Control-Allow-Origin': '*',
        ...headers
    };
    if (accessToken) {
        header.Authorization = `Bearer ${accessToken}`;
    }

    return header;
}

interface PostOptions {
    data?: any;
    accessToken?: string;
    params?: Record<string, any>;
    endPoint?: string;
}

export function post<T = any>(
    url: string,
    { data, accessToken, params, endPoint = "" }: PostOptions
) {
    const { cancel, cancelToken } = genCancelToken();

    const request = axios.post<T>(endPoint + url, data, {
        params,
        cancelToken,
        headers: createHeader({ accessToken }),
    }) as any;
    request.cancel = cancel;
    return request;
}