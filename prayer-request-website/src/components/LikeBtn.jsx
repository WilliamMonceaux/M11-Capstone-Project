import { Box, Button, Typography } from '@mui/material';
import Image from 'next/image';
import { green } from '../lib/theme/customizations/themePrimitives';

function LikeBtn({ author, toggle, prayed, prayCount }) {
  return (
    <>
      <Button
        onClick={toggle}
        disabled={author}
        startIcon={
          <Box
            sx={{
              position: 'relative',
              width: { xs: 20, md: 26, xl: 32 },
              height: { xs: 20, md: 26, xl: 32 },
            }}
          >
            <Image
              src={
                prayed
                  ? '/images/like-btn-praying.png'
                  : '/images/like-btn-praying-outlined.png'
              }
              alt="Pray"
              fill
              style={{ objectFit: 'contain' }}
              sizes="32px"
            />
          </Box>
        }
        sx={{
          textTransform: 'none',
          fontWeight: 700,
          borderRadius: '2rem',
          color: prayed ? green[500] : 'inherit',
          backgroundColor: prayed ? 'rgba(46, 125, 50, 0.08)' : 'transparent',
        }}
      >
        {prayed ? 'Prayed' : 'Pray'}
      </Button>
      <Typography
        variant="body2"
        sx={{
          fontWeight: 800,
        }}
      >
        {prayCount}
      </Typography>
    </>
  );
}

export { LikeBtn };
