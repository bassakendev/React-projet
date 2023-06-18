import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/todos";

const createTask = async (id: number) => {
  try {
    const { data } = await axios.delete("/" + id);
    return data;
  } catch (error) {
    console.log(console.error(error));
  }
};

export default createTask;
