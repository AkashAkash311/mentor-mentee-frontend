import { createSlice } from "@reduxjs/toolkit";
import { authTypes } from "./types";

const initialState: authTypes = {
    loginSlice: {
        userName: "test",
        password: "test",
    },

    registerSlice: {
        firstName: "",
        lastName: "",
        userName: "",
        email: "",
        password: "",
        confirmPassword: "",
        field: "",
        role: {id: "", value: ""}
    },

    booleanToggles: {
        isLogin: false
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
        }
    }
});

export default auth.reducer;

export const { setDetail } = auth.actions;