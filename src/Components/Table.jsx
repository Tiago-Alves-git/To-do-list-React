import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'taskId', headerName: 'ID', width: 90 },
  {
    field: 'title',
    headerName: 'Title',
    width: 150,
    editable: true,
  },
  {
    field: 'description',
    headerName: 'Description',
    width: 350,
    editable: true,
  },
];

const getRowId = (row) => row.taskId; // Assuming `taskId` is unique for each row


const Table = ({ tasks, updateTask }) => {
  // Check if tasks is an empty array, if yes, don't render the table
  return (
      <Box sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={tasks}
          columns={columns}
          getRowId={getRowId}
          onCellEditStop={(params) => updateTask(params)}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          disableRowSelectionOnClick
        />
      </Box>
    );
};

export default Table;