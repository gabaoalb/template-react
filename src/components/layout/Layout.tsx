import { Box } from "@mui/material";
import { Outlet } from "react-router";
import Header from "./header/Header";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";
import { useAuth } from "../../context/auth/useAuth";
import DrawerTheme from "./drawerTheme/DrawerTheme";
import { APP_BAR_HEIGHT } from "../../context/layout/LayoutProvider";

function Layout() {
    const { isAuthenticated } = useAuth();

    if (isAuthenticated) {
        return (
            <Box
                sx={{
                    display: "grid",
                    gridTemplateRows: `${APP_BAR_HEIGHT}px 1fr`, // linha 1: AppBar | linha 2: resto
                    gridTemplateColumns: `0 1fr`, // col 1: sidebar | col 2: main
                    gridTemplateAreas: `
                      "header header"
                      "sidebar main"
                    `,
                    height: "100vh",
                }}
            >
                <Header />
                <Sidebar />
                <Main>
                    <Outlet />
                </Main>
                <DrawerTheme />
            </Box>
        );
    }

    return <Outlet />;
}

export default Layout;
