import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

import { fetchProducts } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";
import { addToWishlist } from "../redux/slices/wishlistSlice";

import "../styles/home.css";

function HomePage() {
  const dispatch = useDispatch();

  const { products, isLoading } = useSelector((state) => state.products);

  const cartItems = useSelector((state) => state.cart.items);

  const wishlistItems = useSelector((state) => state.wishlist?.items || []);

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const categories = [
    "All",
    ...new Set(products.map((product) => product.category)),
  ];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory = category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home-wrapper">
      {/* Navbar */}
      <header className="navbar">
        <div className="navbar-inner">
          <h2 className="navbar-brand">🛍️ ShopKart</h2>

          <nav className="navbar-links">
            <Link to="/">Home</Link>

            <Link to="/wishlist">Wishlist ({wishlistItems.length})</Link>

            <Link to="/cart">Cart ({cartItems.length})</Link>

            <Link to="/login">Login</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <main className="home-main">
        <div className="home-hero">
          <h1>New Arrivals</h1>
          <p>Discover our latest collection</p>
        </div>

        {/* Search & Filter */}
        <div className="filter-bar">
          <input
            type="text"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
          />

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="category-select"
          >
            {categories.map((cat) => (
              <option key={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Loading */}
        {isLoading && <div className="status-msg">Loading products...</div>}

        {/* No Products */}
        {!isLoading && filteredProducts.length === 0 && (
          <div className="status-msg">No products found.</div>
        )}

        {/* Products */}
        <div className="product-grid">
          {filteredProducts.map((p) => (
            <div className="product-card" key={p._id}>
              <Link to={`/product/${p._id}`} className="product-link">
                <div className="product-img-wrap">
                  <img src={p.image} alt={p.name} />
                </div>

                <div className="product-info">
                  <span className="product-category">{p.category}</span>

                  <h3 className="product-name">{p.name}</h3>

                  <p className="product-brand">{p.brand}</p>
                </div>
              </Link>

              <div className="product-footer">
                <span className="product-price">
                  ₹{p.price.toLocaleString()}
                </span>
              </div>

              <div className="product-actions">
                <button
                  className="add-btn"
                  onClick={() => dispatch(addToCart(p))}
                >
                  Add To Cart
                </button>

                <button
                  className="wishlist-btn"
                  onClick={() => dispatch(addToWishlist(p))}
                >
                  ❤️ Wishlist
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default HomePage;
