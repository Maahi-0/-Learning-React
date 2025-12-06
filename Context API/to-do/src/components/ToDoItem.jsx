import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";

function ToDoItems({ todoname, todoDate }) {

  const { deleteItem } = useContext(TodoItemsContext);
  return (
    <div className="container">
      <div className="row kg-row">
        <div className="col-6">{todoname}</div>
        <div className="col-4">{todoDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger" onClick={() => deleteItem(todoname)}>Delete</button>
        </div>
      </div>
    </div>
  );
}

export default ToDoItems;