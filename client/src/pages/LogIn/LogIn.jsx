import { useState } from "react";
import { TbEyeClosed } from "react-icons/tb";
import { RiEyeCloseFill } from "react-icons/ri";
import { MdOutlineMailOutline } from "react-icons/md";
import { VscLockSmall } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-gray-100 p-8 rounded-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Sample Food"
            className="object-cover h-full w-full rounded-l-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-4xl font-semibold text-center mb-6">Welcome</h2>
          <form className="relative">
            <div className="mb-8 relative">
              <label
                className="absolute -top-3 left-6 bg-white px-1 text-gray-700 text-sm font-semibold"
                htmlFor="email"
              >
                Email
              </label>
              <div className="flex items-center shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <MdOutlineMailOutline className=" text-gray-500 mr-3" />
                <input
                  className="flex-1 bg-transparent focus:outline-none"
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
            <div className="mb-8 relative">
              <label
                className="absolute -top-3 left-6 bg-white px-1 text-gray-700 text-sm font-semibold"
                htmlFor="password"
              >
                Password
              </label>
              <div className="flex items-center shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <VscLockSmall className=" text-gray-500 mr-3" />
                <input
                  className="flex-1 bg-transparent focus:outline-none"
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                />
                <button
                  type="button"
                  className="focus:outline-none ml-3"
                  onClick={togglePasswordVisibility}
                >
                  {showPassword ? (
                    <TbEyeClosed className="text-gray-500" />
                  ) : (
                    <RiEyeCloseFill className="text-gray-500" />
                  )}
                </button>
              </div>
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-green-900 hover:underline">
                  Forgot Password?
                </a>
              </div>
            </div>
            <button
              className="w-full bg-green-950 text-gray-50 font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Login
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center my-4">
            <hr className="flex-grow border-gray-300" />
            <span className="mx-2 text-gray-500 text-center">-or-</span>
            <hr className="flex-grow border-gray-300" />
          </div>

          {/* Sign-Up Link */}
          <p className="text-center">
            Don’t have an account? <Link to='/SignUp' className="text-green-800">Sign up</Link>
          </p>

          {/* Social Icons */}
          <div className="flex justify-center mt-6">
            <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
              <i className="fab fa-google"></i>
            </a>
            <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i>
            </a>
            <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
              <i className="fab fa-apple"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;