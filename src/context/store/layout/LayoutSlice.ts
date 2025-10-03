import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LayoutState } from "./interface";

export const DRAWER_WIDTH_OPEN = 260;
export const DRAWER_WIDTH_CLOSED = 72;
export const APP_BAR_HEIGHT = 83;

const initialState: LayoutState = {
    appBarHeight: APP_BAR_HEIGHT,
    leftDrawerOpen: true,
    drawerWidth: DRAWER_WIDTH_OPEN,
    themeDrawerOpen: false,
};

export const layoutSlice = createSlice({
    name: "layout",
    initialState,
    reducers: {
        toggleSidebar: (state, action: PayloadAction<boolean>) => {
            state.leftDrawerOpen = action.payload;
            if (state.leftDrawerOpen) {
                state.drawerWidth = DRAWER_WIDTH_OPEN;
            } else {
                state.drawerWidth = DRAWER_WIDTH_CLOSED;
            }
        },
        toggleThemeDrawer: (state, action: PayloadAction<boolean>) => {
            state.themeDrawerOpen = action.payload;
        },
    },
});

export const { toggleSidebar, toggleThemeDrawer } = layoutSlice.actions;
