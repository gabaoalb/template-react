import { Menu, MenuItem } from "@mui/material";
import { useLayout } from "../../../context/layout/useLayout";
import { useAuth } from "../../../context/auth/useAuth";

function UserAvatarMenu() {
    const { logout } = useAuth();

    const {
        userMenuAnchorEl,
        userMenuOpen,
        setUserMenuAnchorEl,
        toggleThemeDrawer,
    } = useLayout();

    const handleLogout = (
        _event: React.MouseEvent<HTMLElement> | object,
        callback?: () => void
    ) => {
        logout();
        callback?.();
    };

    const handleClose = () => {
        setUserMenuAnchorEl(null);
    };

    const handleThemeToggle = (
        _event: React.MouseEvent<HTMLElement> | object,
        callback?: () => void
    ) => {
        toggleThemeDrawer(true);
        callback?.();
    };

    return (
        <Menu
            id="user-avatar-menu"
            anchorEl={userMenuAnchorEl}
            open={userMenuOpen}
            onClose={handleClose}
            slotProps={{
                list: {
                    "aria-labelledby": "user-avatar-button",
                },
            }}
            sx={{ mt: 1 }}
        >
            <MenuItem
                onClick={(event) => handleThemeToggle(event, handleClose)}
            >
                Profile
            </MenuItem>
            <MenuItem onClick={handleClose}>My account</MenuItem>
            <MenuItem onClick={(event) => handleLogout(event, handleClose)}>
                Logout
            </MenuItem>
        </Menu>
    );
}

export default UserAvatarMenu;
