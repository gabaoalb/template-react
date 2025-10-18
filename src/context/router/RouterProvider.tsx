import {
    createBrowserRouter,
    RouterProvider as RemixRouterProvider,
    redirect,
} from "react-router";
import Layout from "../../components/layout/Layout";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import AuthPage from "../../pages/auth/AuthPage";
import { requireAuth, requireNoAuth } from "./loaders";
import { useAuth } from "../auth/useAuth";

function RouterProvider() {
    const { isAuthenticated } = useAuth();

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
                    loader: requireAuth({
                        isAuthenticated,
                        loader: async () => {
                            // fetch dashboard data
                        },
                    }),
                    Component: DashboardPage,
                },
                {
                    path: "login",
                    loader: requireNoAuth({ isAuthenticated }),
                    Component: AuthPage,
                },
            ],
        },
    ]);

    return <RemixRouterProvider router={router} />;
}

export default RouterProvider;
