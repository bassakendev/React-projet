import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/todos";

const createTask = async (task: object) => {
  try {
    const { data } = await axios.post("", task);
    return data;
  } catch (error) {
    console.log(console.error(error));
  }
};

export default createTask;
