import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, reset } from "../redux/slices/authSlice";
import "../styles/login.css";

function LoginPage() {
  const dispatch = useDispatch();
  const { isSuccess, isError, message } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (isSuccess) {
      alert("Login Successful!");
      dispatch(reset());
    }
    if (isError) {
      alert(message);
      dispatch(reset());
    }
  }, [isSuccess, isError, message, dispatch]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login({ email, password }));
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-brand">🛍️ ShopKart</div>
        <h1 className="auth-heading">Welcome back</h1>
        <p className="auth-sub">Sign in to your account</p>

        <form onSubmit={submitHandler} className="auth-form">
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
            Sign In
          </button>
        </form>

        <p className="auth-footer">
          Don't have an account? <a href="/register">Create one</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage;
