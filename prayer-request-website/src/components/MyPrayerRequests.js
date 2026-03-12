import React from 'react';
import { Box, Typography } from '@mui/material';

function MyPrayerRequests() {
  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4">My Prayer Requests</Typography>
      <Typography variant="body1">List of past requests will appear here.</Typography>
    </Box>
  );
}

export default MyPrayerRequests;