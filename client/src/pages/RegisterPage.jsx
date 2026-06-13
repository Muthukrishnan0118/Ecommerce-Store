import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/slices/authSlice";
import "../styles/auth.css";

function RegisterPage() {
  const dispatch = useDispatch();
  const { isSuccess, isError, message } = useSelector((state) => state.auth);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) alert("Registration Successful!");
    if (isError) alert(message);
  }, [isSuccess, isError, message]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(register({ name, email, password }));
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">🛍️ ShopKart</div>
        <h1 className="auth-heading">Create account</h1>
        <p className="auth-sub">Join us and start shopping</p>

        <form onSubmit={submitHandler} className="auth-form">
          <div className="field-group">
            <label className="field-label">Full Name</label>
            <input
              className="field-input"
              placeholder="John Doe"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Email</label>
            <input
              className="field-input"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="field-group">
            <label className="field-label">Password</label>
            <input
              className="field-input"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <button type="submit" className="submit-btn">
            Create Account
          </button>
        </form>

        <p className="auth-footer">
          Already have an account? <a href="/login">Sign in</a>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
