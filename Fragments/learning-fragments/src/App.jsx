import FoodItems from "./components/FoodItems"
import ErrorMsg from "./components/errorMsg"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'


function App() {

  // parent node
  let foodItems = ['hello', 'fruits', 'juises', 'Healthy lunch', 'Good food', 'Good life']

  return <>
    <h1>HEALTHY ITEMS</h1>
    <ErrorMsg items={foodItems} />
    <FoodItems items={foodItems}></FoodItems>
  </>
}

export default App
