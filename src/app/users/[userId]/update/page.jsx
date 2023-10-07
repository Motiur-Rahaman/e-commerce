"use client";
import React, { useEffect, useState } from "react";
import "@/app/addUser/UserForm.css";

const UpdateUser = ({ params }) => {
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
      let data = await fetch(
        "http://localhost:3000/api/users/" + params.userId,
        {
          method: "PUT",
          body: JSON.stringify(formData),
        }
      );
      data = await data.json();
      console.log(data);
      if (data.success) {
        alert(data.user.name + " updated");
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchUserDataToUpdate();
  }, []);

  const fetchUserDataToUpdate = async () => {
    try {
      let data = await fetch(
        "http://localhost:3000/api/users/" + params.userId
      );
      data = await data.json();
      setFormData({ name: data.firstName, age: data.age, email: data.email });
    } catch (error) {
      console.log(error);
    }
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

export default UpdateUser;
