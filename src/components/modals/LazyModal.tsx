import { lazy, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import type { ModalsIdentifiersType } from "../../context/modals/interface";
import { useModal } from "../../context/modals/useModal";
import { LoadingBackdrop } from "../loadingBackdrop/LoadingBackdrop";

export function LazyModal({
    modalIdentifier,
}: {
    modalIdentifier: ModalsIdentifiersType;
}) {
    const { modal, onClose } = useModal(modalIdentifier);

    const { isOpen, modalProps } = modal || {};

    const Component = lazy(
        () => import(`./${modalIdentifier}/${modalIdentifier}.tsx`)
    );

    return (
        <ErrorBoundary fallback={<>Error Boundary</>} onError={() => {}}>
            <Suspense fallback={<LoadingBackdrop />}>
                {modalIdentifier ? (
                    <Component
                        open={isOpen}
                        onClose={onClose}
                        {...modalProps}
                    />
                ) : null}
            </Suspense>
        </ErrorBoundary>
    );
}
