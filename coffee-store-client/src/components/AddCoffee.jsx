import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());
    console.log(newCoffee);

    fetch("http://localhost:3000/coffees", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Coffee Added Successfully!",
            icon: "success",
            draggable: true,
          });
          form.reset();
        }
      });
  };
  return (
    <div className="p-10 md:p-24 bg-[#F4F3F0] border-base-300 rounded-xl border shadow-lg mt-30">
      <div className="text-center space-y-4 mb-5">
        <h1 className="text-5xl font-bold rancho-regular">Add New Coffee</h1>
        <p className="text-gray-600 md:w-3/4 mx-auto">
          Add your favorite coffee details to store in the database. Fill all
          the required information carefully and submit the form to save the
          coffee data.
        </p>
      </div>
      <form className="max-w-5xl mx-auto" onSubmit={handleSubmit}>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <fieldset className="space-y-3">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="name"
              placeholder="Enter coffee name"
            />

            <label className="label font-semibold">Supplier</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="supplier"
              placeholder="Enter coffee supplier"
            />

            <label className="label font-semibold">Price</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="price"
              placeholder="Enter coffee price"
            />
          </fieldset>

          <fieldset className="space-y-3">
            <label className="label font-semibold">Quantity</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="Quantity"
              placeholder="Enter Coffee Quantity"
            />

            <label className="label font-semibold">Taste</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="taste"
              placeholder="Enter coffee taste"
            />
            <label className="label font-semibold">Details</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="details"
              placeholder="Enter coffee details"
            />
          </fieldset>

          <fieldset className="col-span-2">
            <label className="label font-semibold">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              name="photo"
              placeholder="Enter coffee photo URL"
            />
          </fieldset>
        </div>

        <div className="text-center mt-8">
          <button className="btn bg-[#D2B48C] px-10 text-lg w-full border-[#331A15] border-2">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
