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
    return response.data;
  } catch (error) {
    console.log('Erro de criação', error);
    return null;
  }
};

const UpdateTasks = async (NewTask, value) => {
  const { row } = NewTask;  
  const putData = {
    TaskId: row.taskId,
    Title: row.title,
    Description: row.description,
    IsCompleted: row.isCompleted
  };
  console.log(putData);
  const url = `http://localhost:5293/api/Tasks/`;
  try {
    const response = await axios.put(url, putData);
    return response.data;
  } catch (error) {
    console.error('Erro na solicitação PUT:', error);
    return null;
  }
};


export {
  GetTasks,
  NewTasks,
  UpdateTasks
}
