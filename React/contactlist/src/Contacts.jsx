import React, { useState } from 'react';
import { Button, Menu, MenuItem } from '@mui/material';
import MyTextField from './TextField';

function Contacts() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedContact, setSelectedContact] = useState({ name: '', phone: '', address: '' });
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [data, setData] = useState([
    { name: 'John Doe', phone: '123-456-7890', address: '123 Main St' },
    { name: 'Jane Doe', phone: '098-765-4321', address: '456 Elm St' },
    { name: 'Joe Smith', phone: '321-654-0987', address: '789 Maple St'},
    { name: 'Jill Smith', phone: '567-890-1234', address: '987 Oak St'},
    { name: 'Jack Black', phone: '654-321-7890', address: '654 Pine St'}
  ]);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleMenuItemClick = (contact, index) => {
    setSelectedContact(contact);
    setSelectedIndex(index);
    handleClose();
  };

  const handleSave = () => {
    const newData = [...data];
    newData[selectedIndex] = selectedContact;
    setData(newData);
  };

  return (
    <div>
      <Button onClick={handleClick}>
        Open Menu
      </Button>

      <MyTextField label="Name" value={selectedContact.name} onChange={(e) => setSelectedContact({ ...selectedContact, name: e.target.value })} />
      <MyTextField label="Phone" value={selectedContact.phone} onChange={(e) => setSelectedContact({ ...selectedContact, phone: e.target.value })} />
      <MyTextField label="Address" value={selectedContact.address} onChange={(e) => setSelectedContact({ ...selectedContact, address: e.target.value })} />

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {data.map((item, index) => (
          <MenuItem key={index} onClick={() => handleMenuItemClick(item, index)}>
            {item.name} - Phone: {item.phone}, Address: {item.address}
          </MenuItem>
        ))}
      </Menu>
      <Button onClick={handleSave}>
        Save
      </Button>
    </div>
  );
}

export default Contacts;