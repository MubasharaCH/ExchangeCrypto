import Accordion from 'react-bootstrap/Accordion';
import { useTranslation } from 'next-i18next';
// import CustomAccordion from "./CustomAccordion";
import { useRouter } from 'next/router';
import CustomAccordion from './Accordion';

function BasicExample() {
  const router = useRouter();

  const { t } = useTranslation('common');
  const main = {
    backgroundColor: 'rgba(221, 144, 147, 1)',
    marginTop: '-2px',
  };
  return (
    <>
      <div className="bg-gray-900">
        <div className="container-fluid p-5" style={{ position: 'relative' }}>
          <div className="">
            <div className="">
              <div className="">
                <h2 className="mt-1 text-center text-4xl text-white">
                  {t('Frequently Asked Questions')}
                </h2>
              </div>
            </div>
            <div className=" items-center">
              <div className="container">
                <div className="">
                  <div className="ms-auto me-auto">
                    <div className="myaccount-wrapper mt-10 px-6 text-xl text-white">
                      <CustomAccordion
                        title={'What is a cryptocurrency exchange?'}
                        content={
                          <>
                            <p className="text-sm">
                              {
                                'Cryptocurrency exchanges are digital marketplaces that enable users to buy and sell cryptocurrencies like Bitcoin, Ethereum, and Tether. The Binance exchange is the largest crypto exchange by trade volume.'
                              }
                            </p>
                          </>
                        }
                        //color={""}
                      />
                      <CustomAccordion
                        title={'What products does Binance provide?'}
                        content={
                          <>
                            <p className="text-sm">
                              Binance is the world's leading cryptocurrency
                              exchange, catering to 235 million registered users
                              in over 180 countries. With low fees and over 350
                              cryptocurrencies to trade, Binance is the
                              preferred exchange to trade Bitcoin, Altcoins, and
                              other virtual assets.
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
