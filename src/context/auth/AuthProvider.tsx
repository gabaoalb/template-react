import { useState, useCallback, type PropsWithChildren } from "react";
import { AuthContext } from "./context";

function AuthProvider({ children }: PropsWithChildren) {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [user, setUser] = useState<{
        id: string;
        email: string;
        name: string;
    } | null>(null);

    const login = useCallback(
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        ({ email, password }: { email: string; password: string }) => {
            setIsAuthenticated(true);
            setUser({ id: "1", email, name: "User" });
        },
        []
    );

    const logout = useCallback(() => {
        setIsAuthenticated(false);
        setUser(null);
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthProvider;
