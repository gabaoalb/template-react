import {
    AppBar,
    Box,
    Grid,
    InputAdornment,
    TextField,
    Toolbar,
    useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import HeaderIconButton from "../../buttons/headerIconButton/HeaderIconButton";

import Search from "@mui/icons-material/Search";
import {
    Fullscreen,
    Notifications,
    Sensors,
    Translate,
    Tune,
} from "@mui/icons-material";
import UserAvatarButton from "../../buttons/userAvatarButton/UserAvatarButton";
import { useLayout } from "../../../context/layout/useLayout";
import { DRAWER_WIDTH_OPEN } from "../../../context/layout/LayoutProvider";
import UserAvatarMenu from "../../menus/userAvatarMenu/UserAvatarMenu";

function Header() {
    // #region Hooks
    const theme = useTheme();

    const { leftDrawerOpen, toggleSidebar, setUserMenuAnchorEl } = useLayout();

    const handleMenuClick = () => {
        toggleSidebar(!leftDrawerOpen);
    };

    const handleAvatarButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setUserMenuAnchorEl(event.currentTarget);
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
                        hoverBackgroundColor={theme.palette.primary.light}
                        onClick={handleMenuClick}
                    >
                        <MenuIcon />
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
                <Grid container spacing={2} alignItems="center">
                    <Grid>
                        <HeaderIconButton
                            color={"primary.dark"}
                            hoverBackgroundColor={theme.palette.primary.light}
                        >
                            <Sensors />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <HeaderIconButton
                            color={"secondary.dark"}
                            hoverBackgroundColor={theme.palette.secondary.light}
                        >
                            <Translate />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <HeaderIconButton
                            color={"warning.main"}
                            hoverBackgroundColor={"warning.light"}
                        >
                            <Notifications />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <HeaderIconButton
                            color={"secondary.dark"}
                            hoverBackgroundColor={theme.palette.secondary.light}
                        >
                            <Fullscreen />
                        </HeaderIconButton>
                    </Grid>
                    <Grid>
                        <UserAvatarButton
                            id="user-avatar-button"
                            onClick={handleAvatarButtonClick}
                        />
                        <UserAvatarMenu />
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
