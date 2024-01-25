import axios from "axios"

const GetTasks = async () => {
  try {
    const response = await axios.get('http://localhost:5293/api/Tasks');
    return response.data;
  } catch (error) {
    console.log('Erro da solicitação get', error);
  }
}


const NewTasks = async (TaskBody) => {
    const postData = {
      Title: TaskBody.Title,
      Description: TaskBody.Description,
      IsCompleted: TaskBody.IsCompleted
    }
    try {
    const response = await axios.post('http://localhost:5293/api/Tasks', postData);
    return response;
  } catch (error) {
    console.log('Erro de criação', error);
    return error;
  }
};

const UpdateTasks = async (NewTask) => {
  const putData = {
    TaskId: NewTask.taskId,
    Title: NewTask.title,
    Description: NewTask.description,
    IsCompleted: NewTask.isCompleted
  };
  const url = `http://localhost:5293/api/Tasks/`;
  try {
    const response = await axios.put(url, putData);
    return response.data;
  } catch (error) {
    console.error('Erro na solicitação PUT:', error);
    return null;
  }
};

const DeleteTask = async (id) => {
  const url = `http://localhost:5293/api/Tasks/${id}`;
  try {
    const response = await axios.delete(url);
    return response.data;
  } catch (error) {
    console.log('Erro na solicitação:', error);
    return null;
  }
}


export {
  GetTasks,
  NewTasks,
  UpdateTasks,
  DeleteTask
}
