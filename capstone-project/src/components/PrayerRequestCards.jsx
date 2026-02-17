import { Box, Typography, Container, Avatar } from '@mui/material';

function PrayerRequestCards() {
  return (
    <Box
      sx={{
        minHeight: '40vh',
        display: 'flex',
        flexDirection: 'column',
        border: '2px solid blue',
        my: 10,
      }}
    >
      <Container
        maxWidth="sm"
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          border: '2px solid green',
        }}
      >
        <Box
          sx={{
            backgroundColor: '#EEEEEE',
            borderRadius: 2,
            p: 3,
            border: '2px solid black',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: 2,
              border: '2px solid orange',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1.5,
                border: '2px solid red',
              }}
            >
              <Avatar alt="User Profile" sx={{ fontSize: '1.4rem', color: 'black' }} />
              <Typography
                variant="h6"
                sx={{ fontSize: { xs: '1.5rem', md: '2.0rem' } }}
              >
                Username
              </Typography>
            </Box>
          </Box>
          <Typography variant='h6' sx={{ fontSize: { xs: '1.5rem', md: '2.0rem' }, display: 'block', my: 3 }}>
            Title
          </Typography>
          <Typography variant='body1' sx={{ mt: 1, mb: 4, fontSize: { xs: '1.2rem', md: '1.6rem' }}}>
            This is a paragraph.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
}

export { PrayerRequestCards };
