import "./styles.css";
import { useState } from "react";

export default function App() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, setTasks] = useState([
    // { id: 1, title: "Acheter du pain" },
    // { id: 2, title: "Acheter du fromage" },
    // { id: 3, title: "Acheter du saucisson" }
  ]);
  function handleChange(e) {
    // inputValue = nouvelle entree du champ input
    let newValue = e.target.value;
    setInputValue(newValue);
  }
  // CREATE NEW TASK
  function handleSubmit(e) {
    e.preventDefault(); // annulé le rechargemùent de la page

    // console.log(inputValue);
    // console.log(newTask);
    setInputValue("");
    // let id = tasks[tasks.length - 1].id+1;
    let id = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;
    // if (task.length >= 3 && task.length <= 15) {
    // s'il y a des choses dans le tableau, on accède à l'index du
    // dernier element et l'incrémente, sinon on lui met l'id 1
    // (et comme ça on map, et il rale pas qu'il n'y a pas la clé unique)
    let newTask = { id, title: inputValue };
    setTasks([...tasks, newTask]); // ...: c'est une déstructuration du tableau,
    // pour pouvoir insérer quelque chose à la fin
  }
  // else {
  //   alert ('La tâche doit contenir entre 3 et 15 caractères.')
  // }

  // DELETE ONE TASK
  function handleDelete(idToDelete) {
    let taskToDelete = tasks.filter(
      (taskToDelete) => taskToDelete.id === idToDelete
    );
    let title = taskToDelete[0].title;
    if (!window.confirm(`Voulez-vous supprimer ${title} ?`)) return;
    // si utilisateur a cliqué sur "annuler", sors de la fonction !
    // Sinon, delete

    // récupérer tout le tableau sauf l'élément sur lequel on clique
    setTasks((newTasks) => tasks.filter((task) => task.id !== idToDelete));
    // console.log("supprimer", idToDelete);
  }

  return (
    <div className="App">
      <div>
        <form onSubmit={handleSubmit}>
          <input required value={inputValue} onChange={handleChange} />
          <button className="btn btn-primary">Envoyer</button>
        </form>
        <p>{inputValue}</p>
        <div id="task-list">
          {tasks.length === 0 ? (
            <p className="m-5">Aucune tache n'est disponible</p>
          ) : (
            <ul>
              {tasks.map((task) => (
                <li key={task.id}>
                  {task.title}{" "}
                  <button onClick={() => handleDelete(task.id)}>X</button>
                  {/* fonction anonyme => parce que c'est une déclaation de la fonction et pas son appel */}
                  {/* {task.title} <button>X</button> */}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
