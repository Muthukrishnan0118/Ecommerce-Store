import { useDispatch } from "react-redux";
import { addToCart } from "../redux/slices/cartSlice";

function ProductCard({ product }) {
  const dispatch = useDispatch();

  return (
    <div
      style={{
        border: "1px solid #ddd",
        padding: "15px",
        margin: "10px",
      }}
    >
      <h3>{product.name}</h3>

      <p>₹ {product.price}</p>

      <button onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
    </div>
  );
}
export default ProductCard;
