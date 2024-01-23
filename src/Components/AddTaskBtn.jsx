import { Button } from '@mui/material';
import React from 'react'

function AddTaskBtn({ Show, SetShow }) {
  const handleChange = () => {
    SetShow(!Show);
  };
  return (
    <Button variant='contained' onClick={handleChange}> Add new Tasks + </Button>
  )
}

export default AddTaskBtn