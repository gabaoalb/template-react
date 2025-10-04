import { createContext } from "react";
import type { ModalMap, ModalsIdentifiersType } from "./interface";

export const ModalsContext = createContext<{
    modals: ModalMap;
    onOpen: (
        id: ModalsIdentifiersType,
        modalProps?: Record<string, unknown>
    ) => void;
    onClose: (id: ModalsIdentifiersType) => void;
} | null>(null);
