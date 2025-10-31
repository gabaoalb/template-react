export interface LayoutContextState {
    leftDrawerOpen: boolean;
    drawerWidth: number;
    toggleSidebar: (open: boolean) => void;

    themeDrawerOpen: boolean;
    toggleThemeDrawer: (open: boolean) => void;

    userMenuOpen: boolean;
    userMenuAnchorEl: HTMLElement | null;
    setUserMenuAnchorEl: (el: HTMLElement | null) => void;
}
