import { Box, Container } from "@mui/material";
import type { PropsWithChildren } from "react";
import { useLayout } from "../../../context/layout/useLayout";

function Main({ children }: PropsWithChildren) {
    const { drawerWidth } = useLayout();

    return (
        <Box
            component="main"
            sx={{
                p: 2,
                mt: 1,
                mr: 2,
                gridArea: "main",
                overflowY: "auto",
                borderTopRightRadius: (t) => t.shape.borderRadius,
                borderTopLeftRadius: (t) => t.shape.borderRadius,
                // usa color-mix para clarear a cor (fallback: valor original)
                backgroundColor: (t) =>
                    t.palette.mode === "dark"
                        ? `color-mix(in srgb, ${t.palette.secondary.dark} 50%, black 50%)`
                        : `color-mix(in srgb, ${t.palette.secondary.light} 20%, white 80%)`,
                marginLeft: `${drawerWidth}px`,
                transition: (t) =>
                    t.transitions.create(["margin"], {
                        duration: t.transitions.duration.standard,
                        easing: t.transitions.easing.easeInOut,
                    }),
                willChange: "margin",
            }}
        >
            <Container>{children}</Container>
        </Box>
    );
}

export default Main;
