import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useState } from 'react';

const initialColumns = [
    { field: 'id', headerName: 'ID', width: 90 },
    { field: 'firstName', headerName: 'First name', width: 150, editable: true },
    { field: 'lastName', headerName: 'Last name', width: 150, editable: true },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
];

const initialRows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
];

function DataGridInfo() {
  const [rows, setRows] = useState(initialRows);
  const [columns, setColumns] = useState(initialColumns);
  const [selectionModel, setSelectionModel] = useState([]);

  const handleAdd = () => {
    const newRow = { id: rows.length + 1, lastName: 'New', firstName: 'Row', age: 0 };
    setRows([...rows, newRow]);
  };

  const handleDelete = () => {
    setRows(rows.filter(row => !selectionModel.includes(row.id)));
  };

  return (
    <div>
      <div className="info">
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          onSelectionModelChange={(newSelection) => {
            setSelectionModel(newSelection.selectionModel);
          }}
          selectionModel={selectionModel}
        />
      </div>
      <Button onClick={handleAdd}>Add</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  );
}

export default DataGridInfo;