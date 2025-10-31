import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        mode: "dark",
        primary: {
            main: "rgb(0, 150, 136)",
        },
        secondary: {
            main: "rgb(120, 145, 156)",
        },
    },
    shape: {
        borderRadius: 8,
    },
});

export { theme };
