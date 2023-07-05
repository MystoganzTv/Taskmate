export const AddTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Verificar si la tarea tiene un ID para determinar si se debe editar o agregar una nueva tarea
    if (task.id) {
      const date = new Date();
      // Actualizar la lista de tareas con la tarea editada
      const updatedTasklist = tasklist.map((todo) =>
        // Verificar si el ID de la tarea coincide con la tarea actual que se está editando
        todo.id === task.id
          ? {
              id: task.id,
              name: task.name,
              time: `${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`,
            }
          : todo
      );
      setTasklist(updatedTasklist);
      // Limpiar la tarea actual después de la edición
      setTask({});
    } else {
      const date = new Date();
      // Crear una nueva tarea con un ID único basado en la marca de tiempo
      const newTask = {
        id: date.getTime(),
        name: e.target.task.value,
        time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`,
      };
      // Agregar la nueva tarea a la lista de tareas
      setTasklist([...tasklist, newTask]);
      // Limpiar la tarea actual después de agregar una nueva tarea
      setTask({});
    }
    // Limpiar el campo de entrada de tarea
    setTask({ name: "" });
  };

  return (
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        {/* Campo de entrada de texto para la tarea */}
        <input
          type="text"
          name="task"
          value={task.name || ""}
          autoComplete="off"
          placeholder="add task"
          maxLength={25}
          onChange={(e) => setTask({ ...task, name: e.target.value })}
        />
        {/* Botón para agregar o editar una tarea */}
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  );
};
