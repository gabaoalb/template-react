export const ModalsIdentifiers = ["ExampleModal"] as const;

export type ModalsIdentifiersType = (typeof ModalsIdentifiers)[number];

export interface ModalState {
    id: ModalsIdentifiersType;
    isOpen: boolean;
    modalProps?: Record<string, unknown>;
}

export type ModalMap = Record<ModalsIdentifiersType, ModalState>;
