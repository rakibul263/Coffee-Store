import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  const { _id, name, supplier, price, Quantity, taste, details, photo } =
    coffee;
  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const updatedCoffee = Object.fromEntries(formData.entries());
    console.log(updatedCoffee);

    // send update coffee to database
    fetch(`http://localhost:3000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdateCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          Swal.fire({
            title: "Update Successful.",
            icon: "success",
            draggable: true,
          });
        }
      });
  };
  return (
    <div className="p-10 md:p-24 bg-[#F4F3F0] border-base-300 rounded-xl border shadow-lg mt-10">
      <div className="text-center space-y-4 mb-5">
        <h1 className="text-5xl font-bold rancho-regular">Update Coffee</h1>
      </div>
      <form className="max-w-5xl mx-auto" onSubmit={handleUpdate}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="space-y-3">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="name"
              placeholder="Enter coffee name"
              defaultValue={name}
            />

            <label className="label font-semibold">Supplier</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="supplier"
              placeholder="Enter coffee supplier"
              defaultValue={supplier}
            />

            <label className="label font-semibold">Price</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="price"
              placeholder="Enter coffee price"
              defaultValue={price}
            />
          </fieldset>

          <fieldset className="space-y-3">
            <label className="label font-semibold">Quantity</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="Quantity"
              placeholder="Enter Coffee Quantity"
              defaultValue={Quantity}
            />

            <label className="label font-semibold">Taste</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="taste"
              placeholder="Enter coffee taste"
              defaultValue={taste}
            />
            <label className="label font-semibold">Details</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="details"
              placeholder="Enter coffee details"
              defaultValue={details}
            />
          </fieldset>

          <fieldset className="col-span-2">
            <label className="label font-semibold">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              name="photo"
              placeholder="Enter coffee photo URL"
              defaultValue={photo}
            />
          </fieldset>
        </div>

        <div className="text-center mt-8">
          <button className="btn bg-[#D2B48C] px-10 text-lg w-full border-[#331A15] border-2">
            Update Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default UpdateCoffee;
