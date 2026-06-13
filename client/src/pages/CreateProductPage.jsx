import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function CreateProductPage() {
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    image: "",
    brand: "",
    category: "",
    description: "",
    price: "",
    countInStock: "",
  });

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/products", product);

      alert("Product Created Successfully");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Failed to create product");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Add Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="countInStock"
          placeholder="Stock"
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Create Product</button>
      </form>
    </div>
  );
}

export default CreateProductPage;
