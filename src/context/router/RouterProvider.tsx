import {
    createBrowserRouter,
    RouterProvider as RemixRouterProvider,
    redirect,
} from "react-router";
import { useAppSelector } from "../store/ReduxHooks";
import type { RootState } from "../store/interface";
import Layout from "../../components/layout/Layout";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import AuthPage from "../../pages/auth/AuthPage";

function RouterProvider() {
    const { isAuthenticated } = useAppSelector(
        (state: RootState) => state.auth
    );

    function requireAuth<T>(loader: () => Promise<T>) {
        return async () => {
            if (!isAuthenticated) {
                throw redirect("/login");
            }
            return loader();
        };
    }

    function requireNoAuth<T>(loader: () => Promise<T>) {
        return async () => {
            if (isAuthenticated) {
                throw redirect("/dashboard");
            }
            return loader();
        };
    }

    const router = createBrowserRouter([
        {
            path: "/",
            Component: Layout,
            children: [
                {
                    index: true, // rota de índice para "/"
                    loader: async () => {
                        throw redirect("/dashboard");
                    },
                },
                {
                    path: "dashboard",
                    loader: requireAuth(async () => {
                        // fetch dashboard data
                    }),
                    Component: DashboardPage,
                },
                {
                    path: "login",
                    loader: requireNoAuth(async () => {
                        // fetch login data
                    }),
                    Component: AuthPage,
                },
            ],
        },
    ]);

    return <RemixRouterProvider router={router} />;
}

export default RouterProvider;
