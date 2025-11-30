
import ToDoItems from "./ToDoItem";

const Itemtodos = ({ items, onDeleteClick }) => {
  return (
    <div className="items-conatiner">

      {items.map((item) => (
        <ToDoItems todoname={item.name} todoDate={item.dueDate} onDeleteClick={onDeleteClick} />))}
    </div>
  );
}

export default Itemtodos;