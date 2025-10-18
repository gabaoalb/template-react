import { createContext } from "react";
import type { LayoutContextState } from "./interface";

export const LayoutContext = createContext<LayoutContextState | null>(null);
