import { Settings } from "@mui/icons-material";
import { Avatar, Box, Chip, type ChipProps } from "@mui/material";

function UserAvatarButton({ id, onClick }: ChipProps) {
    return (
        <Chip
            id={id}
            avatar={<Avatar alt="user-images" src="sem.png" />}
            label={
                <Box width={24} height={24}>
                    <Settings />
                </Box>
            }
            color="secondary"
            variant="filled"
            onClick={onClick}
            sx={{
                height: "48px",
                borderRadius: "27px",
                "& .MuiAvatar-root": {
                    width: "34px",
                    height: "34px",
                    m: "8px 0 8px 8px",
                },
            }}
        />
    );
}

export default UserAvatarButton;
