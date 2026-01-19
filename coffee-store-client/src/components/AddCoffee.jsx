import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const newCoffee = Object.fromEntries(formData.entries());

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
          });
          form.reset();
        }
      });
  };

  return (
    <div className="px-5 py-10 md:p-16 bg-[#F4F3F0] border border-base-300 rounded-xl shadow-lg mt-28 max-w-5xl mx-auto">
      {/* Header */}
      <div className="text-center space-y-4 mb-8">
        <h1 className="text-3xl md:text-5xl font-bold rancho-regular">
          Add New Coffee
        </h1>
        <p className="text-gray-600 md:w-3/4 mx-auto text-sm md:text-base">
          Add your favorite coffee details to store in the database. Fill all
          the information carefully.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1 */}
          <fieldset className="space-y-3">
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="name"
              placeholder="Enter coffee name"
              required
            />

            <label className="label font-semibold">Supplier</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="supplier"
              placeholder="Enter coffee supplier"
              required
            />

            <label className="label font-semibold">Price</label>
            <input
              type="number"
              className="input input-bordered w-full"
              name="price"
              placeholder="Enter coffee price"
              required
            />
          </fieldset>

          {/* Column 2 */}
          <fieldset className="space-y-3">
            <label className="label font-semibold">Quantity</label>
            <input
              type="number"
              className="input input-bordered w-full"
              name="Quantity"
              placeholder="Enter coffee quantity"
              required
            />

            <label className="label font-semibold">Taste</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="taste"
              placeholder="Enter coffee taste"
              required
            />

            <label className="label font-semibold">Details</label>
            <input
              type="text"
              className="input input-bordered w-full"
              name="details"
              placeholder="Enter coffee details"
              required
            />
          </fieldset>

          {/* Photo URL */}
          <fieldset className="col-span-1 md:col-span-2">
            <label className="label font-semibold">Photo URL</label>
            <input
              type="text"
              className="input input-bordered w-full mt-2"
              name="photo"
              placeholder="Enter photo URL"
              required
            />
          </fieldset>
        </div>

        {/* Button */}
        <div className="text-center mt-10">
          <button className="btn bg-[#D2B48C] text-lg border-[#331A15] border-2 w-full md:w-auto px-10">
            Add Coffee
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCoffee;
