import { Typography, Grid } from '@mui/material';
import { RequestBtn } from '../components/RequestBtn';

function HeroArea({ heading, paragraph, button }) {
  return (
    <Grid
      container
      component="section"
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: '60vh',
        background: 'linear-gradient(to bottom, #43E97B, #38F9D7)',
        width: '100%',
        borderBottom: '1px solid black',
      }}
    >
      <Grid
        item
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 2,
          backgroundImage:
            'radial-gradient(ellipse at 50% 50%, hsl(210, 100%, 97%), hsl(0, 0%, 100%))',
          width: '70%',
          flexGrow: 1,
        }}
      >
        <Grid item sx={{ width: '80%', textAlign: 'center', mt: 2 }}>
          <Typography
            variant="h1"
            sx={{
              fontSize: 'clamp(3.91rem, 8vw + 1rem, 7.3rem)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
              wordBreak: 'keep-all',
              textShadow: '0px 6px 12px rgba(0,0,0,0.35)',
            }}
          >
            {heading}
          </Typography>
        </Grid>

        <Grid item sx={{ textAlign: 'center', mt: 2, width: '60%' }}>
          <Typography
            sx={{
              fontSize: { xs: '1.4rem', md: '1.6rem' },
              textShadow: '0px 6px 12px rgba(0,0,0,0.35)',
            }}
          >
            {paragraph}
          </Typography>
        </Grid>

        <RequestBtn text='Request A Prayer' />
      </Grid>
    </Grid>
  );
}

export { HeroArea };
