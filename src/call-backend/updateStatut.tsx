import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/todos";

const updateStyle = async (id: number, statut: string) => {
  const changeVal = statut === "innachevée" ? "terminée" : "innachevée";
  try {
    const { data } = await axios.post("/" + id, { statut: changeVal });
    return data;
  } catch (error) {
    console.log(console.error(error));
  }
};

export default updateStyle;
