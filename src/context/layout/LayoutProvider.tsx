import { useCallback, useState, type PropsWithChildren } from "react";
import { LayoutContext } from "./context";

export const DRAWER_WIDTH_OPEN = 260;
export const DRAWER_WIDTH_CLOSED = 72;
export const APP_BAR_HEIGHT = 83;

function LayoutProvider({ children }: PropsWithChildren) {
    const [leftDrawerOpen, setLeftDrawerOpen] = useState(true);
    const [drawerWidth, setDrawerWidth] = useState(DRAWER_WIDTH_OPEN);
    const [themeDrawerOpen, setThemeDrawerOpen] = useState(false);
    const [userMenuOpen, setUserMenuOpen] = useState(false);
    const [userMenuAnchorEl, setUserMenuAnchorEl] =
        useState<HTMLElement | null>(null);

    const toggleSidebar = useCallback((open: boolean) => {
        setLeftDrawerOpen(open);
        setDrawerWidth(open ? DRAWER_WIDTH_OPEN : DRAWER_WIDTH_CLOSED);
    }, []);

    const toggleThemeDrawer = useCallback((open: boolean) => {
        setThemeDrawerOpen(open);
    }, []);

    const handleSetUserMenuAnchorEl = useCallback((el: HTMLElement | null) => {
        setUserMenuAnchorEl(el);
        setUserMenuOpen(!!el);
    }, []);

    return (
        <LayoutContext.Provider
            value={{
                leftDrawerOpen,
                drawerWidth,
                themeDrawerOpen,
                toggleSidebar,
                toggleThemeDrawer,
                userMenuOpen,
                userMenuAnchorEl,
                setUserMenuAnchorEl: handleSetUserMenuAnchorEl,
            }}
        >
            {children}
        </LayoutContext.Provider>
    );
}

export default LayoutProvider;
