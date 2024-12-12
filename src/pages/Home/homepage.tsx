import Button from "@/components/ui/button";
import Input from "@/components/ui/forms/input";

import Image from "next/image";

import { useEffect, useState } from "react";
import BasicExample from "./faq";

export default function ClassicLayout() {
  const [activeTab, setActiveTab] = useState("Popular");
  const [tab, setTab] = useState("Lite");
  const [isMobile, setIsMobile] = useState(false);
  const images = {
    Lite: "/img/lite-dark.svg",
    Desktop: "/img/desktop-dark.png",
    Pro: "/img/pro-dark.svg",
  };
  const coins = [
    {
      id: 1,
      name: "Bitcoin",
      symbol: "BTC",
      price: "$95,788.00",
      change: "+1.73%",
      icon: "/img/btc.png",
      color: "text-green-500",
    },
    {
      id: 2,
      name: "Ethereum",
      symbol: "ETH",
      price: "$3,716.26",
      change: "+4.68%",
      icon: "/img/eth.png",
      color: "text-green-500",
    },
    {
      id: 3,
      name: "BNB",
      symbol: "BNB",
      price: "$769.91",
      change: "+21.61%",
      icon: "/img/bnb.png",
      color: "text-green-500",
    },
    {
      id: 4,
      name: "XRP",
      symbol: "XRP",
      price: "$2.55",
      change: "+3.64%",
      icon: "/img/xrp.png",
      color: "text-green-500",
    },
    {
      id: 5,
      name: "Solana",
      symbol: "SOL",
      price: "$231.86",
      change: "+5.81%",
      icon: "/img/sol.png",
      color: "text-green-500",
    },
  ];
  const Newcoins = [
    {
      id: 1,
      name: "THENA",
      symbol: "THE",
      price: "$95,788.00",
      change: "+1.73%",
      icon: "/img/the.png",
      color: "text-green-500",
    },
    {
      id: 2,
      name: "Act I:The AI Prophecy Price",
      symbol: "ACT",
      price: "$3,716.26",
      change: "+4.68%",
      icon: "/img/act.png",
      color: "text-green-500",
    },
    {
      id: 3,
      name: "Peanut the Squirrel Price",
      symbol: "PNUT",
      price: "$769.91",
      change: "+21.61%",
      icon: "/img/pnut.png",
      color: "text-green-500",
    },
    {
      id: 4,
      name: "Cetus Protocol",
      symbol: "CETUS",
      price: "$2.55",
      change: "+3.64%",
      icon: "/img/cetus.png",
      color: "text-green-500",
    },
    {
      id: 5,
      name: "CoW Protocol",
      symbol: "COW",
      price: "$231.86",
      change: "+5.81%",
      icon: "/img/cow.png",
      color: "text-green-500",
    },
  ];
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // Mobile is defined as <768px
    };

    handleResize(); // Run on mount
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const dataToDisplay = activeTab === "Popular" ? coins : Newcoins;
  return (
    <>
      <div className="d-flex bg-gray-900">
        {/* First Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-9">
          <div className="bg-gray-900">
            {/* Numbers Section */}
            <div className=" mt-10  md:mt-20">
              <div className="text-3xl md:text-7xl md:text-left text-center font-extrabold text-yellow-500">
                200000,122
              </div>
              <div className="text-3xl md:text-7xl  font-extrabold md:mr-4 md:text-left text-center text-white">
                USERS TRUST US
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-4 pt-8">
              <Input
                type="text"
                placeholder="Email/Phone Number"
                className="w-full md:w-80 text-white"
              />
              <Button className="w-full md:w-40 text-white bg-yellow-500 hover:bg-gray-700">
                Sign Up
              </Button>
            </div>
            <div className="pt-12  md:pt-28 text-gray-500">
              <p className="pb-4">Or Continue with</p>
              <div className="flex  gap-4">
                <div className="rounded-md border border-gray-500 p-3">
                  <Image
                    src="/img/google.png"
                    alt="google"
                    height={20}
                    width={20}
                  />
                </div>
                <div className="rounded-md border border-gray-500 p-3">
                  <Image
                    src="/img/apple-icon.png"
                    alt="apple"
                    height={20}
                    width={20}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Popular/New Listing Section */}
          <div>
            <div className="bg-gray-900 items-center pt-4 space-y-4 md:float-end">
              {/* Popular/New Listing */}
              <div
                className="rounded-lg bg-gray-700 p-6 text-white shadow-lg"
                style={{ maxWidth: "30rem", minHeight: "19rem" }}
              >
                <div className="mb-4 flex  justify-between">
                  <div className="flex gap-4">
                    <span
                      onClick={() => setActiveTab("Popular")}
                      className={`text-md cursor-pointer font-bold ${
                        activeTab === "Popular" ? "text-white" : "text-gray-400"
                      }`}
                    >
                      Popular
                    </span>
                    <span
                      onClick={() => setActiveTab("New Listing")}
                      className={`text-md cursor-pointer font-bold ${
                        activeTab === "New Listing"
                          ? "text-white"
                          : "text-gray-400"
                      }`}
                    >
                      New Listing
                    </span>
                  </div>
                  <a href="#" className="text-sm text-gray-400 hover:underline">
                    {"View All 350+ Coins >"}
                  </a>
                </div>
                <div>
                  {dataToDisplay.map((coin) => (
                    <div
                      key={coin.id}
                      className="flex items-center justify-between py-2"
                    >
                      <div className="flex items-center">
                        <Image
                          src={coin.icon}
                          alt="icons"
                          height={20}
                          width={20}
                        />
                        <div className="ml-2">
                          <div className="font-medium">{coin.symbol}</div>
                          <div className="text-sm text-gray-400">
                            {coin.name}
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-8 text-right">
                        <div>{coin.price}</div>
                        <div className={`${coin.color} text-sm`}>
                          {coin.change}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* News Section */}
              <div
                className="rounded-lg bg-gray-700 p-6 text-white shadow-lg"
                style={{ maxWidth: "30rem", minHeight: "19rem" }}
              >
                <div className="mb-4 flex justify-between">
                  <div className="text-md font-bold">News</div>
                  <a href="#" className="text-sm text-gray-400 hover:underline">
                    {" View All News >"}
                  </a>
                </div>
                <p>
                  BNB Drops Below 760 USDT with a Narrowed 18.34% Increase in 24
                  Hours <br /> Citadel CEO Regrets Missing Cryptocurrency
                  Investment Opportunity <br /> Vestra DAO Faces Ongoing Hack
                  With Significant Losses Ethereum(ETH) Surpasses 3,800 USDT
                  with a 5.94% Increase in 24 Hours
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-4 md:px-9 py-12">
          <div>
            {/* Image Tabs */}
            <div className="flex items-center justify-center">
              {!isMobile || tab == "Desktop" ? (
                <Image
                  src={images[tab]} // Dynamically load the image based on the active tab
                  alt={`${activeTab} image`}
                  width={tab === "Desktop" ? 750 : 250} // Adjust dimensions based on tab
                  height={tab === "Desktop" ? 400 : 500} // Set the desired height
                  className="rounded-md object-cover shadow-lg "
                />
              ) : (
                <Image
                  src={images[tab]} // Dynamically load the image based on the active tab
                  alt={`${activeTab} image`}
                  width={250} // Set the desired width
                  height={500} // Set the desired height
                  className="rounded-md object-cover shadow-lg"
                />
              )}
            </div>
            <div className="mb-4 flex justify-center gap-4 pt-2 text-center">
              {!isMobile && (
                <span
                  onClick={() => setTab("Desktop")}
                  className={`text-md cursor-pointer font-bold ${
                    tab === "Desktop" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Desktop
                </span>
              )}
              <span
                onClick={() => setTab("Lite")}
                className={`text-md cursor-pointer font-bold ${
                  tab === "Lite" ? "text-white " : "text-gray-400"
                }`}
              >
                Lite
              </span>

              <span
                onClick={() => setTab("Pro")}
                className={`text-md cursor-pointer font-bold ${
                  tab === "Pro" ? "text-white" : "text-gray-400"
                }`}
              >
                Pro
              </span>
            </div>
          </div>

          {/* QR Section */}
          <div className="ml-4">
            <h1 className="text-2xl md:text-4xl text-gray-100 ">
              Trade on the go. Anywhere, anytime.
            </h1>
            <div className="flex flex-col md:flex-row items-center space-x-4 mt-6">
              <Image
                src="/img/QR.png"
                alt="QR image"
                width={200}
                height={200}
                className="rounded-md border border-gray-500 shadow-lg"
              />
              <div className="text-center md:text-left text-gray-500">
                <div className="font-medium">Scan to Download App</div>
                <div className="text-gray-100">iOS and Android</div>
              </div>
            </div>
            <div className="flex mt-6 gap-8">
              <div className="rounded-md text-center flex flex-col items-center justify-center hover:shadow hover:shadow-gray-500  p-3">
                <Image
                  src="/img/apple-icon.png"
                  alt="apple"
                  height={30}
                  width={30}
                />
                <div className="text-white mt-2">MacOS</div>
              </div>

              <div className="rounded-md text-center flex flex-col items-center justify-center hover:shadow hover:shadow-gray-500  p-3">
                <Image
                  src="/img/window.png"
                  alt="apple"
                  height={30}
                  width={30}
                />
                <div className="text-white mt-2">Window</div>
              </div>
              <div className="rounded-md text-center flex flex-col items-center justify-center hover:shadow hover:shadow-gray-500  px-5 py-3">
                <Image
                  src="/img/linux.png"
                  alt="apple"
                  height={30}
                  width={30}
                />
                <div className="text-white mt-2">Linux</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* faq */}
      <BasicExample />
      <div className="bg-gray-700 text-center py-12">
        <h1 className="text-3xl md:text-4xl font-semibold text-white">
          Start earning today
        </h1>
        <div className="mt-6">
          <Button className="bg-yellow-500 hover:bg-gray-700">
            Sign Up Now
          </Button>
        </div>
      </div>
    </>
  );
}
