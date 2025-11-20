import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, supplier, price, Quantity, taste, details, photo } =
    coffee;
  const navigate = useNavigate();

  const handleEdit = (id) => {
    navigate(`/updateCoffee/${id}`);
  };

  const handleView = (id) => {
    navigate(`/coffeeDetails/${id}`);
  };

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
      if (result.isConfirmed) {
        fetch(
          `https://coffee-store-server-omega-five.vercel.app/coffees/${id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });

              // remove from UI
              const remaining = coffees.filter((c) => c._id !== id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm">
      <figure className="ml-5">
        <img src={photo} alt="coffee" className="w-[150px] h-[220px]" />
      </figure>

      <div className="card-body flex flex-col justify-center items-start">
        <h2 className="card-title">Name : {name}</h2>
        <h5>
          <span className="font-bold">Supplier : </span>
          {supplier}
        </h5>
        <h5>
          <span className="font-bold">Price : </span>
          {price}
        </h5>
      </div>

      <div className="grid grid-cols-1 mt-10 mb-10 mr-8 gap-3">
        <button
          className="btn bg-[#D2B48C] p-1 text-white"
          onClick={() => handleView(_id)}
        >
          <FaEye size={25} />
        </button>

        <button
          className="btn bg-[#EA4744] p-1 text-white"
          onClick={() => handleEdit(_id)}
        >
          <MdEdit size={25} />
        </button>

        <button
          onClick={() => handleDelete(_id)}
          className="btn bg-[#3C393B] p-1 text-white"
        >
          <MdDelete size={25} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
