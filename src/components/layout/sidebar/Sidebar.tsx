import { Box, Drawer } from "@mui/material";
import { useAppSelector } from "../../../context/store/ReduxHooks";
import { sidebarItems } from "./sidebar-items";
import SidebarList from "./sidebarList/SidebarList";

function Sidebar() {
    const { appBarHeight, leftDrawerOpen, drawerWidth } = useAppSelector(
        (state) => state.layout
    );

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
                        height: `calc(100vh - ${appBarHeight}px)`,
                        overflowY: "auto",
                        position: "fixed",
                        top: appBarHeight,
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
