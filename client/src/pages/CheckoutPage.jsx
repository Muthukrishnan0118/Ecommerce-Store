import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { saveShippingAddress } from "../redux/slices/orderSlice";

import "../styles/checkout.css";

function CheckoutPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [shipping, setShipping] = useState({
    fullName: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
  });

  const handleChange = (e) => {
    setShipping({
      ...shipping,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(saveShippingAddress(shipping));

    navigate("/placeorder");
  };

  return (
    <div className="checkout-container">
      <div className="checkout-card">
        <h1 className="checkout-title">Shipping Information</h1>

        <form className="checkout-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={shipping.fullName}
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={shipping.phone}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="address"
            placeholder="Address"
            value={shipping.address}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="city"
            placeholder="City"
            value={shipping.city}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="state"
            placeholder="State"
            value={shipping.state}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="pincode"
            placeholder="Pincode"
            value={shipping.pincode}
            onChange={handleChange}
            required
          />

          <button type="submit" className="checkout-btn">
            Continue
          </button>
        </form>
      </div>
    </div>
  );
}

export default CheckoutPage;
