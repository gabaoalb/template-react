import { Box, Container } from "@mui/material";
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
                borderTopRightRadius: (theme) => theme.shape.borderRadius,
                borderTopLeftRadius: (theme) => theme.shape.borderRadius,
                backgroundColor: "rgb(14, 27, 35)",
            }}
        >
            <Container>{children}</Container>
        </Box>
    );
}

export default Main;
