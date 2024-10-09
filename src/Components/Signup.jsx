import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name);
    
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
    if (formData.cpassword !== formData.password) {
      formErrors.cpassword = "Confirm password is incorrect";
    }
    setError(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateError()) {
      alert("Form Submitted succesful");
      let path = "/login";
      navigate(path);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit}>
        <h1>Create an Account</h1>
        <div>
          <label>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name here..."
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.name}</p>}
        <div>
          <label>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email here..."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.email}</p>}
        <div>
          <label>Password :</label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password here..."
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.password}</p>}
        <div>
          <label>Confirm Password :</label>
          <input
            type="password"
            name="cpassword"
            placeholder="Confirm password"
            value={formData.cpassword}
            onChange={handleChange}
          />
        </div>
        {error && <p style={{ color: "red" }}>{error.cpassword}</p>}
        <button type="submit">Sign Up</button>
        <div>
          <p>
            Already have an account ,{" "}
            <Link style={{ color: "blue" }} to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
