import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchOrders } from "../redux/slices/orderSlice";

function MyOrdersPage() {
  const dispatch = useDispatch();

  const { orders, loading } = useSelector((state) => state.order);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <div className="orders-container">
      <h1>📦 My Orders</h1>

      {loading && <p>Loading...</p>}

      {!loading && orders.length === 0 && <p>No orders found.</p>}

      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h3>Order ID: {order._id}</h3>

          <p>
            <strong>Total:</strong> ₹{order.totalPrice.toLocaleString()}
          </p>

          <p>
            <strong>Date:</strong>{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>

          <p>
            <strong>Items:</strong> {order.orderItems?.length || 0}
          </p>
        </div>
      ))}
    </div>
  );
}

export default MyOrdersPage;
