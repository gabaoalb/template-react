import { Button, Stack } from "@mui/material";
import { useModal } from "../../context/modals/useModal";

function DashboardPage() {
    const { onOpen: openExampleModal } = useModal("ExampleModal");

    return (
        <Stack>
            <h1>Dashboard</h1>
            <Button variant="contained" onClick={() => openExampleModal()}>
                Example Modal
            </Button>
        </Stack>
    );
}

export default DashboardPage;
