import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import MyTextField from './TextField';

function Contacts() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContact, setSelectedContact] = useState({ name: '', phone: '', address: '' });

  const data = [
    { name: 'John Doe', phone: '123-456-7890', address: '123 Main St' },
    { name: 'Jane Doe', phone: '098-765-4321', address: '456 Elm St' },
    { name: 'Joe Smith', phone: '111-222-3333', address: '789 Oak St'},
    { name: 'Jill Smith', phone: '444-555-6666', address: '012 Pine St'},
    { name: 'Jack Black', phone: '777-888-9999', address: '345 Maple St'}
  ];

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (contact) => {
    setSelectedContact(contact);
    handleClose();
  };

  return (
    <div>
        <div className='buttons'>
            <Button onClick={handleClick}>
            Select Contact
            </Button>
        </div>

        <div className='textfields'>
            <MyTextField label="Name" value={selectedContact.name} />
            <MyTextField label="Phone" value={selectedContact.phone} />
            <MyTextField label="Address" value={selectedContact.address} />
        </div>

        <div className='menu'>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleClose}>
            {data.map((item, index) => (
                <MenuItem key={index} onClick={() => handleMenuItemClick(item)}>
                    {item.name} - Phone: {item.phone}, Address: {item.address}
                </MenuItem>
             ))}
            </Menu>
        </div>
    </div>
  );
}

export default Contacts;