import { useLocation } from "react-router";
import {
    isSidebarGroup,
    isSidebarItem,
    type SidebarElement,
} from "../interface";
import {
    Box,
    Divider,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Typography,
} from "@mui/material";
import { useLayout } from "../../../../context/layout/useLayout";

function SidebarList({ sidebarItems }: { sidebarItems: SidebarElement[] }) {
    const { leftDrawerOpen } = useLayout();

    const location = useLocation();
    const currentPath = location.pathname;

    return sidebarItems.map((item) => {
        if (isSidebarGroup(item)) {
            return (
                <>
                    <List
                        key={item.id}
                        subheader={
                            leftDrawerOpen ? (
                                <>
                                    <Typography
                                        component="span"
                                        variant="caption"
                                        id={item.id}
                                    >
                                        {item.subHeader}
                                    </Typography>
                                </>
                            ) : null
                        }
                        sx={{ py: 0 }}
                    >
                        <SidebarList sidebarItems={item.children} />
                    </List>
                    {leftDrawerOpen ? <Divider sx={{ my: 1 }} /> : null}
                </>
            );
        }
        if (isSidebarItem(item)) {
            const Icon = item.icon;
            return (
                <ListItemButton
                    key={item.id}
                    selected={currentPath === item.url}
                    sx={{
                        borderRadius: (theme) =>
                            `${theme.shape.borderRadius}px`,
                        mb: 0.5,
                    }}
                >
                    {leftDrawerOpen ? (
                        <ListItemIcon>
                            <Icon />
                        </ListItemIcon>
                    ) : (
                        <Box
                            display={"flex"}
                            justifyContent="center"
                            width="100%"
                        >
                            <Icon />
                        </Box>
                    )}
                    {leftDrawerOpen ? (
                        <ListItemText primary={item.label} />
                    ) : null}
                </ListItemButton>
            );
        }
        return null;
    });
}

export default SidebarList;
