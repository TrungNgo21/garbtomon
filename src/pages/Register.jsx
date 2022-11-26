import { useState } from "react";
import { FaUserAlt, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";

import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
function Register() {

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setReShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    username: "",
    password: "",
    rePassword: "",
  });
  const { username, password, fullname, rePassword, email } =
    formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <div className="py-4">
      <header>
        <h1 className="text-3xl font-extrabold p-5 text-center">
          Welcome to Register Page!{" "}
        </h1>
      </header>
      <main>
        <form className="form-control items-center">
          <div className="w-2/3 flex items-center">
            <FaUserAlt className="inline mr-4 text-2xl" />
            <input
              type="text"
              className="text-xl input input-md border-2 border-[#083045] my-4 w-full"
              value={fullname}
              name="fullname"
              id="fullname"
              placeholder="Fullname"
              onChange={onChange}
            />
          </div>
          <div className="w-2/3 flex items-center">
            <FaUserAlt className="inline mr-4 text-2xl" />
            <input
              type="text"
              className="text-xl input input-md border-2 border-[#083045] my-4 w-full"
              value={username}
              name="username"
              id="username"
              placeholder="Username"
              onChange={onChange}
            />
          </div>
          <div className="w-2/3 flex items-center">
            <MdEmail className="inline mr-4 text-2xl" />
            <input
              type="text"
              className="text-xl input input-md border-2 border-[#083045] my-4 w-full"
              value={email}
              name="email"
              id="email"
              placeholder="Email"
              onChange={onChange}
            />
          </div>
          <div className="relative w-2/3 flex items-center">
            <FaKey className="inline mr-4 text-2xl" />
            <input
              type={showPassword ? "text" : "password"}
              className=" text-xl input input-md border-2 border-[#083045] w-full my-4"
              value={password}
              id="password"
              name="password"
              placeholder="Password"
              onChange={onChange}
            />
            {showPassword ? (
              <AiFillEyeInvisible
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
                className="absolute right-0 bottom-1/2 translate-y-1/2 mr-2 text-2xl cursor-pointer"
              />
            ) : (
              <AiFillEye
                onClick={() => {
                  setShowPassword((prev) => !prev);
                }}
                className="absolute right-0 bottom-1/2 translate-y-1/2 mr-2 text-2xl cursor-pointer"
              />
            )}
          </div>

          <div className="relative w-2/3 flex items-center">
            <FaKey className="inline mr-4 text-2xl" />
            <input
              type={showRePassword ? "text" : "password"}
              className=" text-xl input input-md border-2 border-[#083045] w-full my-4"
              value={rePassword}
              id="rePassword"
              name="rePassword"
              placeholder="Re-password"
              onChange={onChange}
            />
            {showRePassword ? (
              <AiFillEyeInvisible
                onClick={() => {
                  setReShowPassword((prev) => !prev);
                }}
                className="absolute right-0 bottom-1/2 translate-y-1/2 mr-2 text-2xl cursor-pointer"
              />
            ) : (
              <AiFillEye
                onClick={() => {
                  setReShowPassword((prev) => !prev);
                }}
                className="absolute right-0 bottom-1/2 translate-y-1/2 mr-2 text-2xl cursor-pointer"
              />
            )}
          </div>

          <button className="btn btn-outline mt-4 border-2">Register</button>
        </form>
        <Link
          to="/login"
          className="card shadow-lg hover:border-2 hover:border-[#083045] mt-4 cursor-pointer mx-8"
        >
          <div className="card-body flex-row items-center justify-between">
            <div className="card-title">Login here !</div>
            <BsFillArrowRightCircleFill className="text-4xl text-[#083045]" />
          </div>
        </Link>
      </main>
    </div>
  );
}

export default Register;
