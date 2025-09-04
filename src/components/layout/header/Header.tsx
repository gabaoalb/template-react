import { AppBar, Box, Grid, Toolbar, useTheme } from "@mui/material";

function Header() {
    console.log("Header rendered");
    const theme = useTheme();

    return (
        <AppBar
            enableColorOnDark
            position="fixed"
            color="inherit"
            elevation={0}
            sx={{
                // backgroundColor: theme.palette.background.default,
                // transition: leftDrawerOpen
                //     ? theme.transitions.create("width")
                //     : "none",
                gridArea: "header",
            }}
        >
            <Toolbar>
                <Box
                    display="flex"
                    justifyContent="space-between"
                    sx={{
                        width: 214,
                        [theme.breakpoints.down("md")]: {
                            width: "auto",
                        },
                    }}
                >
                    {/* <LogoSection
                        sx={{
                            [theme.breakpoints.down("md")]: {
                                display: "none",
                            },
                        }}
                    /> */}
                    {/* <ButtonHeader
                        ButtonProps={{
                            onClick: () => dispatch(toggleSidebar()),
                        }}
                    >
                        <Icon name="bars" size={16} />
                    </ButtonHeader> */}
                </Box>

                {/* header search */}
                <Box sx={{ flexGrow: 1 }}>SearchInput</Box>
                <Box sx={{ flexGrow: 1 }} />

                {/* notification & profile */}
                <Grid container spacing={2}>
                    <Grid>{/* <LanguageSelector /> */}</Grid>
                </Grid>
                <Grid sx={{ marginLeft: "16px" }}>
                    {/* <ProfileSection version={version} /> */}
                </Grid>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
