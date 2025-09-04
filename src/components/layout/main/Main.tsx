import type { PropsWithChildren } from "react";
import { Box } from "@mui/material";

function Main({ children }: PropsWithChildren) {
    return (
        <Box
            component="main"
            sx={{ p: 2, gridArea: "main", overflowY: "auto" }}
        >
            {children}
        </Box>
    );
}

export default Main;
