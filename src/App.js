import { useEffect, useState } from "react";

import { Header } from "./components/Header";
import { AddTask } from "./components/AddTask";
import { ShowTask } from "./components/ShowTask";

import "./App.css";

function App() {
  // Estado para almacenar la lista de tareas
  const [tasklist, setTasklist] = useState(
    JSON.parse(localStorage.getItem("tasklist")) || []
  );
  // Estado para almacenar la tarea actual que se está editando o agregando
  const [task, setTask] = useState({});

  useEffect(() => {
    localStorage.setItem("tasklist", JSON.stringify(tasklist));
    console.log(
      "tasklist saved in localStorage: " + localStorage.getItem("tasklist")
    );
  }, [tasklist]);

  return (
    <div className="App">
      {/* Componente del encabezado */}
      <Header />

      {/* Componente para agregar una nueva tarea */}
      <AddTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />

      {/* Componente para mostrar la lista de tareas */}
      <ShowTask
        tasklist={tasklist}
        setTasklist={setTasklist}
        task={task}
        setTask={setTask}
      />
    </div>
  );
}

export default App;
