import { useState } from "react";

function Addtodo({ onNewItem }) {

  const [todoName, setTodoName] = useState("");
  const [dueDaTe, setDueDate] = useState("");

  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  }
  const handleDateChange = (event) => {
    setDueDate(event.target.value);

  }
  const hanedleAddbutClicked = () => {
    onNewItem(todoName, dueDaTe)
    setDueDate("");
    setTodoName("");
  }
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="enter todo here" value={todoName} onChange={handleNameChange} />
        </div>
        <div className="col-4">
          <input type="date" value={dueDaTe} onChange={handleDateChange} />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success" onClick={hanedleAddbutClicked}>Add</button>
        </div>
      </div>
    </div>
  );
}

export default Addtodo;