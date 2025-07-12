export interface authTypes {

    registerSlice: {
        firstName: string;
        lastName: string;
        userName: string;
        email: string;
        password: string;
        confirmPassword: string;
        field: string;
        role: {id: string; value: string}
    }

    booleanToggles: {
        isLogin: boolean;
    }

    loginDetails: {
        token: string;
        user: {
            email: string;
            role: string;
            firstName: string;
            lastName: string;
            field: string;
        }
    }
}