import { Typography } from '@mui/material';

function PrayerContent({ title, content }) {
  return (
    <>
      {/* Prayer Title a user submits*/}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 800,
          mb: 1,
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>

      {/* Prayer Content a user submits and ask prayers for  */}
      <Typography
        variant="body2"
        sx={{
          color: 'text.secondary',
          mb: 4,
          lineHeight: 1.6,
        }}
      >
        {content}
      </Typography>
    </>
  );
}

export { PrayerContent };
