"use client";
import React, { useState } from "react";
import "./style.css";

const ImageUpload = () => {
  const [file, setFile] = useState();

  const uploadHandler = async (e) => {
    e.preventDefault();
    try {
      let data = new FormData();
      data.set("file", file);

      let response = await fetch("http://localhost:3000/api/imageUpload", {
        method: "POST",
        body: data,
      });
      response = await response.json();
      setFile();

      if (response.success) {
        alert(response.message);
      } else {
        alert(response.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="main_div">
      <form onSubmit={uploadHandler} className="box">
        <input type="file" onChange={(e) => setFile(e.target.files?.[0])} />
        <button className="btn" type="submit">
          Upload
        </button>
      </form>
    </div>
  );
};

export default ImageUpload;
