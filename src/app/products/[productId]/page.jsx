"use client";
import ProductForm from "@/util/components/ProductForm";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const EditProductPage = ({ params }) => {
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

  useEffect(() => {
    fetchProductData();
  }, []);

  const pId = params.productId;

  const fetchProductData = async () => {
    try {
      let product = await fetch("http://localhost:3000/api/products/" + pId);
      product = await product.json();

      setFormData({
        title: product.data.title,
        price: product.data.price,
        description: product.data.description,
        category: product.data.category,
        image: product.data.image,
      });
    } catch (error) {}
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "http://localhost:3000/api/products/" + pId,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const product = await response.json();

      if (response.ok) {
        if (product.success) {
          alert("Product Updated Successfully");
          router.push("/products");
        } else {
          // Handle server response indicating failure
          alert("Product Update Failed");
        }
      } else {
        // Handle HTTP error status
        alert("HTTP Error: " + response.status);
      }
    } catch (error) {
      // Handle other errors (e.g., network issues)
      console.error("Error:", error);
      alert("An error occurred while updating the product.");
    }
  };

  return (
    <div>
      <ProductForm
        formData={formData}
        onSubmitHandler={onSubmitHandler}
        handleInputChange={handleInputChange}
      />
    </div>
  );
};

export default EditProductPage;
