// UserForm.js
"use client";
import React, { useState } from "react";
import "./UserForm.css";

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    email: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // You can handle form submission logic here, for example, send the data to an API
    try {
      let data = await fetch("http://localhost:3000/api/users", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      data = await data.json();
      console.log(data);
      if (data.users) {
        alert(data.users.name + " created");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
    console.log("Form submitted:", formData);
  };

  return (
    <div className="user-form-container">
      <form onSubmit={handleSubmit} className="user-form">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
