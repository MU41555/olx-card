import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color = {'warning'} fullWidth = {true} style={{margin: "20px 0"}}>OLX Card</Button>
    </Stack>
  );
}