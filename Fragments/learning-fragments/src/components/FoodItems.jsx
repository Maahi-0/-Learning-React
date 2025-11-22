import ITEMS from "./item";

const FoodItems = ({ items }) => {

  return (
    <ul className="list-group">
      {items.map((item) => (
        <ITEMS key={item} foodItem={item} />
      ))}

    </ul>

  );
}
export default FoodItems