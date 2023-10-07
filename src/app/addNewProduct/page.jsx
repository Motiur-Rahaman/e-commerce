"use client";
import React, { useState } from "react";
import "../addUser/UserForm.css";
import { useRouter } from "next/navigation";
import ProductForm from "@/util/components/ProductForm";

const AddNewProduct = () => {
  const [formData, setFormData] = useState({
    title: "",
    price: 10000,
    description: "",
    category: "",
    image: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const router = useRouter();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch("http://localhost:3000/api/products", {
        method: "POST",
        body: JSON.stringify(formData),
      });
      response = await response.json();
      if (response.success) {
        router.push("/products");
      } else {
        alert(response.message);
      }
    } catch (error) {
      alert(error.response.data);
      console.log(error);
    }
  };

  return (
    // <div className="user-form-container">
    //   <form onSubmit={onSubmitHandler} className="user-form">
    //     <label>
    //       Title:
    //       <input
    //         type="text"
    //         name="title"
    //         value={formData.title}
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <label>
    //       Price:
    //       <input
    //         type="number"
    //         name="price"
    //         value={formData.price}
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <label>
    //       Image Url:
    //       <input
    //         type="text"
    //         name="image"
    //         value={formData.image}
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <label>
    //       Description:
    //       <input
    //         type="text"
    //         name="description"
    //         value={formData.description}
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <label>
    //       Category:
    //       <input
    //         type="text"
    //         name="category"
    //         value={formData.category}
    //         onChange={handleInputChange}
    //       />
    //     </label>
    //     <button type="submit" className="btn">
    //       Submit
    //     </button>
    //   </form>
    // </div>
    <>
      <ProductForm
        formData={formData}
        handleInputChange={handleInputChange}
        onSubmitHandler={onSubmitHandler}
      />
    </>
  );
};

export default AddNewProduct;
