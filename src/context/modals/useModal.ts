import { useCallback, useContext } from "react";
import { ModalsContext } from "./context";
import type { ModalsIdentifiersType } from "./interface";

export function useModal(modalIdentifier?: ModalsIdentifiersType) {
    const context = useContext(ModalsContext);

    if (!context) {
        throw new Error("useModal must be used within a ModalsProvider");
    }

    if (!modalIdentifier) {
        throw new Error("modalIdentifier is required");
    }

    const handleOpen = useCallback(
        (modalProps?: Record<string, unknown>) => {
            context.onOpen(modalIdentifier, modalProps);
        },
        [context, modalIdentifier]
    );

    const handleClose = useCallback(() => {
        context.onClose(modalIdentifier);
    }, [context, modalIdentifier]);

    return {
        modal: context.modals[modalIdentifier],
        onOpen: handleOpen,
        onClose: handleClose,
    };
}
