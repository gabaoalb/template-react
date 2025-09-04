import { Box } from "@mui/material";
import type { PropsWithChildren } from "react";

function Main({ children }: PropsWithChildren) {
    return (
        <Box
            component="main"
            sx={{
                p: 2,
                mt: 1,
                mr: 2,
                gridArea: "main",
                overflowY: "auto",
                border: "1px solid red",
                borderTopRightRadius: (theme) => theme.shape.borderRadius,
                borderTopLeftRadius: (theme) => theme.shape.borderRadius
            }}
        >
            {children}
        </Box>
    );
}

export default Main;
