import { Box, Drawer } from "@mui/material";
import { sidebarItems } from "./sidebar-items";
import SidebarList from "./sidebarList/SidebarList";
import { useLayout } from "../../../context/layout/useLayout";
import { APP_BAR_HEIGHT } from "../../../context/layout/LayoutProvider";

function Sidebar() {
    const { leftDrawerOpen, drawerWidth } = useLayout();

    return (
        <Box display="flex" flex={1} gridArea="sidebar">
            <Drawer
                component="nav"
                anchor="left"
                variant="permanent"
                open={leftDrawerOpen}
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    // anima a largura do container do Drawer
                    transition: (t) =>
                        t.transitions.create("width", {
                            duration: t.transitions.duration.standard,
                            easing: t.transitions.easing.easeInOut,
                        }),
                    "& .MuiDrawer-paper": {
                        px: 2,
                        pt: leftDrawerOpen ? 0 : 1,
                        backgroundColor: "transparent",
                        width: drawerWidth,
                        height: `calc(100vh - ${APP_BAR_HEIGHT}px)`,
                        overflowY: "auto",
                        position: "fixed",
                        top: APP_BAR_HEIGHT,
                        left: 0,
                        border: "none",
                        // anima a largura da paper (é o elemento visível)
                        transition: (t) =>
                            t.transitions.create(["width", "left"], {
                                duration: t.transitions.duration.standard,
                                easing: t.transitions.easing.easeInOut,
                            }),
                    },
                }}
            >
                <SidebarList sidebarItems={sidebarItems} />
            </Drawer>
        </Box>
    );
}

export default Sidebar;
