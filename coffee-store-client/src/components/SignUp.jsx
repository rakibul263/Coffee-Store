import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { use } from "react";
import { Link } from "react-router";
import { auth } from "../Firebase/firebase.init";
import { AuthContext } from "../context/AuthContext";
import Swal from "sweetalert2";

const SignUp = () => {
  const { createUser } = use(AuthContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const { email, password, ...restFormData } = Object.fromEntries(
      formData.entries()
    );
    // sign in setup
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        // save profile info in the database
        const userProfile = {
          email,
          ...restFormData,
          creationTime: result.user?.metadata?.creationTime,
          lastSignInTime: result.user?.metadata?.lastSignInTime,
        };
        fetch("http://localhost:3000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(userProfile),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                title: "SignUp Successful!",
                icon: "success",
                draggable: true,
              });
            }
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "This email already in use",
          footer: '<a href="/signin" style={{color:"green"}}>Please Login</a>',
        });
      });
    form.reset();
  };
  return (
    <form
      className="fieldset bg-[#F4F3F0] border-base-300 rounded-2xl w-[40%] border p-4 mt-30 max-w-full mx-auto pt-5 pb-5 pl-20 pr-20"
      onSubmit={handleSubmit}
    >
      <h1 className="text-center text-3xl text-[#331A15] rancho-regular ">
        SignUp Your Account
      </h1>
      <label className="label">Name</label>
      <input
        type="text"
        className="input w-full"
        placeholder="Enter Your Full Name"
        name="name"
        required
      />
      <label className="label">Address</label>
      <input
        type="text"
        className="input w-full"
        placeholder="Enter Your Address"
        name="address"
        required
      />
      <label className="label">Phone</label>
      <input
        type="text"
        className="input w-full"
        placeholder="Enter Your Phone Number"
        name="phone"
        required
      />
      <label className="label">Photo</label>
      <input
        type="text"
        className="input w-full"
        placeholder="Enter Your Photo URL"
        name="photo"
        required
      />
      <label className="label">Email</label>
      <input
        type="email"
        className="input w-full"
        placeholder="Email"
        name="email"
        required
      />

      <label className="label">Password</label>
      <input
        type="password"
        className="input w-full"
        placeholder="Password"
        pattern="(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).{6,}"
        name="password"
        required
      />

      <Link to="#" className="hover:underline hover:text-red-500">
        Forget Your Password ?
      </Link>

      <button className="rancho-regular btn bg-[#331A15] text-white text-2xl font-bold mt-4">
        SignUp
      </button>
      <Link to="#">
        Already Have an account?{" "}
        <span className="hover:text-green-500 hover:underline">
          Please Login
        </span>
      </Link>
      <button className="btn bg-white text-black border-[#e5e5e5] text-2xl rancho-regular">
        <svg
          aria-label="Google logo"
          width="30"
          height="30"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <g>
            <path d="m0 0H512V512H0" fill="#fff"></path>
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
  );
};

export default SignUp;
