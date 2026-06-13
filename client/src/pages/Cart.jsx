import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../redux/slices/cartSlice";

function Cart() {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.cart);

  const total = items.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div>
      <h1>Cart</h1>
      {items.length === 0 ? (
        <h3>Cart is Empty</h3>
      ) : (
        <>
          {items.map((item) => (
            <div key={item._id}>
              <h3>{item.name}</h3>
              <p>₹ {item.price}</p>
              <p>Qty: {item.qty}</p>
              <button onClick={() => dispatch(removeFromCart(item._id))}>
                Remove
              </button>
            </div>
          ))}
          <hr />
          <h2>Total: ₹{total}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
