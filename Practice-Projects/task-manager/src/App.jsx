import { useState } from "react";
import InputTask from "./components/InputTask";
import UpcomingTask from "./components/UPcomingTask";
import CompletedTask from "./components/CompletedTask";
import "./App.css";

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => setTasks([...tasks, task]);

  const completeTask = (id) => {
    setTasks(
      tasks.map((t) =>
        t.id === id ? { ...t, completed: true } : t
      )
    );
  };

  return (
    <div className="container">
      <h1>Task Scheduler</h1>

      <InputTask addTask={addTask} />

      <UpcomingTask
        tasks={tasks.filter((t) => !t.completed)}
        completeTask={completeTask}
      />

      <CompletedTask tasks={tasks.filter((t) => t.completed)} />
    </div>
  );
}

export default App;
