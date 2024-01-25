import React from 'react';
import '../Style/AddTaskForm.css';
import { Box, Button, Modal, TextField } from '@mui/material';
import { GetTasks, NewTasks } from '../Service/Tasks';

function AddTaskForm({ Show, setNewTask, newTask, SetShow, setTasks }) {
  if (!Show) {
    return null;
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewTask((prevTask) => ({
      ...prevTask,
      [name]: value
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Add your logic to handle the form submission (e.g., send data to the server)
    const body = {
      Title: newTask.title,
      Description: newTask.description,
      IsComplete: false
    }
    await NewTasks(body);
    const response = await GetTasks(); 
    setTasks(response);
    SetShow(!Show);
  };

  const handleOverlayClick = () => {
      SetShow(!Show);
  };

  const { title, description } = newTask;
  return (
    <Modal 
    className="modal-overlay" 
    onClose={handleOverlayClick}
    open={Show}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description"
    >
      <Box 
      className="add-task-form" 
      onSubmit={handleSubmit}
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
      <Button variant='text' className="close-button" onClick={() => SetShow(!Show)}>
          Close
        </Button>
        <TextField 
        id="outlined-basic" 
        label="Title"
        name="title"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        value={title}
        required
        />

       <TextField 
        id="outlined-basic" 
        label="Description"
        name="description"
        variant="outlined"
        onChange={(e) => handleChange(e)}
        value={description}
        required
        />
        <Button type="button" variant='contained' onClick={(e) => handleSubmit(e)}>Add</Button>
      </Box>
    </Modal>
  )
}

export default AddTaskForm