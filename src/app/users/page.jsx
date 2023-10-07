import Image from "next/image";
import Link from "next/link";
import React from "react";

const getUsersData = async () => {
  try {
    let data = await fetch("http://localhost:3000/api/users");
    data = await data.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const UsersPage = async () => {
  const userData = await getUsersData();

  return (
    <div className="main_div">
      <Link href={"/addUser"} className="navigateBTN">
        <h1>Add New User</h1>
      </Link>
      <div className="container">
        {userData?.map((el) => (
          <div key={el.id} className="user_box">
            <Image
              src={el.image}
              width={100}
              height={50}
              alt="userImg"
              className="userImg"
            />
            <div>
              <h3>Name: {el.firstName}</h3>
              <p>Email: {el.email}</p>
              <p>Age: {el.age}</p>
              <p>Gender: {el.gender}</p>
              <Link href={`/users/${el.id}`} className="button">
                View
              </Link>
              <Link
                className="button"
                href={`/users/${el.id}/update`}
                style={{ marginLeft: ".2rem" }}
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default UsersPage;
