import { Outlet } from "react-router";
import { useAppSelector } from "../../context/store/ReduxHooks";
import type { RootState } from "../../context/store/interface";
import { Box } from "@mui/material";
import Header from "./header/Header";
import Main from "./main/Main";
import Sidebar from "./sidebar/Sidebar";

const drawerWidth = 240;
const appBarHeight = 64;

function Layout() {
    const { isAuthenticated } = useAppSelector(
        (state: RootState) => state.auth
    );

    console.log(isAuthenticated);

    if (isAuthenticated) {
        return (
            <Box
                sx={{
                    display: "grid",
                    gridTemplateRows: `${appBarHeight}px 1fr`, // linha 1: AppBar | linha 2: resto
                    gridTemplateColumns: `${drawerWidth}px 1fr`, // col 1: sidebar | col 2: main
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
            </Box>
        );
    }

    return <Outlet />;
}

export default Layout;
