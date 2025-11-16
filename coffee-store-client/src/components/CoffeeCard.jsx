import React from "react";
import { FaEye } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { MdEdit } from "react-icons/md";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee }) => {
  const { name, supplier, price, quantity, taste, details, photo } = coffee;
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
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        });
      }
    });
  };
  return (
    <div className="card card-side bg-[#F5F4F1] shadow-sm">
      <figure className="ml-5">
        <img src={photo} alt="coffee" className="w-[150px] h-[220px]" />
      </figure>
      <div className="card-body flex flex-col justify-center  items-start">
        <h2 className="card-title">
          <span>Name : </span>
          {name}
        </h2>
        <h5>
          <span className="font-bold">Supplier : </span>
          {supplier}
        </h5>
        <h5>
          <span className="font-bold">Price : </span>
          {price}
        </h5>
      </div>
      <div className="grid grid-cols-1 mt-10 mb-10 mr-8">
        <button className="btn bg-[#D2B48C] p-1 text-white">
          <FaEye size={25} />
        </button>
        <button className="btn bg-[#EA4744] p-1 text-white">
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
