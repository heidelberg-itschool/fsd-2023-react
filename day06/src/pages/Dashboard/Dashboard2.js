import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

function Dashboard2() {
    return ( <>
        <h1>Dashboard2 page</h1>
        <Stack spacing={2} direction="row">
            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
        </Stack>
    </> );
}

export default Dashboard2;