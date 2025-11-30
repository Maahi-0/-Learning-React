import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Itemtodos from "./components/itemtodo";
import "./App.css";
import { useState } from "react";
import ToDoItems from "./components/ToDoItem";
import WelcomeMessage from "./components/WelcomMessage";

function App() {


  const [todoItem, setTodoitem] = useState([]);

  const handleNewItem = (itemName, itemDueDate) => {
    console.log(`new item added :${itemName} date :${itemDueDate} `)
    const newTodoitems = [...todoItem, {
      name: itemName,
      dueDate: itemDueDate

    }];
    setTodoitem(newTodoitems);
  }

  const handleDeleteItem = (todoItemName) => {
    const newTOdoItemm = todoItem.filter(item => item.name !== todoItemName);
    setTodoitem(newTOdoItemm);
  }

  return <center className="to-do-container">
    <Appname></Appname>
    <Addtodo onNewItem={handleNewItem}></Addtodo>
    {todoItem.length <= 0 && <WelcomeMessage />}
    <Itemtodos items={todoItem} onDeleteClick={handleDeleteItem} />
  </center>
}
export default App;