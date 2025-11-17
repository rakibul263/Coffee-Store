import React from "react";
import { useLoaderData } from "react-router";
import ImageCard from "./ImageCard";
import Hero from "./Hero";

const CoffeeDetails = () => {
  const data = useLoaderData();
  const { _id, name, supplier, price, Quantity, taste, details, photo } = data;
  return (
    <div>
      <div className="card card-side bg-[#F5F4F1] shadow-sm max-w-[80%] mx-auto mt-5">
        <figure className="ml-[15%]">
          <img src={photo} alt="coffee" className="w-[250px] h-[420px]" />
        </figure>

        <div className="card-body flex flex-col justify-center items-start ml-[15%]">
          <h2 className="rancho-regular text-3xl shadow-black text-[#331A15]">
            Niceties
          </h2>
          <h2>
            <span className="font-bold">Name :</span> {name}
          </h2>
          <h5>
            <span className="font-bold">Supplier : </span>
            {supplier}
          </h5>
          <h5>
            <span className="font-bold">Taste : </span>
            {taste}
          </h5>
          <h5>
            <span className="font-bold">Price : </span>
            {price}
          </h5>
          <h5>
            <span className="font-bold">Quantity : </span>
            {Quantity}
          </h5>
          <h5>
            <span className="font-bold">Details : </span>
            {details}
          </h5>
        </div>
        <div>
          <h5 className="">Follow Us Now</h5>
        </div>
      </div>
    </div>
  );
};

export default CoffeeDetails;
