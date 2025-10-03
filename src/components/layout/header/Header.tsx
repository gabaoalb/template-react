import {
    AppBar,
    Box,
    Grid,
    InputAdornment,
    Menu,
    MenuItem,
    TextField,
    Toolbar,
    useTheme,
} from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
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
import UserAvatarButton from "../../buttons/userAvatarButton/UserAvatarButton";
import { useState } from "react";
import { logout } from "../../../context/store/auth/AuthSlice";

function Header() {
    // #region Hooks
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const theme = useTheme();

    const dispatch = useAppDispatch();

    const { leftDrawerOpen } = useAppSelector(
        (state: RootState) => state.layout
    );

    const handleMenuClick = () => {
        dispatch(toggleSidebar(!leftDrawerOpen));
    };

    const handleAvatarButtonClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = (
        _event: React.MouseEvent<HTMLElement> | object,
        _reason?: "backdropClick" | "escapeKeyDown",
        callback?: () => void
    ) => {
        dispatch(logout());
        callback?.();
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
                <Grid container spacing={2} alignItems="center">
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
                        <UserAvatarButton
                            id="user-avatar-button"
                            onClick={handleAvatarButtonClick}
                        />
                        <Menu
                            id="user-avatar-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            slotProps={{
                                list: {
                                    "aria-labelledby": "user-avatar-button",
                                },
                            }}
                            sx={{ mt: 1 }}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>
                                My account
                            </MenuItem>
                            <MenuItem onClick={handleLogout}>Logout</MenuItem>
                        </Menu>
                    </Grid>
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
