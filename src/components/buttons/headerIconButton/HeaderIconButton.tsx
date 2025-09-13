import { IconButton } from "@mui/material";
import type { PropsWithChildren } from "react";
import type { HeaderIconButtonProps } from "./interface";

function HeaderIconButton({
    children,
    color,
    backgroundColor,
    hoverColor,
    hoverBackgroundColor,
    size,
    onClick,
}: PropsWithChildren<HeaderIconButtonProps>) {
    return (
        <IconButton
            onClick={onClick}
            sx={{
                width: size || 34,
                height: size || 34,
                borderRadius: (theme) => `${theme.shape.borderRadius}px`, // usa o borderRadius do theme
                color: (theme) => color || theme.palette.text.primary,
                backgroundColor: (theme) =>
                    backgroundColor || theme.palette.divider,
                "& .MuiTouchRipple-root, & .MuiTouchRipple-ripple, & .MuiTouchRipple-child":
                    {
                        borderRadius: "inherit",
                    },
                "&:hover": {
                    color: hoverColor || "inherit",
                    backgroundColor: hoverBackgroundColor || "inherit",
                },
            }}
        >
            {children}
        </IconButton>
    );
}

export default HeaderIconButton;
