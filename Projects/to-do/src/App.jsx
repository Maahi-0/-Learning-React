import Appname from "./components/Appname";
import Addtodo from "./components/Addtodo";
import Itemtodos from "./components/itemtodo";
import "./App.css";

function App() {

  const todoitems = [
    {
      name: 'muskan start coding',
      duedate: '4/05/2025'
    },
    {
      name: 'buy milk',
      duedate: '12/05/2025'
    }, {
      name: 'go to collage',
      duedate: '14/05/2025'
    }, {
      name: 'solve problems',
      duedate: '24/05/2025'
    }
  ];
  return <center className="to-do-container">
    <Appname></Appname>
    <Addtodo></Addtodo>
    <Itemtodos items={todoitems} />
  </center>
}
export default App;