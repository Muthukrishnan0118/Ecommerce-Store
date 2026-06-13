import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import ProductCard from "../components/ProductCard";

function Products() {
  const dispatch = useDispatch();

  const [keyword, setKeyword] = useState("");
  const [category, setCategory] = useState("");

  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(
      fetchProducts({
        keyword: "",
        category: "",
      }),
    );
  }, [dispatch]);

  const handleSearch = () => {
    dispatch(
      fetchProducts({
        keyword,
        category,
      }),
    );
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div style={{ padding: "20px" }}>
      {" "}
      <h1>All Products</h1>
      ```
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Search Product..."
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />

        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">All Categories</option>
          <option value="Laptop">Laptop</option>
          <option value="Mobile">Mobile</option>
          <option value="Headphones">Headphones</option>
          <option value="Camera">Camera</option>
          <option value="Smart Watch">Smart Watch</option>
        </select>

        <button onClick={handleSearch}>Search</button>
      </div>
      {products.length === 0 ? (
        <h3>No Products Found</h3>
      ) : (
        products.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))
      )}
    </div>
  );
}

export default Products;
