import { useSelector, useDispatch } from "react-redux";
import { removeFromWishlist } from "../redux/slices/wishlistSlice";

function WishlistPage() {
  const dispatch = useDispatch();

  const { items } = useSelector((state) => state.wishlist);

  return (
    <div>
      <h1>My Wishlist</h1>

      {items.map((item) => (
        <div key={item._id}>
          <h3>{item.name}</h3>

          <p>₹{item.price}</p>

          <button onClick={() => dispatch(removeFromWishlist(item._id))}>
            Remove
          </button>
        </div>
      ))}
    </div>
  );
}

export default WishlistPage;
