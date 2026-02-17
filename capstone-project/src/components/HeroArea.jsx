import { Box, Typography } from '@mui/material';

function HeroArea({ Heading, Paragraph}) {
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
          flexDirection: 'row',
          alignItems: 'start',
          justifyContent: 'center',
          backgroundColor: 'white',
          width: '70%',
          flexGrow: 1,
        }}
      >
        <Box sx={{ width: '100%', m: '4rem', textAlign: 'center' }}>
          <Typography variant="h1" component="h1" sx={{ fontSize: '8.5rem' }}>
            Where healing and community is built
          </Typography>
        </Box>
        
      </Box>
    </Box>
  );
}

export { HeroArea };
