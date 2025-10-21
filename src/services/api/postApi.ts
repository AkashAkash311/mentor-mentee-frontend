import { post as postAxios } from "@/services/apiRequests";

const endPoint = `${process.env.REACT_APP_BASE_URL}`;

interface PostOptions {
    accessToken?: string;
    data?: any;
    params?: any;
}

interface LoginOptions {
    accessToken?: string;
}

type CancelablePromise<T = any> = Promise<T> & { cancel?: () => void };

const post = (url: string, { accessToken, data, params }: PostOptions): CancelablePromise => {
    return postAxios(url, { accessToken, data, endPoint, params });
};

export default class PostApis {
    static login( data: any ): CancelablePromise {
        const loginRequest = post("/v1/api/auth/login", { data });
        PostApis.loginCancel = loginRequest.cancel;
        return loginRequest;
    }

    static loginCancel?: () => void;

    static register(data: any): CancelablePromise {
        const registerRequest = post("/v1/api/auth/register", { data });
        PostApis.registerCancel = registerRequest.cancel;
        return registerRequest;
    }

    static registerCancel?: () => void;

    static forgotPassword(data: any): CancelablePromise {
        const forgotPasswordRequest = post("/v1/api/auth/updatePassword", { data });
        PostApis.forgotPasswordCancel = forgotPasswordRequest.cancel;
        return forgotPasswordRequest;
    }

    static createPost(data: any): CancelablePromise {
        const createPostRequest = post("/v1/api/posts/createPost", { data });
        PostApis.createPostCancel = createPostRequest.cancel;
        return createPostRequest;
    }
    static createPostCancel?: () => void;

    static forgotPasswordCancel?: () => void;
}