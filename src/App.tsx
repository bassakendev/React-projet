/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */

import { useState, useEffect } from "react";
import "./App.css";
import "./style.css";
import Task from "./components/Task";
import TaskList from "./components/TaskList";
import getTasks from "./call-backend/getTasks";

function App() {
  //Declaration des states.
  const [disp, setDisp] = useState("");

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const capture = async () => {
      const allTasks = await getTasks();
      setTasks(allTasks);
    };

    capture();
  }, []);

  //affichage coté client
  return (
    <div className="contener">
      <Task disp={disp} tasks={tasks} setTasks={setTasks} />
      <TaskList setDisp={setDisp} tasks={tasks} setTasks={setTasks} />
    </div>
  );
}

export default App
