import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LayoutState } from "./interface";

const initialState: LayoutState = {
    appBarHeight: 83,
    leftDrawerOpen: false,
    drawerWidth: 260,
    themeDrawerOpen: false
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<boolean>) => {
            state.leftDrawerOpen = action.payload;
        },
        toggleThemeDrawer: (state, action: PayloadAction<boolean>) => {
            state.themeDrawerOpen = action.payload;
        }
    }
});
