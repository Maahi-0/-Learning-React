import { useRef } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import { useContext } from "react";


function Addtodo() {


  const ContextObj = useContext(TodoItemsContext);
  const addnewItem = ContextObj.addnewItem;


  const todoNameElement = useRef();
  const todoDateElement = useRef();

  const hanedleAddbutClicked = (event) => {
    event.preventDefault();
    const todoName = todoNameElement.current.value;
    const dueDaTe = todoDateElement.current.value;
    todoNameElement.current.value = "";
    todoDateElement.current.value = "";
    addnewItem(todoName, dueDaTe);
  }
  return (
    <div className="container text-center">
      <form className="row kg-row" onSubmit={hanedleAddbutClicked}>
        <div className="col-6">
          <input type="text" ref={todoNameElement} placeholder="enter todo here" />
        </div>
        <div className="col-4">
          <input type="date" ref={todoDateElement} />
        </div>
        <div className="col-2">
          <button className="btn btn-success">Add</button>
        </div>
      </form>
    </div>
  );
}

export default Addtodo;