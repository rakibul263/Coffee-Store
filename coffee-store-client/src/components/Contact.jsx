import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
    alert("Message Sent!"); // এখানে API POST call করা যাবে
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-16 mt-30">
      <h1 className="text-4xl rancho-regular text-[#331A15] text-center mb-6">
        Contact Us
      </h1>
      <p className="text-center text-gray-700 mb-10">
        Have questions or suggestions? Send us a message and we will get back to
        you!
      </p>

      <form
        className="bg-[#F4F3F0] p-8 rounded-xl shadow-md space-y-6"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="input input-bordered w-full rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="input input-bordered w-full rounded-lg"
            required
          />
        </div>

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Type your message..."
          className="textarea textarea-bordered w-full h-32 rounded-lg"
          required
        ></textarea>

        <button
          type="submit"
          className="bg-[#D2B48C] text-[#331A15] px-6 py-3 rounded-2xl font-semibold hover:bg-[#c9a77a] duration-200"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
