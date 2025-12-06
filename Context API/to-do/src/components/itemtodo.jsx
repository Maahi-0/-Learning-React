
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import ToDoItems from "./ToDoItem";

const Itemtodos = ({ items, onDeleteClick }) => {


  const todoItemFromContext = useContext(TodoItemsContext);
  console.log(`${todoItemFromContext}`)
  return (
    <div className="items-conatiner">

      {items.map((item) => (
        <ToDoItems todoname={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />))}
    </div>
  );
}

export default Itemtodos;