import Appname from "./components/AppName";
import Addtodo from "./components/AddTodo";
import Additem1 from "./components/AddItem1";
import Additem2 from "./components/AddItem2";
import "./App.css";
function App() {

  return <center className="to-do-container">
    <Appname></Appname>
    <Addtodo></Addtodo>
    <div className="items-conatiner">
      <Additem1></Additem1>
      <Additem2></Additem2>
    </div>
  </center>
}
export default App;