import { redirect } from "react-router";
import { store } from "../store/Store";

export function requireAuth<T>(loader?: () => Promise<T>) {
    return async () => {
        const { isAuthenticated } = store.getState().auth;
        if (!isAuthenticated) {
            throw redirect("/login");
        }
        return loader?.();
    };
}

export function requireNoAuth<T>(loader?: () => Promise<T>) {
    return async () => {
        const { isAuthenticated } = store.getState().auth;
        if (isAuthenticated) {
            throw redirect("/dashboard");
        }
        return loader?.();
    };
}
