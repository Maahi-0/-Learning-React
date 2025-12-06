
import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-items-store";
import ToDoItems from "./ToDoItem";

const Itemtodos = () => {


  const { todoItem } = useContext(TodoItemsContext)
  return (
    <div className="items-conatiner">

      {todoItem.map((item) => (
        <ToDoItems key={item.name} todoname={item.name} todoDate={item.dueDate} />))}
    </div>
  );
}

export default Itemtodos;