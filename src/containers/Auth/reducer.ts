import { createSlice } from "@reduxjs/toolkit";
import { authTypes } from "./types";

const initialState: authTypes = {
    registerSlice: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        field: "tester",
        role: {id: "", value: ""}
    },

    booleanToggles: {
        isLogin: false
    },

    loginDetails: {
        token: "",
        user: {
            email: "",
            role: "",
            firstName: "",
            lastName: "",
            field: ""
        }
    }
};

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setDetail<keyType extends keyof typeof initialState>(state: typeof initialState, action: { payload: {name: string; value: any; key: keyType }}) {
            const { name, value, key } = action.payload;

            return {
                ...state,
                [key]:{
                    ...state[key],
                    [name]: value
                }
            }
        },

        setLoginDetails(state: any, action){
            const {token, user} = action.payload;
            return {
                ...state,
                loginDetails: {
                    token: token,
                    user: user ? user : initialState
                }
            }
        },

        clearSlice(state: authTypes) {
            return {
                ...state,
                ...initialState
            }
        }
    }
});

export default auth.reducer;

export const { setDetail, clearSlice, setLoginDetails } = auth.actions;