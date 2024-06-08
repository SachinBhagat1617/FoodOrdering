import React, { useState } from "react";
import { assets } from "../Food Del Frontend Assets/assets/assets";
import { useDispatch } from "react-redux";
import { setLogin } from "../utils/CategorySlice";

const LoginPopUp = () => {
  const dispatch = useDispatch();
  const [signUp, setSignUp] = useState(false);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-lg p-8 w-full max-w-md mx-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">
            {signUp ? "Sign Up" : "Log In"}
          </h1>
          <img
            onClick={() => dispatch(setLogin())}
            src={assets.cross_icon}
            alt="Close"
            className="cursor-pointer h-6 w-6"
          />
        </div>
        <form>
          {signUp && (
            <div className="mb-4">
              <label className="block mb-2 text-gray-700" htmlFor="name">
                Name:
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
          )}
          <div className="mb-4">
            <label className="block mb-2 text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-gray-700" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 transition duration-300"
          >
            {signUp ? "Sign Up" : "Sign In"}
          </button>
          <div className="mt-4 text-center text-gray-700">
            {signUp ? (
              <>
                Already have an account?{" "}
                <span
                  onClick={() => setSignUp(false)}
                  className="text-green-500 cursor-pointer"
                >
                  Log In here
                </span>
              </>
            ) : (
              <>
                Don't have an account?{" "}
                <span
                  onClick={() => setSignUp(true)}
                  className="text-green-500 cursor-pointer"
                >
                  Sign Up here
                </span>
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPopUp;
