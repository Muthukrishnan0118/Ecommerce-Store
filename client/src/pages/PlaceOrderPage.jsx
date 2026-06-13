import { useSelector } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrderPage() {
  const navigate = useNavigate();

  const { items } = useSelector((state) => state.cart);
  const { shippingAddress } = useSelector((state) => state.order);

  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty,
    0,
  );

  const placeOrderHandler = async () => {
    try {
      const orderData = {
        orderItems: items,
        shippingAddress,
        totalPrice,
      };

      const { data } = await axios.post(
        "http://localhost:5000/api/orders",
        orderData,
      );

      console.log("Order Created:", data);

      navigate("/ordersuccess");
    } catch (error) {
      console.error("Order Error:", error);
      alert("Failed to place order");
    }
  };

  return (
    <div className="placeorder-container">
      <h1>Place Order</h1>

      <div>
        <h2>Shipping Address</h2>

        <p>{shippingAddress.fullName}</p>
        <p>{shippingAddress.phone}</p>
        <p>{shippingAddress.address}</p>
        <p>
          {shippingAddress.city}, {shippingAddress.state}
        </p>
        <p>{shippingAddress.pincode}</p>
      </div>

      <hr />

      <div>
        <h2>Order Items</h2>

        {items.map((item) => (
          <div key={item._id}>
            <p>
              {item.name} x {item.qty}
            </p>

            <p>₹{(item.price * item.qty).toLocaleString()}</p>
          </div>
        ))}
      </div>

      <hr />

      <h2>Total Amount: ₹{totalPrice.toLocaleString()}</h2>

      <button onClick={placeOrderHandler}>Place Order</button>
    </div>
  );
}

export default PlaceOrderPage;
