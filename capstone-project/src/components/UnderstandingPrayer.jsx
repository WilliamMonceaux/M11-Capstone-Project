import { Box, Container, Grid, Typography } from '@mui/material';

function UnderstandingPrayer() {
  return (
    <Box sx={{ minHeight: '60vh', display: 'flex', justifyContent: 'center', p: 0, my: 10, border: '2px solid brown' }}>
    <Grid
      container
      component="section"
      direction='column'
      sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1, width: '100%', p: 0, border: '2px solid red' }}
    >
    </Grid>
      <Container
        maxWidth="lg"
        sx={{ flexGrow: 1, p: 15, border: '2px solid green', width: '100%' }}
      ></Container>
    </Box>
  );
}

export { UnderstandingPrayer };
