import { useState } from "react";
import deleteTask from "../call-backend/deleteTask";
import updateStatut from "../call-backend/updateStatut";

//Composant gerant l'affichages des taches taches

//@ts-ignore
const TaskList = ({ setDisp, tasks, setTasks }) => {
  const [research, setResearch] = useState("");

  //Soumission du formulaire et creation d'une nouvelle tache

  //Declaration des fonctions

  //Suppression d'une tache
  const supprimer = (id: number) => {
    const capture = async () => {
      const allTasks = await deleteTask(id);
      setTasks(allTasks);
    };
    capture();
  };

  //Changement du statut d'une tache
  const changeStatut = (id: number, statut: string) => {
    const capture = async () => {
      const allTasks = await updateStatut(id, statut);
      setTasks(allTasks);
    };

    capture();
  };

  //Lorsque l'on veut rechercher une tache
  const changeResearch = (e: any) => {
    const val = e.target.value;
    const valUp = val.toUpperCase();
    setDisp("disp");
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      if (val !== "") {
        task.style =
          !task.titre.toUpperCase().includes(valUp) &&
          !task.tache.toUpperCase().includes(valUp)
            ? "false"
            : "true";
      } else {
        task.style = "true";
        setDisp("");
      }
    });

    setResearch(val);
    setTasks(tasksCopy);
  };

  //Lorsque on click sur search
  const search = () => {
    if (research !== "") {
      setResearch("");
      setDisp("disp");
    }
  };

  //Afficher toutes les taches
  const allTasks = () => {
    const tasksCopy = [...tasks];

    tasksCopy.forEach((task) => {
      task.style = "true";
    });

    setTasks(tasksCopy);
    setResearch("");
    setDisp("");
  };

  return (
    <div>
      <div className="search">
        <button onClick={allTasks}>tout</button>
        <input
          onChange={changeResearch}
          value={research}
          type="text"
          placeholder="Rechercher une tache..."
        />
        <button onClick={search}>Search</button>
      </div>
      <div className="taskList">
        {tasks.map(
          (task: {
            id: number;
            titre: string;
            tache: string;
            statut: string;
            style: string;
          }) => (
            <div key={task.id} className={task.style}>
              <h1>
                <u>{task.titre}</u>
              </h1>
              <p>{task.tache}</p>
              <p>
                statut : <em>{task.statut}</em>
              </p>
              <button onClick={() => supprimer(task.id)}>supprimer</button>
              <button onClick={() => changeStatut(task.id, task.statut)}>
                Changer de statut
              </button>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TaskList;
