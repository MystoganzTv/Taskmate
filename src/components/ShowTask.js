export const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  // Maneja la acción de editar una tarea
  const handleEdit = (id) => {
    // Encuentra la tarea seleccionada en la lista de tareas
    const selectedTask = tasklist.find((todo) => todo.id === id);
    // Establece la tarea seleccionada como la tarea actual en el estado
    setTask(selectedTask);
  };

  // Maneja la acción de eliminar una tarea
  const handleDelete = (id) => {
    // Crea una nueva lista de tareas que excluye la tarea con el ID dado
    const updatedTaskList = tasklist.filter((todo) => todo.id !== id);
    // Actualiza el estado de la lista de tareas con la lista actualizada
    setTasklist(updatedTaskList);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button onClick={() => setTasklist([])} className="clearAll">
          Clear All
        </button>
      </div>
      <ul>
        {/* Renderiza cada tarea en la lista de tareas */}
        {tasklist.map((todo) => (
          <li key={todo.id}>
            <p>
              <span className="name">{todo.name}</span>
              <span className="time">{todo.time}</span>
            </p>
            {/* Botón para editar la tarea */}
            <i
              onClick={() => handleEdit(todo.id)}
              className="bi bi-pencil-square"
            ></i>
            {/* Botón para eliminar la tarea */}
            <i
              onClick={() => handleDelete(todo.id)}
              className="bi bi-trash"
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};
