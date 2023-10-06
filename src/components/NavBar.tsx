import { useSelector } from "react-redux";
import { State } from "../products";

const NavBar = () => {
  const { items, price }: State = useSelector((state: any) => state.product);
  return (
    <div className="nav">
      <h4>Ecom</h4>
      <div>
        <p>Total Items: {items}</p>
        <p>Total Price: ${price}</p>
        <button>View Products</button>
      </div>
    </div>
  );
};

export default NavBar;
