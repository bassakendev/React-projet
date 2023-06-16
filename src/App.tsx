/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import './style.css';
import Task from './componen/Task';
import TaskList from './componen/TaskList';
import { setTasks, tasks } from './call-backend/getTasks';




function App() {

//Declaration des states.

    const [research, setResearch] = useState('');

    const [disp, setDisp] = useState('');
      
//Declaration des fonctions

//Suppression d'une tache
function Supprimer (id:number){

    const tasksCopy = [...tasks];

    const updateTask = tasksCopy.filter(task => task.id !== id);

    setTasks(updateTask);
  }

//Changement du statut d'une tache
  function ChangeStatut (id:number){

    const tasksCopy = [...tasks];

   const statut = tasksCopy[id - 1].statut;
   

    if (statut === 'innachevée'){

        tasksCopy[id - 1].statut = 'terminée';
    }else{

        tasksCopy[id - 1].statut = 'innachevée';
    }

    setTasks(tasksCopy);
  }

  //Lorsque l'on veut rechercher une tache
  function ChangeResearch (e:Event){

    const target = e.target as HTMLInputElement;
    setDisp('disp');
    const tasksCopy = [...tasks];

    const val = target.value;
    
    
    tasksCopy.forEach(task => {

        if (val !== "") {
            
            if (!task.titre.toUpperCase().includes(val.toUpperCase()) && !task.tache.toUpperCase().includes(val.toUpperCase())) {
                task.style = "false"
            }else{

                task.style = "true"
            }
        }else{

            task.style = "true"
            setDisp('');
        }
    });
    setResearch(val);
    setTasks(tasksCopy);

    }
  
//Lorsque on click sur search
  function Search (){

    if(research !== ''){

    setResearch('');
    setDisp('disp')
    }
    
}

//Afficher toutes les taches
function AllTasks (){

    const tasksCopy = [...tasks];
    
    tasksCopy.forEach(task => {

            task.style = "true"
    });

    setTasks(tasksCopy);
    setResearch('');
    setDisp('');

    }

//affichage coté client
    return (

        <div className='contener'>
            <Task tasks={tasks} disp={disp} />
            <TaskList tasks={tasks} Supprimer={Supprimer} ChangeStatut={ChangeStatut} Search={Search}
             research={research} ChangeResearch={ChangeResearch} AllTasks={AllTasks}/>
            </div>
    );
}





export default App; 