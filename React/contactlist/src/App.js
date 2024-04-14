import React, { useState } from 'react';
import { Autocomplete } from '@material-ui/lab';
import { Button } from '@material-ui/core';
import { TextField } from '@material-ui/core';

function App() {
  const [options, setOptions] = useState(['John Doe', 'Jane Doe', 'New York']);
  const [inputValue, setInputValue] = useState('');
  const [selectedOption, setSelectedOption] = useState(null);

  const handleAddOrEditOption = () => {
    if (selectedOption) {
      const newOptions = options.map(option => option === selectedOption ? inputValue : option);
      setOptions(newOptions);
      setSelectedOption(null);
    } else {
      setOptions([...options, inputValue]);
    }
    setInputValue('');
  };

  return (
    <div>
      <Autocomplete
        value={selectedOption || inputValue}
        onChange={(event, newValue) => {
          setSelectedOption(newValue);
          setInputValue(newValue);
        }}
        id="controllable-states-demo"
        options={options}
        style={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Controllable" variant="outlined" />}
      />
      <Button variant="contained" color="primary" onClick={handleAddOrEditOption}>
        {selectedOption ? 'Edit Option' : 'Add Option'}
      </Button>
    </div>
  );
}

export default App;
