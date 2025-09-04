import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./auth/AuthSlice";
import { layoutSlice } from "./layout/LayoutSlice";

export const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        layout: layoutSlice.reducer
    }
});
