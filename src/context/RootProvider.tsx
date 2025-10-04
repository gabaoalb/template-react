import { Provider } from "react-redux";
import RouterProvider from "./router/RouterProvider";
import ThemeProvider from "./theme/ThemeProvider";
import { store } from "./store/Store";
import ModalsProvider from "./modals/ModalsProvider";

function RootProvider(): React.JSX.Element {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <ModalsProvider>
                    <RouterProvider />
                </ModalsProvider>
            </ThemeProvider>
        </Provider>
    );
}

export default RootProvider;
