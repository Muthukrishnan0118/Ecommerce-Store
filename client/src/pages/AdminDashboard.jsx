import { Link } from "react-router-dom";

function AdminDashboard() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Admin Dashboard</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2,1fr)",
          gap: "20px",
          marginTop: "30px",
        }}
      >
        <Link to="/admin/products">
          <button>Manage Products</button>
        </Link>

        <Link to="/admin/orders">
          <button>Manage Orders</button>
        </Link>

        <Link to="/admin/users">
          <button>Manage Users</button>
        </Link>

        <Link to="/admin/product/new">
          <button>Add Product</button>
        </Link>
      </div>
    </div>
  );
}

export default AdminDashboard;
