import { Provider } from "react-redux";
import RouterProvider from "./router/RouterProvider";
import ThemeProvider from "./theme/ThemeProvider";
import { store } from "./store/Store";

function RootProvider(): React.JSX.Element {
    return (
        <Provider store={store}>
            <ThemeProvider>
                <RouterProvider />
            </ThemeProvider>
        </Provider>
    );
}

export default RootProvider;
