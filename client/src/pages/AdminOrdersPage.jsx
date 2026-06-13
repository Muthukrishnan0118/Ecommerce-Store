import { useEffect, useState } from "react";
import axios from "axios";

function AdminOrdersPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const loadOrders = async () => {
      try {
        const { data } = await axios.get("http://localhost:5000/api/orders");

        setOrders(data);
      } catch (error) {
        console.log(error);
      }
    };

    loadOrders();
  }, []);

  const handleDeliver = async (id) => {
    try {
      await axios.put(`http://localhost:5000/api/orders/${id}/deliver`);

      const { data } = await axios.get("http://localhost:5000/api/orders");

      setOrders(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Manage Orders</h1>

      <table border="1" cellPadding="10" width="100%">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer</th>
            <th>Phone</th>
            <th>Total Amount</th>
            <th>Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {orders.map((order) => (
            <tr key={order._id}>
              <td>{order._id}</td>

              <td>{order.shippingAddress?.fullName || "N/A"}</td>

              <td>{order.shippingAddress?.phone || "N/A"}</td>

              <td>₹{order.totalPrice?.toLocaleString()}</td>

              <td>{new Date(order.createdAt).toLocaleDateString()}</td>

              <td>{order.isDelivered ? "✅ Delivered" : "⏳ Pending"}</td>

              <td>
                {!order.isDelivered && (
                  <button onClick={() => handleDeliver(order._id)}>
                    Mark Delivered
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminOrdersPage;
