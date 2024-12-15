// import CustomAccordion from "./CustomAccordion";

import CustomAccordion from "./Accordion";

function BasicExample() {
  return (
    <>
      <div className="bg-gray-900">
        <div className="container-fluid p-5" style={{ position: "relative" }}>
          <div className="">
            <div className="">
              <div className="">
                <h2 className="mt-1 text-center text-4xl text-white">
                  {"Frequently Asked Questions"}
                </h2>
              </div>
            </div>
            <div className=" items-center">
              <div className="container">
                <div className="">
                  <div className="ms-auto me-auto">
                    <div className="myaccount-wrapper mt-10 px-6 text-xl text-white">
                      <CustomAccordion
                        title={"What is a cryptocurrency exchange?"}
                        content={
                          <>
                            <p className="text-sm text-gray-500">
                              {
                                "Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume."
                              }
                            </p>
                          </>
                        }
                        //color={""}
                      />
                      <CustomAccordion
                        title={"What products does Binance provide?"}
                        content={
                          <>
                            <p className="text-sm text-gray-500">
                              {`Binance is the world's leading cryptocurrency
                              exchange, catering to 235 million registered users
                              in over 180 countries. With low fees and over 350
                              cryptocurrencies to trade, Binance is the
                              preferred exchange to trade Bitcoin, Altcoins, and
                              other virtual assets.`}
                            </p>
                          </>
                        }
                      />
                      <CustomAccordion
                        title={
                          "How to buy Bitcoin and other cryptocurrencies on Binance?"
                        }
                        content={
                          <>
                            <p className="text-sm text-gray-500">
                              {` There are several ways to buy cryptocurrencies on
                              Binance. You can use a credit/debit card, cash
                              balance, or Apple Pay/Google Pay to purchase
                              crypto on Binance. Before getting started, please
                              make sure you’ve completed Identity Verification
                              for your Binance account.`}
                            </p>
                          </>
                        }
                      />
                      <CustomAccordion
                        title={"How to trade cryptocurrencies on Binance"}
                        content={
                          <>
                            <p className="text-sm text-gray-500">
                              {`  You can trade hundreds of cryptocurrencies on
                              Binance via the Spot, Margin, Futures, and Options
                              markets. To begin trading, users need to register
                              an account, complete identity verification,
                              buy/deposit crypto, and start trading.`}
                            </p>
                          </>
                        }
                      />
                      <CustomAccordion
                        title={"How to earn from crypto on Binance"}
                        content={
                          <>
                            <p className="text-sm text-gray-500">
                              {` Users can earn rewards on more than 180+
                              cryptocurrencies by using one of the products
                              offered on Binance Earn. Our platform offers
                              dozens of digital assets like Bitcoin, Ethereum,
                              and stablecoins.`}
                            </p>
                          </>
                        }
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BasicExample;
