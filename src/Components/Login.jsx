import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./registration.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
    setError((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  const validateError = () => {
    let formErrors = {};
    if (!formData.name) {
      formErrors.name = "Name is required";
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!emailPattern.test(formData.email)) {
      formErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      formErrors.password = "Password must be at least 6 characters";
    }

    setError(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateError()) {
      alert("Login Successful");
      let path = "/";
      navigate(path);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div>
          <label>Name :</label>
          <input
            type="text"
            placeholder="Enter your name here..."
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.name}</p>}
        <div>
          <label>Email :</label>
          <input
            type="email"
            placeholder="Enter your email here..."
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.email}</p>}
        <div>
          <label>Password :</label>
          <input
            type="password"
            placeholder="Enter your password here..."
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.password}</p>}
        <button type="submit">Login</button>
        <div>
          <p>
            Don't have an account , {" "}
            <Link style={{ color: "blue" }} to="/signup">
              Create one
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
