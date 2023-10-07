"use client";
import React from "react";

const DeleteBtn = ({ id, url }) => {
  const deleteUserHandle = async () => {
    try {
      let res = await fetch(url + id, {
        method: "DELETE",
      });
      res = await res.json();
      if (res.success) {
        alert(res.message);
      } else {
        alert(res.message);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <button
        className="button"
        style={{ backgroundColor: "salmon", color: "black" }}
        onClick={deleteUserHandle}
      >
        DELETE
      </button>
    </div>
  );
};

export default DeleteBtn;
