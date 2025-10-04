import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
    Box,
    Button,
    Card,
    CardContent,
    Container,
    IconButton,
    InputAdornment,
    Stack,
    TextField,
    Typography,
    CircularProgress,
    Grid,
    FormControlLabel,
    Divider,
} from "@mui/material";
import {
    CheckBox,
    Email,
    Lock,
    Visibility,
    VisibilityOff,
} from "@mui/icons-material";
import { authSchema, type AuthFormData } from "./schema";
import { useAppDispatch } from "../../context/store/ReduxHooks";
import { login } from "../../context/store/auth/AuthSlice";

function AuthPage() {
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<AuthFormData>({
        resolver: zodResolver(authSchema),
    });

    const dispatch = useAppDispatch();

    const onSubmit = ({ email, password }: AuthFormData) => {
        setLoading(true);
        // Simula requisição
        setTimeout(() => {
            console.log("Login simulated:", { email, password });
            setLoading(false);
            dispatch(login({ email, password }));
        }, 900);
    };

    return (
        <Container
            sx={{
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Card
                elevation={6}
                sx={{
                    width: { xs: "100%", sm: 420 },
                    mx: 2,
                }}
            >
                <CardContent sx={{ backgroundColor: "#14252f" }}>
                    <Stack
                        spacing={3}
                        component="form"
                        onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container justifyContent="center">
                            <img src="/logo.png" alt="Logo" />
                        </Grid>

                        <Box>
                            <Typography
                                variant="h5"
                                component="h1"
                                gutterBottom
                                textAlign={"center"}
                            >
                                Welcome back
                            </Typography>
                            <Typography
                                color="text.secondary"
                                variant="body2"
                                textAlign={"center"}
                            >
                                Sign in to continue to the dashboard.
                            </Typography>
                        </Box>

                        <TextField
                            {...register("email")}
                            label="Email"
                            error={Boolean(errors.email)}
                            helperText={errors.email?.message}
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Email fontSize="small" />
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <TextField
                            {...register("password")}
                            label="Password"
                            type={showPassword ? "text" : "password"}
                            error={Boolean(errors.password)}
                            helperText={errors.password?.message}
                            fullWidth
                            slotProps={{
                                input: {
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Lock fontSize="small" />
                                        </InputAdornment>
                                    ),
                                    endAdornment: (
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label={
                                                    showPassword
                                                        ? "Hide password"
                                                        : "Show password"
                                                }
                                                onClick={() =>
                                                    setShowPassword((s) => !s)
                                                }
                                                edge="end"
                                            >
                                                {showPassword ? (
                                                    <VisibilityOff />
                                                ) : (
                                                    <Visibility />
                                                )}
                                            </IconButton>
                                        </InputAdornment>
                                    ),
                                },
                            }}
                        />

                        <Grid container justifyContent="space-between" pl={1}>
                            <Box>
                                <FormControlLabel
                                    control={<CheckBox />}
                                    label="Remember me"
                                />
                            </Box>
                            <Button size="small">Forgot password?</Button>
                        </Grid>

                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            disabled={loading}
                            sx={{ py: 1.5 }}
                        >
                            {loading ? (
                                <CircularProgress size={20} color="inherit" />
                            ) : (
                                "Sign in"
                            )}
                        </Button>

                        <Divider />

                        <Box display={"flex"} justifyContent="center">
                            <Button variant="text" onClick={() => {}}>
                                Don't have an account?
                            </Button>
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Container>
    );
}

export default AuthPage;
