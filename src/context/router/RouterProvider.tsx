import {
    createBrowserRouter,
    RouterProvider as RemixRouterProvider,
    redirect,
} from "react-router";
import Layout from "../../components/layout/Layout";
import DashboardPage from "../../pages/dashboard/DashboardPage";
import AuthPage from "../../pages/auth/AuthPage";
import { requireAuth, requireNoAuth } from "./loaders";

function RouterProvider() {
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
                    loader: requireNoAuth(),
                    Component: AuthPage,
                },
            ],
        },
    ]);

    return <RemixRouterProvider router={router} />;
}

export default RouterProvider;
