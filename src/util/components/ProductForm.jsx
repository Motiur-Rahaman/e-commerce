import React from "react";
import "./style.css";
import Link from "next/link";

const ProductForm = ({ onSubmitHandler, formData, handleInputChange }) => {
  return (
    <div className="user-form-container main_div">
      <form onSubmit={onSubmitHandler} className="user-form">
        <label>
          Title:
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Price:
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Image Url:
          <input
            type="text"
            name="image"
            value={formData.image}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:
          <input
            type="text"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Category:
          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" className="btn">
          Submit
        </button>
      </form>
      <Link href={"/products"} className="navigateBTN">
        Go Back
      </Link>
    </div>
  );
};

export default ProductForm;
