import { useRef, useState, useEffect } from 'react';
import { Image } from '@/components/ui/image';
import cn from 'classnames';
import CopyToClipboard from 'react-copy-to-clipboard';
import { useTranslation } from 'next-i18next';
import { couponPlaceholder } from '@/lib/placeholders';

type CouponCardProps = {
  coupon?: any;
  className?: string;
};

const CouponCard: React.FC<CouponCardProps> = ({ coupon, className }) => {
  const { t } = useTranslation('common');
  const { code, image, is_valid } = coupon;
  const [symbol, setSymbol] = useState('');
  const [copyText, setCopyText] = useState({
    value: code,
    copied: false,
  });

  console.log(coupon, 'couponDATA');

  useEffect(() => {
    try {
      const currency = JSON.parse(window?.localStorage?.getItem('currency'));
      if (currency) {
        setSymbol(currency);
      } else {
        setSymbol('$');
      }
    } catch (error) {
      console.error('Error parsing currency from localStorage:', error);
    }
  }, []);

  useEffect(() => {
    let timeout: any;
    if (copyText.copied) {
      timeout = setTimeout(() => {
        setCopyText((prev) => ({
          ...prev,
          copied: false,
        }));
      }, 3500);
    }
    return () => clearTimeout(timeout);
  }, [copyText.copied]);

  return (
    <CopyToClipboard
      text={copyText.value}
      onCopy={() =>
        setCopyText((prev) => ({
          ...prev,
          copied: true,
        }))
      }
    >
      <div className="container mx-auto cursor-pointer">
        <div className="g relative rounded-lg bg-accent py-5 px-5 text-center text-white shadow-md">
          <h3 className="mb-2 text-xl font-semibold">{coupon?.title}</h3>
          <p className="text-md mb-2 font-semibold">
            {coupon?.discount}
            {coupon?.discount_type == 'percent' ? '%' : ' ' + symbol}
          </p>
          <div className="mb-4 flex items-center justify-center">
            <span
              id="cpnCode"
              className="rounded-l border border-dashed px-4 py-2 text-white"
            >
              {!copyText.copied ? coupon?.code : t('text-copied')}
            </span>
          </div>
          <p className="text-sm">Valid Till:{coupon?.expire_date}</p>
          <p className="text-sm">
            Type:
            {`${
              coupon?.coupon_type == 'store_wise'
                ? 'Store Wise'
                : coupon?.coupon_typ
            }(${coupon?.data})`}
          </p>
          <p className="text-sm">
            Minimum Purchase:{symbol} {coupon?.min_purchase}
          </p>
          <p className="text-sm">
            Maximum Dsicount:{symbol}
            {coupon?.discount}
          </p>

          <div className="absolute top-1/2 left-0 -ml-6 h-12 w-12 -translate-y-1/2 transform rounded-full bg-gray-100" />
          <div className="absolute top-1/2 right-0 -mr-6 h-12 w-12 -translate-y-1/2 transform rounded-full bg-gray-100" />
        </div>
      </div>
    </CopyToClipboard>
    // <div className={cn('coupon-card', className)}>
    //   <div className="relative flex overflow-hidden rounded bg-gray-200">
    //     <Image
    //       src={image?.thumbnail ?? couponPlaceholder}
    //       alt={code}
    //       width="572"
    //       height="429"
    //     />
    //   </div>
    //   <div className="rounded-be mx-auto grid w-11/12 auto-cols-fr grid-flow-col items-center rounded-bl bg-light px-5 py-4 shadow-sm">
    //     {is_valid ? (
    //       <>
    //         <span className="font-semibold uppercase text-heading focus:outline-none">
    //           {copyText.value}
    //         </span>

    //         {!copyText.copied && (
    //           <CopyToClipboard
    //             text={copyText.value}
    //             onCopy={() =>
    //               setCopyText((prev) => ({
    //                 ...prev,
    //                 copied: true,
    //               }))
    //             }
    //           >
    //             <button className="text-sm font-semibold text-accent transition-colors duration-200 hover:text-accent-hover focus:text-accent-hover focus:outline-0 ltr:text-right rtl:text-left">
    //               <span>{t('text-copy')}</span>
    //             </button>
    //           </CopyToClipboard>
    //         )}

    //         {copyText.copied && (
    //           <div className="text-sm font-semibold text-accent ltr:text-right rtl:text-left">
    //             {t('text-copied')}
    //           </div>
    //         )}
    //       </>
    //     ) : (
    //       <span className="block text-center text-sm text-red-500">
    //         {t('text-expired')}
    //       </span>
    //     )}
    //   </div>
    // </div>
  );
};

export default CouponCard;
