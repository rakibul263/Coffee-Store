import React, { useState } from "react";
import { useLoaderData } from "react-router";

const Users = () => {
  const initialUsers = useLoaderData();
  const [users, setUsers] = useState(initialUsers);
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
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
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
