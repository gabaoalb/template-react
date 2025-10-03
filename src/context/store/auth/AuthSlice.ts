import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { AuthState } from "./interface";

const initialState: AuthState = {
    isAuthenticated: false,
    user: null,
};

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (
            state,
            action: PayloadAction<{ email: string; password: string }>
        ) => {
            state.isAuthenticated = true;
            state.user = {
                id: "1",
                email: action.payload.email,
                name: "User",
            };
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
        },
    },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
