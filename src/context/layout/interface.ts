export interface LayoutContextState {
    appBarHeight: number;
    leftDrawerOpen: boolean;
    drawerWidth: number;
    themeDrawerOpen: boolean;
    toggleSidebar: (open: boolean) => void;
    toggleThemeDrawer?: (open: boolean) => void;
}
