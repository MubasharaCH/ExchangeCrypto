import { useState } from "react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/forms/input";
import Link from "next/link";
import { FaGoogle, FaApple } from "react-icons/fa";
import { ROUTES } from "@/utils/routes";
import { useRouter } from "next/router";
import Logo from "@/components/ui/logo";

const BinanceLogin = () => {
  const [emailEntered, setEmailEntered] = useState(false); // Track if email is entered
  const [email, setEmail] = useState(""); // Track email value
  const [password, setPassword] = useState("");
  const router = useRouter(); // Track password value

  const handleNext = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setEmailEntered(true); // Show password field
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic for final form submission here
    console.log("Email:", email, "Password:", password);
    router.push(ROUTES.Home);
  };

  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen items-center justify-center">
        {/* Login Card */}
        <div className="w-full max-w-md mt-20 rounded-3xl bg-gray-900 md:border border-gray-600  shadow-lg min-h-[40rem]">
          <div className="flex mb-2 pt-8 px-1">
            <div className="text-2xl font-bold text-yellow-500 px-1">
              <Logo />
            </div>
          </div>
          <div className="px-8 py-2">
            <div className="mb-8 p-2">
              <h1 className="text-2xl font-bold text-white">
                {emailEntered ? "Enter your password" : "Log in"}
              </h1>
              {emailEntered && <p className="text-gray-400">{email}</p>}
            </div>

            {/* Login Form */}
            <form
              onSubmit={emailEntered ? handleSubmit : handleNext}
              className="space-y-6"
            >
              {/* Email Field */}
              {!emailEntered && (
                <div>
                  <Input
                    type="text"
                    label="Email/Phone number"
                    id="email"
                    placeholder="Email/Phone (without country code)"
                    className="w-full rounded-md  border-gray-600 bg-gray-900 p-3 text-sm text-white placeholder-gray-500 focus:border-[#fcd535] focus:ring-[#fcd535] focus:outline-none"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Password Field */}
              {emailEntered && (
                <div>
                  <Input
                    type="password"
                    label="Password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full rounded-md border-gray-600 bg-gray-900 p-3 text-sm text-white placeholder-gray-500 focus:border-[#fcd535] focus:ring-[#fcd535] focus:outline-none"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              {/* Button */}
              <div className="px-2">
                {" "}
                <Button
                  type="submit"
                  className="w-full rounded-md bg-[#fcd535]   text-sm font-semibold text-black hover:bg-[#fbe47b] focus:ring-2 focus:ring-[#fcd535] focus:outline-none"
                >
                  {emailEntered ? "Next" : "Next"}
                </Button>
              </div>
              {emailEntered && (
                <p className="text-center text-sm text-yellow-500">
                  Forget password?
                </p>
              )}
            </form>

            {/* Divider */}
            {!emailEntered && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
      <div className="text-center mt-8">
        <Link href={ROUTES.SignUp}>
          <span className="text-yellow-500 text-sm">
            Create an Exchange Account
          </span>
        </Link>
      </div>
    </div>
  );
};

export default BinanceLogin;
