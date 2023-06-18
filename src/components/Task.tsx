/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useState } from "react";
import createTask from "../call-backend/createTask";

//Composant gerant l'enregistrement des nouvelles taches
//@ts-ignore
const Task = ({ disp, tasks, setTasks }) => {
  const [titre, setTitre] = useState("");

  const [tache, setTache] = useState("");

  function submit(e: any) {
    e.preventDefault();

    if (titre && tache) {
      //   const tasksCopy = [...tasks];

      const statut = "innachevée";
      const style = "true";

      const capture = async () => {
        const allTasks = await createTask({ titre, tache, statut, style });
        setTasks(allTasks);
        setTitre("");
        setTache("");
      };

      capture();
    }
  }

  //Lorsque le titre de la tache change
  function changeTitre(e: any) {
    const target = e.target as HTMLInputElement;
    setTitre(target.value);
  }

  //Lorsque le titre de la tache change
  function changeTache(e: any) {
    const target = e.target as HTMLInputElement;
    setTache(target.value);
  }

  return (
    <form action="submit" className="creat-task" onSubmit={submit}>
      <input
        className={disp}
        onChange={changeTitre}
        type="text"
        placeholder="Titre..."
        value={titre}
      />
      <input
        className={disp}
        onChange={changeTache}
        type="text"
        placeholder="Tache..."
        value={tache}
      />
      <button className={disp}>Enregistrer</button>
    </form>
  );
};

export default Task;
