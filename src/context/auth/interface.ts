export interface AuthContextType {
    isAuthenticated: boolean;
    user: {
        id: string;
        email: string;
        name: string;
    } | null;
    login: ({ email, password }: { email: string; password: string }) => void;
    logout: () => void;
}
