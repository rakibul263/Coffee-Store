import { deleteUser } from "firebase/auth";
import React, { use, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { FaEye } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../Firebase/firebase.init";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      deleteUser(auth.currentUser)
        .then(() => {})
        .then((error) => {
          console.log(error);
        });
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/users/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              const remainingUsers = users.filter((user) => user._id !== id);
              setUsers(remainingUsers);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <div className="mt-30 max-w-[75%] mx-auto border border-[#331A15] border-r-8 rounded-3xl  p-4 bg-[#F4F3F0] ">
      <h1 className="text-center text-3xl rancho-regular text[#331A15] mb-5 border-b-2 border-dotted">
        Total Users: {users.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Contact</th>
              <th>Creation Time</th>
              <th>Details</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {users.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={user.photo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{user.name}</div>
                      <div className="text-sm opacity-50">{user.address}</div>
                    </div>
                  </div>
                </td>
                <td>
                  {user.email}
                  <br />
                  <div className="text-sm opacity-50">{user.phone}</div>
                </td>
                <td>{user.creationTime}</td>
                <th className="space-x-4">
                  <button className="color-[#331A15] hover:cursor-pointer">
                    <FaEdit size={20} />
                  </button>
                  <button className="color-[#331A15]  hover:cursor-pointer">
                    <FaEye size={20} />
                  </button>
                  <button
                    className="color-[#331A15]  hover:cursor-pointer"
                    onClick={() => handleDelete(user._id)}
                  >
                    <MdDelete size={20} />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
