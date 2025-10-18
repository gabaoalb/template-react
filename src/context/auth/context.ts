import { createContext } from "react";
import type { AuthContextType } from "./interface";

export const AuthContext = createContext<AuthContextType | null>(null);
