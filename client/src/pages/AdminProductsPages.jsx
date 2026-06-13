import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../redux/slices/productSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function AdminProductsPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { products, isLoading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);

      alert("Product Deleted Successfully");

      dispatch(fetchProducts());
    } catch (error) {
      console.error(error);
      alert("Failed to delete product");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "20px",
        }}
      >
        <h1>Admin Products</h1>

        <button onClick={() => navigate("/admin/product/new")}>
          Add Product
        </button>
      </div>

      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <table border="1" cellPadding="10" width="100%">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product) => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.image}
                    alt={product.name}
                    width="60"
                    height="60"
                    style={{ objectFit: "cover" }}
                  />
                </td>

                <td>{product.name}</td>

                <td>₹{product.price.toLocaleString()}</td>

                <td>{product.countInStock}</td>

                <td>
                  <button
                    onClick={() =>
                      navigate(`/admin/product/${product._id}/edit`)
                    }
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => handleDelete(product._id)}
                    style={{
                      marginLeft: "10px",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default AdminProductsPage;
