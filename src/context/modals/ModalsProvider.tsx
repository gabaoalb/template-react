import { useCallback, useState, type PropsWithChildren } from "react";
import { ModalsContext } from "./context";
import type { ModalMap, ModalsIdentifiersType } from "./interface";
import { LazyModal } from "../../components/modals/LazyModal";

function ModalsProvider({ children }: PropsWithChildren) {
    const [modals, setModals] = useState<ModalMap>({
        ExampleModal: { id: "ExampleModal", isOpen: false },
    } as ModalMap);

    const openModals = Object.keys(modals).filter(
        (modalId) => modals[modalId as keyof ModalMap].isOpen
    );

    const onOpen = useCallback(
        (id: ModalsIdentifiersType, modalProps?: Record<string, unknown>) => {
            setModals((prev) => ({
                ...prev,
                [id]: { id, isOpen: true, modalProps },
            }));
        },
        []
    );

    const onClose = useCallback((id: ModalsIdentifiersType) => {
        setModals((prev) => ({
            ...prev,
            [id]: { ...prev[id], isOpen: false },
        }));
    }, []);

    return (
        <ModalsContext.Provider value={{ modals, onOpen, onClose }}>
            {openModals.map((modalIdentifier) => (
                <LazyModal
                    key={modalIdentifier}
                    modalIdentifier={modalIdentifier as ModalsIdentifiersType}
                />
            ))}
            {children}
        </ModalsContext.Provider>
    );
}

export default ModalsProvider;
