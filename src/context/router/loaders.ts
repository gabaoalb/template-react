import { redirect } from "react-router";
import type { LoadersPayload } from "./interface";

export function requireAuth<T>({ isAuthenticated, loader }: LoadersPayload<T>) {
    return async () => {
        if (!isAuthenticated) {
            throw redirect("/login");
        }
        return loader?.();
    };
}

export function requireNoAuth<T>({
    isAuthenticated,
    loader,
}: LoadersPayload<T>) {
    return async () => {
        if (isAuthenticated) {
            throw redirect("/dashboard");
        }
        return loader?.();
    };
}
