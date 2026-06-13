import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

import { fetchProductById } from "../redux/slices/productSlice";
import { addToCart } from "../redux/slices/cartSlice";

function ProductPage() {
  const { id } = useParams();

  const dispatch = useDispatch();

  const { product, isLoading } = useSelector((state) => state.products);

  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const submitReview = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`http://localhost:5000/api/products/${id}/reviews`, {
        rating,
        comment,
      });

      alert("Review Added Successfully");

      dispatch(fetchProductById(id));

      setComment("");
      setRating(5);
    } catch (error) {
      console.error(error);
      alert("Failed to add review");
    }
  };

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <div
      style={{
        maxWidth: "1000px",
        margin: "40px auto",
        padding: "20px",
        color: "white",
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="400"
        style={{
          borderRadius: "12px",
          maxWidth: "100%",
        }}
      />

      <h1>{product.name}</h1>

      <h3>{product.brand}</h3>

      <p>{product.description}</p>

      <h2>₹{product.price.toLocaleString()}</h2>

      <button
        onClick={() => dispatch(addToCart(product))}
        style={{
          padding: "12px 20px",
          cursor: "pointer",
        }}
      >
        Add To Cart
      </button>

      <hr style={{ margin: "40px 0" }} />

      <h2>Write a Review</h2>

      <form onSubmit={submitReview}>
        <div style={{ marginBottom: "10px" }}>
          <label>Rating (1-5)</label>

          <br />

          <input
            type="number"
            min="1"
            max="5"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </div>

        <div style={{ marginBottom: "10px" }}>
          <textarea
            rows="4"
            cols="50"
            placeholder="Write your review..."
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>

        <button type="submit">Submit Review</button>
      </form>

      <hr style={{ margin: "40px 0" }} />

      <h2>Customer Reviews</h2>

      {product.reviews?.length === 0 && <p>No reviews yet.</p>}

      {product.reviews?.map((review, index) => (
        <div
          key={index}
          style={{
            padding: "15px",
            border: "1px solid #444",
            marginBottom: "15px",
            borderRadius: "10px",
          }}
        >
          <h4>{review.name}</h4>

          <p>⭐ {review.rating}/5</p>

          <p>{review.comment}</p>

          <small>{new Date(review.createdAt).toLocaleDateString()}</small>
        </div>
      ))}
    </div>
  );
}

export default ProductPage;
