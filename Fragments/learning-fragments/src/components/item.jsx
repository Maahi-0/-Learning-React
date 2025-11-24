import '../App.css'
const ITEMS = ({ foodItem }) => {
  return (
    <li className="list-group-item">{foodItem}
      <button className="btn-item btn btn-info"
        onClick={() => console.log(`${foodItem} being bought`)}

      >Buy</button>
    </li>
  );
};


export default ITEMS;
