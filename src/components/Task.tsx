import { useState } from "react";

//Composant gerant l'enregistrement des nouvelles taches
//@ts-ignore
const Task = ({disp, tasks, setTasks}) => {

    const [titre, setTitre] = useState('');

    const [tache, setTache] = useState('');

    function submit (e:any){

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
    function changeTitre (e:any){
    
        const target = e.target as HTMLInputElement;
            setTitre(target.value);
    }
    
    //Lorsque le titre de la tache change
    function changeTache (e:any){
    
        const target = e.target as HTMLInputElement;
        setTache(target.value);
    }     


    return (

                <form action='submit' className='creat-task' onSubmit={submit}>
                    <input className={disp} onChange={changeTitre} type="text" placeholder='Titre...' value={titre}/>
                    <input className={disp} onChange={changeTache} type="text" placeholder='Tache...' value={tache}/>
                    <button className={disp}>Enregistrer</button>
                </form>
             
    )
}

export default Task

