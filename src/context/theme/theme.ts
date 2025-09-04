import { createTheme } from "@mui/material";

const theme = createTheme({
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    background-color: #f5f5f5;
                }
            `,
        },
    },
});

export { theme };
