import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Navbar() {
  const { items } = useSelector((state) => state.cart);

  const cartCount = items.reduce((acc, item) => acc + item.qty, 0);

  const [keyword, setKeyword] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    if (keyword.trim()) {
      window.location.href = `/products?keyword=${keyword}`;
    }
  };

  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "15px 30px",
        background: "#fff",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
      }}
    >
      {/* Logo */}
      <h2 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "#2563eb",
          }}
        >
          🛍 ShopKart
        </Link>
      </h2>

      {/* Search */}
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
          style={{
            padding: "8px",
            width: "250px",
          }}
        />

        <button
          type="submit"
          style={{
            padding: "8px 12px",
            marginLeft: "5px",
          }}
        >
          Search
        </button>
      </form>

      {/* Links */}
      <div>
        <Link to="/" style={{ marginRight: "20px" }}>
          Home
        </Link>

        <Link to="/products" style={{ marginRight: "20px" }}>
          Products
        </Link>

        <Link to="/cart">Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

export default Navbar;
