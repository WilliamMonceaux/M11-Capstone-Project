'use client';
import { HeroArea } from '@/components/HeroArea';
import { PrayerRequestCards } from '@/components/PrayerRequestCards';
import { UnderstandingPrayer } from '@/components/UnderstandingPrayer';
import { Pagination } from '@/components/Pagination';
import { Typography, Container } from '@mui/material';

export default function Home() {
  return (
    <>
      <header>
        <HeroArea
          heading="Where healing and community is built"
          paragraph="Join a community dedicated to lifting one another up. Share your prayer request and experience the strength of being known and supported"
          button="Create an Account"
        />
        <UnderstandingPrayer />
      </header>

      <main>
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Typography
            variant="h2"
            component="h2"
            gutterBottom
            sx={{
              fontSize: 'clamp(3.5rem, 5vw + 1.5rem, 4.88rem)',
              textAlign: 'center',
              fontWeight: 'bold',
              lineHeight: 1.2,
              textShadow: '0px 6px 12px rgba(0,0,0,0.35)',
            }}
          >
            Community Prayer Requests
          </Typography>
        </Container>
        <PrayerRequestCards />
      </main>
      <Pagination />
    </>
  );
}
