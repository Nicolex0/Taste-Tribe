import {Link} from 'react-router-dom'
const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex">
        {/* Left Side - Image */}
        <div className="w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1495195134817-aeb325a55b65?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Sample Food"
            className="object-cover h-full w-full rounded-l-md"
          />
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Welcome</h2>
          <form className="relative">
            <div className="mb-8 relative">
              <label className="absolute -top-3 left-6 bg-white px-1 text-gray-700 text-sm font-semibold" htmlFor="email">
                Email
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-8 relative">
              <label className="absolute -top-3 left-6 bg-white px-1 text-gray-700 text-sm font-semibold" htmlFor="password">
                Password
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="Enter your password"
              />
              <div className="text-right mt-2">
                <a href="#" className="text-sm text-green-950 hover:underline">Forgot Password?</a>
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
            <hr className="flex-grow border-gray-300"/>
            <span className="mx-2 text-gray-500 text-center">-or-</span>
            <hr className="flex-grow border-gray-300"/>

          </div>
          
          {/* Sign-Up Link */}
          <p className="text-center font-semibold">
            Don’t have an account? <span>  <Link to='/SignUp' className="text-green-800">Sign up</Link></span>
            
          </p>

          {/* Social Icons */}
          <div className="flex justify-center mt-6">
            <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
              <i className="fab fa-google"></i> {/* Replace with a Google icon */}
            </a>
            <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook"></i> {/* Replace with a Facebook icon */}
            </a>
            <a href="#" className="mx-2 text-gray-500 hover:text-gray-700">
              <i className="fab fa-apple"></i> {/* Replace with an Apple icon */}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;