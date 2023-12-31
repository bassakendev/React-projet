import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/todos";

const getTasks = async () => {
  try {
    const { data } = await axios.get("");
    return data;
  } catch (error) {
    console.log(console.error(error));
  }
};

export default getTasks;
