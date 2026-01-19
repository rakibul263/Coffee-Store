import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries(),
    );

    createUser(email, password)
      .then((result) => {
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };

        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "SignUp Successful!",
                icon: "success",
              }).then(() => {
                navigate("/");
              });
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This email already in use",
          footer:
            '<a href="/signin" class="text-green-500 underline">Please Login</a>',
        });
      });

    form.reset();
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#F4F3F0] px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-lg p-8 md:p-12 rounded-2xl shadow-lg space-y-4"
      >
        <h1 className="text-center text-3xl md:text-4xl text-[#331A15] font-bold rancho-regular">
          SignUp Your Account
        </h1>

        <div className="grid grid-cols-1 gap-4">
          <div>
            <label className="label font-semibold">Name</label>
            <input
              type="text"
              name="name"
              className="input input-bordered w-full"
              placeholder="Enter Your Full Name"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Address</label>
            <input
              type="text"
              name="address"
              className="input input-bordered w-full"
              placeholder="Enter Your Address"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Phone</label>
            <input
              type="text"
              name="phone"
              className="input input-bordered w-full"
              placeholder="Enter Your Phone Number"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input input-bordered w-full"
              placeholder="Enter Your Photo URL"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Email</label>
            <input
              type="email"
              name="email"
              className="input input-bordered w-full"
              placeholder="Email"
              required
            />
          </div>

          <div>
            <label className="label font-semibold">Password</label>
            <input
              type="password"
              name="password"
              className="input input-bordered w-full"
              placeholder="Password"
              pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}"
              required
            />
          </div>
        </div>

        <Link to="#" className="text-sm text-red-500 hover:underline">
          Forget Your Password?
        </Link>

        <button className="w-full mt-4 btn bg-[#331A15] text-white text-xl md:text-2xl font-bold rancho-regular">
          SignUp
        </button>

        <p className="text-center mt-2 text-sm md:text-base">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-green-500 font-bold hover:underline"
          >
            Please Login
          </Link>
        </p>

        <button className="w-full mt-4 btn bg-white text-black border border-[#e5e5e5] text-xl md:text-2xl rancho-regular flex items-center justify-center gap-2">
          <svg
            aria-label="Google logo"
            width="30"
            height="30"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="M0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          Login with Google
        </button>
      </form>
    </div>
  );
};

export default SignUp;
