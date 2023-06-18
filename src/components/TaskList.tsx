import { useState } from "react";

//Composant gerant l'affichages des taches taches

//@ts-ignore
const TaskList = ({setDisp, tasks, setTasks})=> {

    const [research, setResearch] = useState('');

    //Soumission du formulaire et creation d'une nouvelle tache

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
  function ChangeResearch (e:any){

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

    
    return (

        <div>
            <div className="search">
            <button onClick={AllTasks}>tout</button>
            <input onChange={ChangeResearch} value={research} type="text" placeholder='Rechercher une tache...'/>
            <button onClick={Search}>Search</button>
            </div>
            <div className='taskList'>
            {tasks.map( (task:{ id:number, titre:string, tache:string, statut:string, style:string}) => (
                <div key = {task.id} className={task.style}>
                        <h1>
                            <u>{task.titre}</u>
                        </h1>
                        <p>{task.tache}</p>
                        <p>statut : <em>{task.statut}</em></p>
                        <button onClick={() => Supprimer(task.id)}>Supprimer</button><button onClick={() => ChangeStatut(task.id)}>Changer de statut</button>
                     </div>
                                )
                    )
            }
                </div>
        </div>
    )
}

export default TaskList
