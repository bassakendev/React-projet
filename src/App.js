/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import './App.css';
import './test/style.css';
import React from "react";


function App() {

//Declaration des states.

    const [tasks, setTasks] = useState([

        { id:1, titre:"Marché", tache:"Je doit faire le marché se weekend", statut:"innachevée", style:"true"},
        { id:2, titre:"Travail", tache:"Mon patrons m'a demandé de ne pas oublier mon rapport", statut:"terminée", style:"true"},
        { id:3, titre:"RDV", tache:"J'ai un rendez-vous tres important avec Bernard", statut:"terminée", style:"true"},
        { id:4, titre:"Coiffure", tache:"Se soir je doit penser à me faire belle", statut:"terminée", style:"true"},
        { id:5, titre:"Sport", tache:"Un peut de sport se mardis me fera du bien", statut:"innachevée", style:"true"},
        { id:6, titre:"Cinema", tache:"Moi un mon coeur nous allons aller au cinema demain soir", statut:"terminée", style:"true"}
    ]);

    const [titre, setTitre] = useState('');

    const [tache, setTache] = useState('');

    const [research, setResearch] = useState('');

    const [disp, setDisp] = useState('');
      
//Declaration des fonctions

//Lorsque le titre de la tache change
function ChangeTitre (e){

        setTitre(e.target.value);
}

//Lorsque le titre de la tache change
function ChangeTache (e){

    setTache(e.target.value);
}

//Soumission du formulaire et creation d'une nouvelle tache
function Submit (e){

    e.preventDefault();

    if(titre && tache){

        let tasksCopy = [...tasks];
    
    const id = tasks.length + 1;
    const statut = 'innachevée';
    const style = 'true'
   tasksCopy.push({id, titre, tache, statut, style});

   setTasks(tasksCopy); 
    setTitre('');
    setTache('');
    }
  
}

//Suppression d'une tache
function Supprimer (id){

    const tasksCopy = [...tasks];

    const updateTask = tasksCopy.filter(task => task.id !== id);

    setTasks(updateTask);
  }

//Changement du statut d'une tache
  function ChangeStatut (id){

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
  function ChangeResearch (e){

    setDisp('disp');
    const tasksCopy = [...tasks];

    const val = e.target.value;
    
    
    tasksCopy.forEach(task => {

        if (val !== "") {
            
            if (!task.titre.toUpperCase().includes(val.toUpperCase()) && !task.tache.toUpperCase().includes(val.toUpperCase())) {
                task.style = "false"
            }else{

                task.style = "true"
            }
        }else{

            task.style = "true"
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
            <Task titre={titre} tache={tache} ChangeTitre={ChangeTitre} ChangeTache={ChangeTache}
             Submit={Submit} disp={disp}/>
            <TaskList tasks={tasks} Supprimer={Supprimer} ChangeStatut={ChangeStatut} Search={Search}
             research={research} ChangeResearch={ChangeResearch} AllTasks={AllTasks}/>
            </div>
    );
}

//Composant gerant l'enregistrement des nouvelles taches
const Task = ({titre, tache, ChangeTitre, ChangeTache, Submit, disp}) => {

    return (

                <form action='submit' className='creat-task' onSubmit={Submit}>
                    <input className={disp} onChange={ChangeTitre} type="text" placeholder='Titre...' value={titre}/>
                    <input className={disp} onChange={ChangeTache} type="text" placeholder='Tache...' value={tache}/>
                    <button className={disp}>Enregistrer</button>
                </form>
             
    )
}

//Composant gerant l'affichages des taches taches
const TaskList = ({tasks, Supprimer, ChangeStatut, research, ChangeResearch, Search, AllTasks}) => {

    return (

        <div>
            <div className="search">
            <button onClick={AllTasks}>tout</button>
            <input onChange={ChangeResearch} value={research} type="text" placeholder='Rechercher une tache...'/>
            <button onClick={Search}>Search</button>
            </div>
            <div className='taskList'>
            {tasks.map( (task) => (
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

export default App; 