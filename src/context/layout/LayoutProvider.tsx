import { useState, type PropsWithChildren } from "react";
import { LayoutContext } from "./context";

export const DRAWER_WIDTH_OPEN = 260;
export const DRAWER_WIDTH_CLOSED = 72;
export const APP_BAR_HEIGHT = 83;

function LayoutProvider({ children }: PropsWithChildren) {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(true);
    const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH_OPEN);
    const [themeDrawerOpen, setThemeDrawerOpen] = useState(false);

    const toggleSidebar = (open: boolean) => {
        setLeftDrawerOpen(open);
        setDrawerWidth(open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED);
    };

    const toggleThemeDrawer = (open: boolean) => {
        setThemeDrawerOpen(open);
    };

    return (
        <LayoutContext.Provider
            value={{
                appBarHeight: APP_BAR_HEIGHT,
                leftDrawerOpen,
                drawerWidth,
                themeDrawerOpen,
                toggleSidebar,
                toggleThemeDrawer,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutProvider;
