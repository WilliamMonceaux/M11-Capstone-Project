import { Box, Typography } from '@mui/material';

function HeroArea({ heading, paragraph }) {
  return (
    <Box
      component="section"
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: '60vh',
        background: 'linear-gradient(to bottom, #43E97B, #38F9D7)',
        width: '100%',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: '70%',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 0.5,
            width: '100%',
          }}
        >
          <Box sx={{ width: '80%', textAlign: 'center', mb: 2 }}>
            <Typography variant="h1" component="h1" sx={{ fontSize: '8.0rem' }}>
              {heading}
            </Typography>
          </Box>
          <Box sx={{ mt: '2rem' }}>
            <Typography sx={{ fontSize: '1.6rem' }}>{paragraph}</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export { HeroArea };
