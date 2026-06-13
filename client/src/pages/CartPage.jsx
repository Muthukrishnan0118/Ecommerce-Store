import { useDispatch, useSelector } from "react-redux";

import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/slices/cartSlice";

import "../styles/cart.css";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const dispatch = useDispatch();

  const navigate = useNavigate();
  const { items } = useSelector((state) => state.cart);

  const totalItems = items.reduce((acc, item) => acc + item.qty, 0);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  return (
    <div className="cart-container">
      <h1 className="cart-title">🛒 Shopping Cart</h1>

      {items.length === 0 ? (
        <div className="empty-cart">Your cart is empty</div>
      ) : (
        <>
          <div className="cart-items">
            {items.map((item) => (
              <div className="cart-card" key={item._id}>
                <img src={item.image} alt={item.name} className="cart-image" />

                <div className="cart-info">
                  <h3>{item.name}</h3>

                  <p>₹{item.price.toLocaleString()}</p>

                  <div className="qty-controls">
                    <button onClick={() => dispatch(decreaseQty(item._id))}>
                      -
                    </button>

                    <span>{item.qty}</span>

                    <button onClick={() => dispatch(increaseQty(item._id))}>
                      +
                    </button>
                  </div>

                  <p>Subtotal: ₹{(item.price * item.qty).toLocaleString()}</p>

                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removeFromCart(item._id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h2>Order Summary</h2>

            <p>Total Items: {totalItems}</p>

            <p>Total Amount: ₹{totalPrice.toLocaleString()}</p>

            <button
              className="checkout-btn"
              onClick={() => navigate("/checkout")}
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default CartPage;
