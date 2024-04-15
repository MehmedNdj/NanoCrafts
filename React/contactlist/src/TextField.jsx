import React from 'react';
import TextField from '@mui/material/TextField';

function MyTextField({ label, value, onChange }) {
  return (
    <TextField label={label} value={value} onChange={onChange} margin="normal" fullWidth />
  );
}

export default MyTextField;