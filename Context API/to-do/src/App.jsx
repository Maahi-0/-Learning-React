import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Itemtodos from "./components/itemtodo";
import "./App.css";
import WelcomeMessage from "./components/WelcomMessage";
import TodoItemsContextProvider from "./store/todo-items-store";


function App() {


  return (

    <TodoItemsContextProvider>
      <center className="to-do-container">
        <Appname></Appname>
        <Addtodo></Addtodo>
        <WelcomeMessage />
        <Itemtodos />
      </center>

    </TodoItemsContextProvider>

  );
}
export default App;