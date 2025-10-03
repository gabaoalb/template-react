export interface LoadersPayload<T> {
    isAuthenticated: boolean;
    loader?: () => Promise<T>;
}
