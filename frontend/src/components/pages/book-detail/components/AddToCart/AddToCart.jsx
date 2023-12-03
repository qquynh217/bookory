import { useContext } from "react";
import { FaShoppingBag } from "react-icons/fa";
import { CartContext } from "context/CartContext";
import { useAddToCart } from "../../hooks/useAddToCart";
import { notification } from "antd";

function AddToCart({ item }) {
  const { value, increaseValue, decreaseValue, changeValue, onBlur } =
    useAddToCart();
  const { onAdd } = useContext(CartContext);
  return (
    <div className="add-to-cart">
      <div className="quantiy-input">
        <div className="quantiy-button minus" onClick={decreaseValue}>
          -
        </div>
        <input
          type="number"
          value={value}
          onChange={changeValue}
          onBlur={onBlur}
        />
        <div className="quantiy-button plus" onClick={increaseValue}>
          +
        </div>
      </div>
      <button
        className="app-button d-flex gap-20"
        onClick={() => {
          onAdd(item, value);
        }}
      >
        <FaShoppingBag />
        <span>Add to cart</span>
      </button>
    </div>
  );
}

export default AddToCart;
