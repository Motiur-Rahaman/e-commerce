import DeleteBtn from "@/util/DeleteBtn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const userDetails = async (id) => {
  try {
    let data = await fetch("http://localhost:3000/api/users/" + id);
    data = await data.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

const UserDetails = async ({ params }) => {
  const uID = params.userId;
  const user = await userDetails(uID);

  return (
    <div className="main_div">
      <div className="big_container">
        {user?.error ? (
          <h1>{user?.error}</h1>
        ) : (
          <>
            <Image
              src={user?.image}
              width={100}
              height={50}
              alt="userImg"
              className="userImg"
            />
            <div className="info_div">
              <h3>Name: {user?.firstName}</h3>
              <p>Email: {user?.email}</p>
              <p>Age: {user?.age}</p>
              <p>Gender: {user?.gender}</p>
              <p>Phone: {user?.phone}</p>
              <p>Height: {user?.height}</p>
              <p>Weight: {user?.weight}</p>
              <p>Address: {user?.address?.address}</p>
              <p>City: {user?.address?.city}</p>
            </div>

            <div style={{ display: "flex", gap: 10 }}>
              <Link className="button" href={`/users/${user.id}/update`}>
                Edit
              </Link>
              <DeleteBtn id={user.id} url="http://localhost:3000/api/users/" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDetails;
