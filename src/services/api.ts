import axios from "axios";

const API_URL = "http://localhost:8000/api/tasks";


export const fetchTasks =  async () => {

    const response = await axios.get(API_URL);
    return response.data;
};


export const createTask = async (title: string, parentId?: number) => {
    
    const response = parentId ?
        await axios.post(`${API_URL}/${parentId}/subtasks`, {title}) :
        await axios.post(API_URL, {title});
    
    return response.data;
}

export const deleteTask = async ( id: number) => {
    await axios.delete(`${API_URL}/${id}`);
};
