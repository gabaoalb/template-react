import RouterProvider from "./router/RouterProvider";
import ThemeProvider from "./theme/ThemeProvider";
import ModalsProvider from "./modals/ModalsProvider";
import AuthProvider from "./auth/AuthProvider";
import LayoutProvider from "./layout/LayoutProvider";

function RootProvider(): React.JSX.Element {
    return (
        <AuthProvider>
            <ThemeProvider>
                <LayoutProvider>
                    <ModalsProvider>
                        <RouterProvider />
                    </ModalsProvider>
                </LayoutProvider>
            </ThemeProvider>
        </AuthProvider>
    );
}

export default RootProvider;
