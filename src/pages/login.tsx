import Link from "next/link";
import { FaGoogle, FaApple } from "react-icons/fa";

const BinanceLogin = () => {
  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen items-center justify-center ">
        {/* Login Card */}
        <div className="w-full max-w-md  mt-20  rounded-3xl bg-gray-900 border border-gray-600 p-8 shadow-lg">
          {/* Logo */}
          <div className="mb-8 ">
            <div className="flex  mb-8">
              {/* <img
              src="/binance-logo.svg" // Replace with your logo path
              alt="Binance"
              className="h-6"
            /> */}
              <div className="text-2xl font-bold  text-yellow-500">
                <Link href="/">Exchange</Link>
              </div>
            </div>
            <h1 className="text-2xl  font-bold text-white">Log in</h1>
          </div>

          {/* Login Form */}
          <form className="space-y-6">
            {/* Email/Phone Field */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-300"
              >
                Email/Phone number
              </label>
              <input
                type="text"
                id="email"
                placeholder="Email/Phone (without country code)"
                className="w-full rounded-md border border-gray-600 bg-gray-900 p-3 text-sm text-white placeholder-gray-500 focus:border-[#fcd535]  focus:ring-[#fcd535] focus:outline-none"
                required
              />
            </div>

            {/* Next Button */}
            <button
              type="submit"
              className="w-full rounded-md bg-[#fcd535] py-3 text-sm font-semibold text-black hover:bg-[#fbe47b] focus:ring-2 focus:ring-[#fcd535] focus:outline-none"
            >
              Next
            </button>
          </form>

          {/* Divider */}
          <div className="my-8 flex items-center">
            <span className="h-px w-full bg-gray-600"></span>
            <span className="px-3 text-sm text-gray-400">or</span>
            <span className="h-px w-full bg-gray-600"></span>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-4 mb-10">
            <button className="flex w-full items-center justify-center space-x-3 rounded-md border border-gray-600 bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-700">
              <FaGoogle className="text-red-500" />
              <span>Continue with Google</span>
            </button>
            <button className="flex w-full items-center justify-center space-x-3 rounded-md border border-gray-600 bg-gray-900 py-3 text-sm font-medium text-white hover:bg-gray-700">
              <FaApple />
              <span>Continue with Apple</span>
            </button>
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <span className="text-yellow-500 text-sm">
          {" "}
          Create a Exchange Account
        </span>
      </div>
    </div>
  );
};

export default BinanceLogin;
