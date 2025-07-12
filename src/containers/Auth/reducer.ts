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

export const { setDetail, clearSlice } = auth.actions;