import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';

function Contacts() {
  const [anchorEl, setAnchorEl] = useState(null);
  const data = [
    { name: 'John Doe', phone: '123-456-7890', address: '123 Main St' },
    { name: 'Jane Doe', phone: '098-765-4321', address: '456 Elm St' },
    { name: 'Joe Schmoe', phone: '555-555-5555', address: '789 Oak St'},
    {name: 'Jill Smith', phone: '111-222-3333', address: '321 Pine St'},
    {name: 'Cecilia Manara', phone: '444-444-4444', address: 'Klatovska 51'}
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="menu">
      <Button  onClick={handleClick}>
        Contacts
      </Button>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((item, index) => (
          <MenuItem key={index} onClick={handleClose}>
            {item.name} - Phone: {item.phone}, Address: {item.address}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default Contacts;