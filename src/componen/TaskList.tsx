
//Composant gerant l'affichages des taches taches

const TaskList = ({tasks, Supprimer, ChangeStatut, research, ChangeResearch, Search, AllTasks})=> {

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
