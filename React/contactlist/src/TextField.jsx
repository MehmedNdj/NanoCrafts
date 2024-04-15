import React from 'react';
import TextField from '@mui/material/TextField';

function MyTextField({ label, value }) {
  return (
    <TextField label={label} value={value} margin="normal" fullWidth />
  );
}

export default MyTextField;