import React, { useState } from 'react';
import './App.css';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core';

function App() {

  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  }

  return (
    <FormControl>
      <InputLabel id="demo-simple-select-label">Age</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={age}
        label="Age"
        onChange={handleChange}>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  );
}

export default App;
