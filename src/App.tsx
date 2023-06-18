/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import './style.css';
import Task from './componen/Task';
import TaskList from './componen/TaskList';
import { allTasks } from './call-backend/getTasks';


function App() {

//Declaration des states.
const [disp, setDisp] = useState('');

const [tasks, setTasks] = useState(allTasks);

//affichage coté client
    return (

        <div className='contener'>
            <Task disp={disp} tasks={tasks} setTasks={setTasks} />
            <TaskList setDisp={setDisp} tasks={tasks} setTasks={setTasks} />
            </div>
    );
}





export default App
