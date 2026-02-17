import { Box, Typography, Container } from '@mui/material';

function PrayerRequestCards() {
    return(
        <Box sx={{ minHeight: '40vh', display: 'flex', flexDirection: 'column', border: '2px solid blue', my: 10 }}>
            <Container maxWidth='lg' sx={{ flexGrow: 1, display: 'flex', width: '100%', border: '2px solid green' }}>
                <Box sx={{ p: 3, backgroundColor: '#EEEEEE', borderRadius: 2, border: '1px solid black', position: 'relative' }}>

                </Box>
            </Container>
        </Box>
    )
}

export { PrayerRequestCards };