import React from 'react';
import { Box, Typography, TextField, Button, Card, CardContent, Avatar } from '@mui/material';

function AccountSettings() {
  return (
    <Box sx={{ p: 3 }}>
      <Card variant="outlined">
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, maxWidth: 400 }}>
          <Typography variant="h4">Profile Settings</Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            <Avatar sx={{ width: 56, height: 56 }} />
            <Button variant="outlined" component="label">
              Change Photo
              <input hidden accept="image/*" type="file" />
            </Button>
          </Box>
          <TextField label="Username" defaultValue="User123" fullWidth />
          <TextField label="Email" defaultValue="user@example.com" fullWidth />
          <TextField label="New Password" type="password" fullWidth />
          <Button variant="contained" sx={{ mt: 2 }}>Save Changes</Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AccountSettings;