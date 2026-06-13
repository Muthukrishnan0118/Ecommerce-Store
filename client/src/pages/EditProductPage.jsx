import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {
  const { id } = useParams();
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const { data } = await axios.get(
          `http://localhost:5000/api/products/${id}`,
        );

        setProduct({
          name: data.name,
          image: data.image,
          brand: data.brand,
          category: data.category,
          description: data.description,
          price: data.price,
          countInStock: data.countInStock,
        });
      } catch (error) {
        console.error(error);
        alert("Failed to load product");
      }
    };

    fetchProduct();
  }, [id]);

  const handleChange = (e) => {
    setProduct({
      ...product,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);

      alert("Product Updated Successfully");

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Failed to update product");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Edit Product</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Product Name"
          value={product.name}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={product.image}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={product.brand}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="text"
          name="category"
          placeholder="Category"
          value={product.category}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <textarea
          name="description"
          placeholder="Description"
          value={product.description}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={product.price}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <input
          type="number"
          name="countInStock"
          placeholder="Stock"
          value={product.countInStock}
          onChange={handleChange}
          required
        />

        <br />
        <br />

        <button type="submit">Update Product</button>
      </form>
    </div>
  );
}

export default EditProductPage;
