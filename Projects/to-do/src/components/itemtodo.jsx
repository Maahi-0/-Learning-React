import ToDoItems from "./ToDoItem";

const Itemtodos = ({ items }) => {
  return (
    <div className="items-conatiner">

      {items.map((item) => (
        <ToDoItems todoname={item.name} todoDate={item.dueDate} />))}
    </div>
  );
}

export default Itemtodos;