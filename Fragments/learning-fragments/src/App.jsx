import FoodItems from "./components/FoodItems"
import ErrorMsg from "./components/errorMsg"
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'
import Container from "./components/Container"


function App() {

  // parent node
  let foodItems = ['hello', 'fruits', 'juises', 'Healthy lunch', 'Good food', 'Good life']

  return (
    <Container>
      <h1 className="food-heading">HEALTHY ITEMS</h1>
      <ErrorMsg items={foodItems} />
      <FoodItems items={foodItems}></FoodItems>
    </Container>
  );
}

export default App
