import { AccountCircle, Dashboard, Security } from "@mui/icons-material";

export const sidebarItems = [
    {
        id: "dashboard",
        subHeader: "Dashboard",
        children: [
            {
                id: "dashboard-home",
                label: "Dashboard",
                icon: Dashboard,
                url: "/dashboard",
            },
            {
                id: "dashboard-test",
                label: "Dashboard",
                icon: Dashboard,
                url: "/dashboard-test",
            },
        ],
    },
    {
        id: "settings",
        subHeader: "Settings",
        children: [
            {
                id: "settings-security",
                label: "Security",
                icon: Security,
                url: "/settings/security",
            },
            {
                id: "settings-account",
                label: "Account",
                icon: AccountCircle,
                url: "/settings/account",
            },
        ],
    },
];
