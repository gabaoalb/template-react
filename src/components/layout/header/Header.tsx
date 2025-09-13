import Menu from "@mui/icons-material/Menu";
import {
    AppBar,
    Box,
    Grid,
    InputAdornment,
    TextField,
    Toolbar,
    useTheme,
} from "@mui/material";
import HeaderIconButton from "../../buttons/headerIconButton/HeaderIconButton";
import {
    useAppDispatch,
    useAppSelector,
} from "../../../context/store/ReduxHooks";
import {
    DRAWER_WIDTH_OPEN,
    toggleSidebar,
} from "../../../context/store/layout/LayoutSlice";
import type { RootState } from "../../../context/store/interface";
import Search from "@mui/icons-material/Search";
import {
    Fullscreen,
    Notifications,
    Sensors,
    Translate,
    Tune,
} from "@mui/icons-material";

function Header() {
    const theme = useTheme();

    const dispatch = useAppDispatch();

    const { leftDrawerOpen } = useAppSelector(
        (state: RootState) => state.layout
    );

    const handleMenuClick = () => {
        dispatch(toggleSidebar(!leftDrawerOpen));
    };

    return (
        <AppBar
            enableColorOnDark
            position="fixed"
            color="transparent"
            elevation={0}
            sx={{
                gridArea: "header",
                maxHeight: "84px",
            }}
        >
            <Toolbar
                sx={{
                    p: 2,
                    display: "grid",
                    gridTemplateColumns: "repeat(4, 1fr) auto", // 5 colunas iguais
                    alignItems: "center", // centraliza verticalmente
                }}
            >
                {/* logo & menu button */}
                <Box
                    display="flex"
                    justifyContent="space-between"
                    pr={1}
                    sx={{
                        width: `calc(${DRAWER_WIDTH_OPEN}px - 24px)`,
                        [theme.breakpoints.down("md")]: {
                            width: "auto",
                        },
                    }}
                >
                    {/* <LogoSection
                                sx={{
                                    [theme.breakpoints.down("md")]: {
                                        display: "none",
                                    },
                                }}
                            /> */}
                    <Box />
                    <HeaderIconButton
                        color={"primary.dark"}
                        backgroundColor={"rgb(20, 45, 56)"}
                        hoverBackgroundColor={theme.palette.primary.light}
                        onClick={handleMenuClick}
                    >
                        <Menu />
                    </HeaderIconButton>
                </Box>

                {/* header search */}
                <Box>
                    <TextField
                        placeholder="Search"
                        slotProps={{
                            input: {
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <Search />
                                    </InputAdornment>
                                ),
                                endAdornment: (
                                    <HeaderIconButton
                                        color={"primary.dark"}
                                        backgroundColor={"rgb(20, 45, 56)"}
                                        hoverBackgroundColor={
                                            theme.palette.primary.light
                                        }
                                    >
                                        <Tune />
                                    </HeaderIconButton>
                                ),
                            },
                        }}
                        fullWidth
                    />
                </Box>

                <Box />
                <Box />
                <Grid container spacing={2}>
                    <Grid>
                        <HeaderIconButton
                            color={"primary.dark"}
                            backgroundColor={"rgb(20, 45, 56)"}
                            hoverBackgroundColor={theme.palette.primary.light}
                        >
                            <Sensors />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <HeaderIconButton
                            color={"secondary.dark"}
                            backgroundColor={"rgb(20, 45, 56)"}
                            hoverBackgroundColor={theme.palette.secondary.light}
                        >
                            <Translate />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <HeaderIconButton
                            color={"warning.main"}
                            backgroundColor={"rgb(20, 45, 56)"}
                            hoverBackgroundColor={"warning.light"}
                        >
                            <Notifications />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <HeaderIconButton
                            color={"secondary.dark"}
                            backgroundColor={"rgb(20, 45, 56)"}
                            hoverBackgroundColor={theme.palette.secondary.light}
                        >
                            <Fullscreen />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <HeaderIconButton
                            color={"primary.dark"}
                            backgroundColor={"rgb(20, 45, 56)"}
                            hoverBackgroundColor={theme.palette.primary.light}
                        >
                            <Menu />
                        </HeaderIconButton>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
