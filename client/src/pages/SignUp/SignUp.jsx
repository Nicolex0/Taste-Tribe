import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        <div className="md:w-1/2 p-6">
          <h2 className="text-2xl font-semibold text-center mb-6">Create Account</h2>
          <form className="relative">
            <div className="mb-8 relative">
              <label className="absolute -top-3 left-6 bg-white px-1 text-gray-700 text-sm font-semibold" htmlFor="username">
                Username
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="Enter your username"
              />
            </div>
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
            </div>
            <div className="mb-8 relative">
              <label className="absolute -top-3 left-6 bg-white px-1 text-gray-700 text-sm font-semibold" htmlFor="confirm-password">
                Confirm Password
              </label>
              <input
                className="shadow appearance-none border rounded-full w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="Enter your password"
              />
            </div>
            <button
              className="w-full bg-green-950 text-gray-50 font-bold py-3 px-4 rounded-full focus:outline-none focus:shadow-outline"
              type="button"
            >
              Create Account
            </button>
          </form>
          <p className="mt-4 font-semibold text-center">
            Already have an account? <Link to='/' className="text-green-800">Sign in</Link>
          </p>
        </div>
        {/* Hidden on small screens, visible on medium screens and above */}
        <div className="w-full md:w-1/2 hidden md:block">
          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
            alt="Sample Food"
            className="object-cover h-full w-full rounded-l-lg md:rounded-none"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;