import { useState } from "react";
import Button from "@/components/ui/button";
import Input from "@/components/ui/forms/input";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import { FaGoogle, FaApple } from "react-icons/fa";
import { useRouter } from "next/router";
import Logo from "@/components/ui/logo";

const BinanceSignUP = () => {
  const [emailEntered, setEmailEntered] = useState(false);
  const [phoneEntered, setphoneEntered] = useState(false);
  const [step, setStep] = useState(1); // Step management: 1 = Form, 2 = Verification
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState(""); // Store phone number
  const [code, setCode] = useState("");
  const router = useRouter(); // Store verification code

  const handleNext = (e) => {
    e.preventDefault();
    if (phone.trim()) {
      setStep(2);
      setPhone(e.value);
      setphoneEntered(true);
      // Proceed to verification step
    }
    if (email) {
      setEmailEntered(true);
    }
  };

  const handleVerify = (e) => {
    e.preventDefault();
    console.log("Verification Code:", code);
    router.push(ROUTES.Home);
  };

  return (
    <div className="bg-gray-900">
      <div className="flex min-h-screen items-center justify-center">
        {/* Main Card */}

        <div className="w-full max-w-md mt-20 rounded-3xl bg-gray-900 md:border border-gray-600  shadow-lg">
          {/* Logo */}
          <div className="text-2xl font-bold text-yellow-500 pt-8 px-1">
            {/* <Link href="/">Exchange</Link> */}
            <Logo />
          </div>
          <div className="px-8 py-2">
            <div className="mb-8 p-2">
              <div className="flex mb-8"></div>
              <h1 className="text-2xl font-bold text-white">
                {step === 1 ? "Welcome to Binance" : "Verify your number"}
              </h1>
            </div>

            {/* Step 1: Sign Up Form */}
            {step === 1 && (
              <form onSubmit={handleNext} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    label="Email/Phone number"
                    id="phone"
                    placeholder="Email/Phone (without country code)"
                    className="w-full rounded-md bg-gray-900 p-3 text-sm text-white placeholder-gray-500 focus:border-[#fcd535] focus:ring-[#fcd535] focus:outline-none"
                    value={phone || email}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                {/* Checkbox Section */}
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="terms"
                    className="w-5 h-5 accent-[#fcd535] border-gray-500 rounded-sm checked:bg-[#fcd535] checked:border-[#fcd535] focus:ring-[#fcd535] focus:outline-none"
                    required
                  />
                  <label
                    htmlFor="terms"
                    className="ml-2 text-sm font-medium text-gray-400"
                  >
                    By creating an account, I agree to Exchange's{" "}
                    <a href="#" className="text-[#fcd535] hover:underline">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-[#fcd535] hover:underline">
                      Privacy Policy
                    </a>
                  </label>
                </div>

                {/* Next Button */}
                <Button
                  type="submit"
                  className="w-full rounded-md bg-[#fcd535] py-3 text-sm font-semibold text-black hover:bg-[#fbe47b] focus:ring-2 focus:ring-[#fcd535] focus:outline-none"
                >
                  Next
                </Button>
              </form>
            )}
            {!emailEntered && !phoneEntered && (
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
            {/* Step 2: Verification Screen */}
            {step === 2 && (
              <form onSubmit={handleVerify} className="space-y-6">
                <p className="text-sm text-gray-400">
                  Please enter the <strong>6-digit verification code</strong>{" "}
                  sent to {phone}. The code is valid for 30 minutes.
                </p>

                <div>
                  <Input
                    type="text"
                    label="Verification Code"
                    id="code"
                    placeholder="Get Code"
                    className="w-full rounded-md placeholder-yellow-500 bg-gray-900 p-3 text-sm text-white  focus:border-[#fcd535] focus:ring-[#fcd535] focus:outline-none"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                  />
                </div>

                {/* Get Code and Next Buttons */}
                <div className="flex justify-between">
                  {/* <button
                  type="button"
                  className="text-[#fcd535] text-sm hover:underline"
                >
                  Get Code
                </button> */}
                </div>

                <Button
                  type="submit"
                  className="w-full rounded-md bg-[#fcd535] py-3 text-sm font-semibold text-black hover:bg-[#fbe47b] focus:ring-2 focus:ring-[#fcd535] focus:outline-none"
                >
                  Next
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      {step === 1 && (
        <div className="text-center mt-8 gap-1">
          <Link href="">
            <span className="text-yellow-500 text-sm">
              Sign up as an entity
            </span>
          </Link>
          <span className="text-gray-500 text-sm"> or </span>
          <Link href={ROUTES.Login}>
            <span className="text-yellow-500 text-sm">Log In</span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default BinanceSignUP;
