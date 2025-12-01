import { useState } from "react";

function InputTask({ addTask }) {
  const [task, setTask] = useState("");
  const [priority, setPriority] = useState("Top Priority");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!task) return;

    addTask({
      id: Date.now(),
      task,
      priority,
      dueDate,
      completed: false
    });

    setTask("");
    setPriority("Top Priority");
    setDueDate("");
  };

  return (
    <form className="input-section" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter task..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />

      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option>Top Priority</option>
        <option>Medium Priority</option>
        <option>Low Priority</option>
      </select>

      <input
        type="date"
        value={dueDate}
        onChange={(e) => setDueDate(e.target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
}

export default InputTask;
