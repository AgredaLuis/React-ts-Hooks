import { useState } from "react";
import Logo from "./assets/vite.svg";
import "./App.css";
import { Task } from "./interfaces/task.interface";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  const getCurrentTimestamp = (): number => new Date().getTime();

  const addNewTask = (task: Task) => {
    setTasks([
      ...tasks,
      { ...task, id: getCurrentTimestamp(), completed: false },
    ]);
  };

  const deleteAtask = (id: number) => {
    /* sol devuelve un arrelgo nuevo */
    setTasks(tasks.filter((task) => task.id !== id));
  };
  return (
    /* navbar */
    <div className="bg-dark" style={{ height: "100vh" }}>
      <nav className="navbar navbar-dark bg-primary">
        <div className="container">
          <a href="/" className="navbar-brand">
            <img src={Logo} alt="" style={{ width: "4rem" }} />
            React + Typescript
          </a>
        </div>
      </nav>

      <main className="container p-4">
        {/* hago un fila para los dos compoenentes */}
        <div className="row">
          {/* y se paro en 2 columnas una apra los form y otra para las listas */}
          <div className="col-md-4">
            <TaskForm addNewTask={addNewTask} />
          </div>
          <div className="col-md-8">
            <div className="row">
              <TaskList tasks={tasks} deleteAtask={deleteAtask} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
