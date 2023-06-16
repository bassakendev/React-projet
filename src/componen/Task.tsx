import {useState}  from "react";
import { setTasks, tasks } from "../call-backend/getTasks";


//Composant gerant l'enregistrement des nouvelles taches
const Task = ({disp}) => {

    const [titre, setTitre] = useState('');

    const [tache, setTache] = useState('');

    //Soumission du formulaire et creation d'une nouvelle tache
function Submit (e:SubmitEvent){

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
    //Lorsque le titre de la tache change
function ChangeTitre (e:Event){

    const target = e.target as HTMLInputElement;
        setTitre(target.value);
}

//Lorsque le titre de la tache change
function ChangeTache (e:Event){

    const target = e.target as HTMLInputElement;
    setTache(target.value);
}


    return (

                <form action='submit' className='creat-task' onSubmit={Submit}>
                    <input className={disp} onChange={ChangeTitre} type="text" placeholder='Titre...' value={titre}/>
                    <input className={disp} onChange={ChangeTache} type="text" placeholder='Tache...' value={tache}/>
                    <button className={disp}>Enregistrer</button>
                </form>
             
    )
}

export default Task