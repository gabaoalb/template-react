import { Box, Typography } from "@mui/material";
import { useAppSelector } from "../../../context/store/ReduxHooks";

function Sidebar() {
    const { appBarHeight } = useAppSelector((state) => state.layout);

    return (
        <Box
            sx={{
                display: "flex",
                flex: 1,
                pt: `${appBarHeight}px`,
                gridArea: "sidebar",
                border: "1px solid blue"
            }}
        >
            {/* SIDEBAR */}
            <Box
                component="nav"
                sx={{
                    width: 240,
                    flexShrink: 0,
                    height: `calc(100vh - ${appBarHeight}px)`,
                    overflowY: "auto",
                    borderRight: 1,
                    borderColor: "divider",
                    position: "fixed",
                    top: appBarHeight,
                    left: 0
                }}
            >
                {/* Conteúdo da Sidebar */}
                <Box p={2}>
                    <Typography>Sidebar Item 1</Typography>
                    <Typography>Sidebar Item 2</Typography>
                    <Typography>Sidebar Item 3</Typography>
                    {/* adicione lista, menus, etc */}
                </Box>
            </Box>
        </Box>
    );
}

export default Sidebar;
