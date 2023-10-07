import Image from "next/image";
import React from "react";
import "./style.css";
import Link from "next/link";
import DeleteBtn from "@/util/DeleteBtn";

const fetchProducts = async () => {
  try {
    let data = await fetch("http://localhost:3000/api/products", {
      cache: "no-cache",
    });
    data = await data.json();

    if (data.success) {
      return data.data;
    } else {
      return { message: data.message };
    }
  } catch (error) {
    console.log(error);
  }
};

const Products = async () => {
  const products = await fetchProducts();

  return (
    <div className="main_div">
      <table>
        <thead>
          <tr style={{ height: 60 }}>
            <td>Image</td>
            <td>Title</td>
            <td>Price</td>
            <td>Category</td>
            <td>Description</td>
            <td>Update Product</td>
            <td>Delete Product</td>
          </tr>
        </thead>
        <tbody>
          {products?.map((el) => (
            <tr key={el._id}>
              <td>
                <Image
                  src={el.image}
                  alt="product_img"
                  height={50}
                  width={100}
                />
              </td>
              <td>{el.title}</td>
              <td>{el.price}</td>
              <td>{el.category}</td>
              <td style={{ textAlign: "left" }}>{el.description}</td>
              <td>
                <Link className="editBTN" href={"/products/" + el._id}>
                  Edit
                </Link>
              </td>
              <td>
                {/* <span className="deleteBTN">Delete</span> */}
                <DeleteBtn
                  id={el._id}
                  url={"http://localhost:3000/api/products/"}
                  method={"DELETE"}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Products;
