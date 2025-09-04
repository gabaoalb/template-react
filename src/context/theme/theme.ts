import { createTheme } from "@mui/material";

const theme = createTheme({
    shape: {
        borderRadius: 12
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: `
                body {
                    background-color: #f5f5f5;
                }
            `
        }
    }
});

export { theme };
