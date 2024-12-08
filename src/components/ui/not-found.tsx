import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { Image } from '@/components/ui/image';

// import service from '@/assets/placeholders/tabs/exclamation.svg';
import category from '@/assets/placeholders/NoCategories.svg';
import store from '@/assets/placeholders/NoStores.svg';
import Items from '@/assets/placeholders/NoItems.svg';
import cart from '@/assets/placeholders/emptycart.svg';
import service from '@/assets/placeholders/service.svg';
import sechdule from '@/assets/placeholders/sechdule.svg';
import reservation from '@/assets/placeholders/reservations.svg';
import event from '@/assets/placeholders/event.svg';
import plan from '@/assets/placeholders/No plans.svg';
import gallery from '@/assets/placeholders/NoItems.svg';
import review from '@/assets/placeholders/No reviews.svg';
import coupon from '@/assets/placeholders/No coupon.svg';
import deals from '@/assets/placeholders/No deals and promi.svg';
import discount from '@/assets/placeholders/No discoungt.svg';
import subscription from '@/assets/placeholders/No subscription.svg';
import search from '@/assets/placeholders/no search-47.svg';
import order from '@/assets/placeholders/No order.svg';
import transaction from '@/assets/placeholders/No transaction.svg';
import favorite from '@/assets/placeholders/item fav.svg';
import Nofavorite from '@/assets/placeholders/item fav.svg';

import { useState, useEffect } from 'react';

interface Props {
  text?: string;
  className?: string;
  type: string;
  // backgroundColor?: string;
}

const NotFound: React.FC<Props> = ({
  // backgroundColor,
  className,
  text,
  type,
}) => {
  const [backgroundColor, setBackgroundColor] = useState('');
  const fillColor = '#FF5400'; // Replace with the desired fill color

  function rgbToHex(rgb) {
    const [r, g, b] = rgb.split(',').map(Number);
    const toHex = (c) => {
      const hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    };
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }

  useEffect(() => {
    // Get the value of --color-accent from the computed styles
    const colorAccent =
      localStorage.getItem('Color') ||
      getComputedStyle(document.documentElement)
        .getPropertyValue('--color-accent')
        .trim();
    console.log(colorAccent);
    const hexColor = rgbToHex(colorAccent);

    setBackgroundColor(hexColor);
  }, []);

  const errorMessage =
    type === 'search'
      ? 'text-no-search-results-found'
      : type === 'cart'
      ? 'text-your-cart-is-empty'
      : type === 'Reservation'
      ? 'text-sorry-store-is-not-taking-reservation-right-now'
      : type
      ? `text-sorry-no-${type}-found`
      : 'text-sorry-no-product-found';
  const { t } = useTranslation('common');
  //  const type = type.charAt(0).toUpperCase() + type.slice(1);
  return (
    <div className={cn('flex flex-col items-center', className)}>
      <div className="flex h-fit w-fit items-center justify-center">
        {type === 'review' || type === 'reviews' ? (
          <>
            <Image
              src={review}
              style={{ width: '300px', height: '300px' }}
              alt={text ? t(text) : t('text-no-result-found')}
              className="h-full w-full object-contain"
              backgroundColor={backgroundColor}
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              width="200"
              height="200"
              fill={backgroundColor}
              viewBox="0 0 21 18"
            >
              <path
                d="M14.553 17.903a.458.458 0 01-.458.458h-.7a.458.458 0 010-.916h.7a.458.458 0 01.457.458zm5.75-.732a4.078 4.078 0 01-1.48.274H15.68a.458.458 0 000 .916h3.142a4.994 4.994 0 001.81-.336.458.458 0 00-.33-.855zm1.724-13.474v9.628a3.208 3.208 0 01-3.204 3.205h-9.85l-3.886 3.264a.458.458 0 01-.752-.35V16.53H3.232a3.208 3.208 0 01-3.205-3.205V3.697A3.208 3.208 0 013.232.492h15.59a3.208 3.208 0 013.205 3.205zm-.915 0a2.291 2.291 0 00-2.29-2.29H3.233a2.292 2.292 0 00-2.289 2.29v9.628a2.292 2.292 0 002.29 2.29h1.56a.458.458 0 01.457.457v2.39l3.262-2.74a.458.458 0 01.294-.108h10.017a2.292 2.292 0 002.289-2.289V3.697zM9.69 7.533l-.114.71a.563.563 0 00.81.59l.641-.33.641.33a.563.563 0 00.813-.59l-.115-.71.51-.507a.562.562 0 00-.31-.955l-.71-.11-.325-.641a.563.563 0 00-1.004 0l-.325.64-.71.111a.562.562 0 00-.31.955l.508.507zm8.139-1.461l-.713-.11-.324-.641a.562.562 0 00-1.004 0l-.324.64-.71.111a.562.562 0 00-.31.955l.509.506-.115.71a.564.564 0 00.813.59l.641-.328.641.328a.563.563 0 00.812-.59l-.114-.71.51-.506a.563.563 0 00-.312-.955zM4.426 7.533l-.115.71a.563.563 0 00.81.59l.641-.328.641.328a.563.563 0 00.813-.59l-.115-.71.51-.506a.562.562 0 00-.31-.955l-.71-.11-.325-.641a.562.562 0 00-1.004 0l-.325.64-.71.111a.563.563 0 00-.31.955l.509.506zm-.45 3.461h5.619a.458.458 0 100-.915H3.977a.458.458 0 100 .915zm10.195.725H3.977a.458.458 0 100 .916h10.196a.458.458 0 100-.916h-.002z"
                fill={backgroundColor}
                transform="matrix(.9 0 0 .9 .15 0)"
              />
            </svg> */}
          </>
        ) : type == 'gallery' ? (
          <Image
            src={gallery}
            style={{ width: '300px', height: '300px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : // <svg
        //   xmlns="http://www.w3.org/2000/svg"
        //   width="80%"
        //   height="50%"
        //   viewBox="0 0 550 550"
        //   // {...props}
        // >
        //   <g fill={backgroundColor}>
        //     <path
        //       d="M4705 4806C4664 4787 324 443 310 407c-13-35 7-78 45-95 20-10 32-9 58 2 18 8 189 171 382 365l350 351h1623c1800 0 1701-4 1819 66 118 69 203 196 223 330 13 93 13 2174 0 2269-13 93-58 182-131 259-93 100-193 136-378 136h-96l297 298c163 163 302 310 307 325 14 36-6 78-44 95-14 7-27 12-28 12-1-1-15-7-32-14zm-257-891c78-23 142-80 178-156l29-64V1425l-22-47c-30-66-95-132-156-159l-52-24-1560-3-1560-2 485 485c267 267 487 485 490 485s27-58 54-128c61-159 77-186 132-218 54-32 122-36 177-9 24 11 180 162 416 402 339 344 381 383 398 372 10-6 151-167 313-356 382-446 360-423 399-423 21 0 41 9 56 25 52 51 53 50-316 479-187 218-352 404-366 413-41 27-132 29-180 5-24-13-184-168-415-401-206-210-380-381-385-381-18 0-28 21-93 188l-64 163 820 820 819 819h176c128 0 189-4 227-15zM670 4079c-25-5-77-25-117-44-129-64-221-193-243-340-13-95-13-2175 0-2270 17-112 99-252 162-274 37-13 74 3 94 40 17 33 6 70-31 109-13 14-34 48-47 75l-23 50v2270l26 56c31 66 83 119 147 151l47 23 1318 5 1319 5 19 24c32 39 18 99-28 120-29 13-2573 14-2643 0z"
        //       transform="matrix(.1 0 0 -.1 0 512)"
        //     />
        //     <path
        //       d="M1346 3354c-100-32-186-152-186-260 0-101 72-209 167-250 49-21 156-22 205-1 56 24 123 91 148 149 27 62 25 161-5 222-57 118-203 180-329 140zm167-184c40-44 38-107-4-149-70-71-189-24-189 74 0 101 125 150 193 75z"
        //       transform="matrix(.1 0 0 -.1 0 512)"
        //     />
        //   </g>
        // </svg>
        type === 'service' ? (
          <Image
            src={service}
            style={{ width: '300px', height: '300px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'collection' ? (
          <Image
            src={favorite}
            style={{ width: '300px', height: '300px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'Favorite' ? (
          <Image
            src={favorite}
            style={{ width: '300px', height: '300px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'search' || type === 'listings' ? (
          <Image
            src={search}
            style={{ width: '150px', height: '150px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'transaction' ? (
          <Image
            src={transaction}
            style={{ width: '150px', height: '150px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'Reservation' || type === 'reservation' ? (
          <Image
            src={reservation}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'plans' ? (
          <Image
            src={plan}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'coupon' ? (
          <Image
            src={coupon}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'event' || type === 'events' ? (
          <Image
            src={event}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'category' ? (
          <Image
            src={category}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'orders' ? (
          <Image
            src={order}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'deals' ? (
          <Image
            src={deals}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'discount' ? (
          <Image
            src={discount}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'subscription' ? (
          <Image
            src={subscription}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'cart' ? (
          <Image
            src={cart}
            style={{ width: '250px', height: '250px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'store' ? (
          <Image
            src={store}
            style={{ width: '350px', height: '350px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'sechdule' ? (
          <Image
            src={sechdule}
            style={{ width: '350px', height: '350px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'item' ? (
          <Image
            src={Items}
            style={{ width: '350px', height: '350px' }}
            alt={text ? t(text) : t('text-no-result-found')}
            className="h-full w-full object-contain"
            backgroundColor={backgroundColor}
          />
        ) : type === 'calendar' ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // fill="green"
            width="80%"
            height="50%"
            viewBox="0 0 550 550"
          >
            <g fill={backgroundColor}>
              <path
                d="M740 4789c-105-47-160-137-160-261v-76l-167-4c-151-3-173-6-214-26-75-37-125-87-161-160l-33-67V555l28-57c35-71 110-140 183-167 54-21 68-21 1388-21 1257 0 1334 1 1349 18 29 32 31 67 4 98l-25 29-1334 5-1335 5-37 29c-21 16-47 47-57 70-18 39-19 96-19 1479v1437h4820V2043c0-1383-1-1440-19-1479-10-23-36-54-57-70l-37-29-813-5c-781-5-813-6-833-24-27-25-28-79-1-106 20-20 33-20 830-20 792 0 810 0 864 21 73 27 148 96 183 167l28 57v3640l-33 67c-36 73-86 123-161 160-41 20-63 23-213 26l-168 4v76c-1 166-110 282-265 282-156 0-264-116-265-282v-78h-290v68c0 87-21 149-70 205-55 62-124 90-209 85-77-5-125-25-174-75-55-54-71-96-75-195l-4-88H1930v71c0 105-15 145-80 209-61 62-105 80-191 80-105 0-209-76-243-178-9-25-16-76-16-114v-68h-290v78c0 60-5 88-24 127-46 97-135 155-241 155-39 0-76-8-105-21zm182-158l33-29 3-226c3-189 1-230-13-255-40-79-160-79-200 0-14 25-16 66-13 255l3 226 33 29c25 23 42 29 77 29s52-6 77-29zm824-5l34-34v-221c0-244-5-267-60-296-37-19-64-19-104 0-61 29-66 49-66 285 0 226 5 251 52 284 12 9 42 16 66 16 37 0 50-6 78-34zm1772 18c47-33 52-59 52-279 0-233-6-262-65-289-41-20-68-20-105-1-55 29-60 52-60 296v221l34 34c28 28 41 34 78 34 24 0 54-7 66-16zm834-13l33-29 3-226c3-189 1-230-13-255-40-79-160-79-200 0-14 25-16 66-13 255l3 226 33 29c25 23 42 29 77 29s52-6 77-29zM580 4217c0-111 20-168 80-228 49-49 119-79 185-79s136 30 185 79c60 60 80 117 80 228v83h290v-76c0-97 13-148 54-204 89-122 269-143 385-43 67 57 91 118 91 231v92h1260v-92c0-113 24-174 91-231 118-101 301-79 386 47 42 61 53 103 53 199v77h290v-83c0-111 20-168 80-228 49-49 119-79 185-79s136 30 185 79c60 60 80 117 80 228v84l153-3c147-3 155-4 194-30 24-16 49-44 62-70 20-42 21-60 21-306v-262H149l3 273 3 274 27 40c45 69 89 83 256 83h142v-83z"
                transform="matrix(.1 0 0 -.1 0 512)"
              />
              <path
                d="M2217 3979c-46-27-41-105 9-128 17-7 126-11 334-11s317 4 334 11c51 23 55 103 7 128-27 15-659 14-684 0zM515 3087c-53-21-83-48-105-91-20-42-20-55-20-1020 0-960 0-977 20-1016 11-22 39-52 62-67l42-28h1862l41 27c24 16 49 44 62 70 21 44 21 46 21 1016 0 797-2 979-14 1005-17 41-66 88-108 104-24 8-177 12-541 12l-508 1-24-25c-32-31-32-69 0-100l24-25h499c374 0 501-3 510-12 17-17 17-1899 0-1916s-1769-17-1786 0-17 1899 0 1916c9 9 77 12 245 12h234l24 25c14 13 25 36 25 50s-11 37-25 50l-24 25-243-1c-161 0-253-5-273-12zM2825 3015c-94-50-114-100-115-276 0-244 43-297 250-307 176-8 261 24 301 112 15 34 19 66 19 190 0 175-13 218-83 264-39 26-47 27-191 30-123 2-157 0-181-13zm293-147c8-8 12-54 12-140v-128l-26-10c-42-16-196-12-222 6-21 14-22 22-22 138 0 81 4 126 12 134 17 17 229 17 246 0zM3564 3011c-90-41-119-122-112-315 5-135 14-163 73-214 48-43 69-47 225-47 147 1 170 7 222 62 42 44 48 74 48 239 0 132-3 160-19 192-43 84-89 102-263 102-108 0-141-4-174-19zm304-271c3-165 7-160-130-160-135 0-138 3-138 151 0 61 5 119 11 130 9 18 19 19 132 17l122-3 3-135zM4321 3019c-44-18-82-51-102-91-18-36-20-55-17-208l3-168 31-39c53-67 89-78 249-78 133 0 142 1 185 27 28 16 55 43 70 70 23 39 25 56 28 179 4 150-5 202-45 249-50 60-86 70-240 69-76 0-149-5-162-10zm289-158c5-11 10-71 10-135 0-144-2-146-138-146s-132-5-132 148c0 86 4 132 12 140s50 12 125 12c101 0 113-2 123-19z"
                transform="matrix(.1 0 0 -.1 0 512)"
              />
              <path
                d="M821 2672c-14-11-23-29-23-51-1-30 21-55 280-314l282-282-282-282c-249-249-281-285-281-313 0-41 32-73 73-73 28 0 64 32 313 281l282 282 282-282c259-259 284-281 314-280 41 1 69 32 69 75 0 27-34 65-280 312l-280 280 280 280c252 252 280 283 280 312 0 43-30 73-73 73-29 0-60-28-312-280l-280-280-280 280c-247 246-285 280-312 280-17 0-41-8-52-18zM2799 2242c-71-46-83-80-87-251-4-168 6-209 68-265 49-44 74-48 242-44 127 3 137 5 175 30 70 46 83 89 83 264 0 172-12 212-76 260-37 29-38 29-198 32l-161 3-46-29zm329-256c2-86-1-133-9-142-15-18-229-20-247-2-17 17-17 249 0 266 9 9 48 12 133 10l120-3 3-129zM3565 2258c-33-18-76-61-92-93-11-20-18-68-21-150-7-194 18-269 109-315 33-17 59-20 176-20 160 0 201 13 249 76 29 37 29 39 32 193 2 85 1 170-3 188-7 41-59 102-102 119-41 17-318 19-348 2zm300-283v-140l-120-3c-104-2-121 0-132 15-16 21-18 225-2 254 9 18 19 19 132 17l122-3v-140zM4301 2252c-19-9-48-34-65-55l-31-39-3-168c-3-153-1-172 17-208 44-87 95-105 288-100 141 3 141 3 180 34 72 59 78 78 78 259 0 152-1 162-25 203-14 26-42 54-66 68-38 22-50 24-190 24-122 0-155-3-183-18zm307-144c15-15 16-231 2-259-10-17-22-19-123-19-75 0-117 4-125 12-13 13-18 259-5 271 12 13 238 8 251-5zM2825 1506c-16-8-42-26-57-42-49-52-58-91-58-242 0-127 2-142 25-188 16-32 39-59 67-77 41-26 46-27 190-27 126 0 154 3 186 19 86 44 102 88 102 276s-16 232-102 276c-32 16-59 19-180 19-97-1-153-5-173-14zm293-148c13-13 18-232 6-262-5-13-26-16-123-16-78 0-121 4-129 12-17 17-17 249 0 266 8 8 50 12 123 12s115-4 123-12zM3565 1504c-40-20-73-52-93-89-14-24-17-60-17-190 0-178 5-197 69-253 46-40 73-44 243-40 140 3 141 3 180 34 68 55 74 76 71 270-3 170-3 171-31 207-50 66-86 77-249 77-110 0-150-4-173-16zm300-279v-140l-120-3c-104-2-121 0-132 15-16 21-18 225-2 254 9 18 19 19 132 17l122-3v-140zM4305 1503c-91-48-105-85-105-278 0-177 10-211 77-262 35-27 40-28 182-31 86-2 161 1 182 7 46 14 104 77 118 128 14 49 14 267 0 316-13 47-63 106-106 123-49 21-308 18-348-3zm303-145c18-18 16-252-2-267-9-8-54-11-132-9l-119 3-3 129c-1 72 0 136 2 143 7 18 236 19 254 1z"
                transform="matrix(.1 0 0 -.1 0 512)"
              />
            </g>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            width="500px"
            height="250px"
            viewBox="30 30 250 350"
            // style={{
            //   display: "block",
            //   marginLeft: "30%",
            // }}
          >
            <circle cx={138.75} cy={148.75} r={87.75} />
            <circle cx={56.5} cy={89.5} r={5.5} fill={backgroundColor} />
            <circle cx={201.25} cy={53.75} r={10.25} fill={backgroundColor} />
            <circle cx={58.25} cy={205.25} r={9.75} fill={backgroundColor} />
            <circle cx={232.75} cy={195.75} r={9.75} fill={backgroundColor} />
            <circle cx={213.75} cy={206.75} r={4.75} fill={backgroundColor} />
            <path
              d="M237.329 165.664l1.532 7.234 7.13 1.553-7.13 1.553-1.532 7.234-1.531-7.234-7.13-1.553 7.13-1.553 1.531-7.234zM228.172 91.811c.112-.529.867-.529.979 0l.975 4.606c.04.193.19.344.382.385l4.572.996c.525.115.525.863 0 .978l-4.572.996a.498.498 0 00-.382.385l-.975 4.606c-.112.529-.867.529-.979 0l-.975-4.606a.498.498 0 00-.382-.385l-4.572-.996c-.525-.115-.525-.863 0-.977l4.572-.997a.498.498 0 00.382-.385l.975-4.606zM46.611 152.311c.112-.529.867-.529.979 0l1.671 7.896a.5.5 0 00.383.385l7.815 1.703c.524.114.524.862 0 .977l-7.815 1.702a.5.5 0 00-.383.385l-1.671 7.896c-.112.529-.867.529-.979 0l-1.671-7.896a.5.5 0 00-.383-.385l-7.814-1.702c-.525-.115-.525-.863 0-.977l7.814-1.703a.5.5 0 00.383-.385l1.672-7.896zM77.763 68.269c-.29-.062-.29-.476 0-.538l4.382-.931a.275.275 0 00.212-.21l.943-4.353c.063-.288.474-.288.537 0l.944 4.352a.275.275 0 00.21.21l4.384.932c.29.062.29.476 0 .538l-4.383.931a.275.275 0 00-.211.21l-.944 4.353c-.063.288-.474.288-.537 0l-.943-4.352a.275.275 0 00-.212-.21l-4.382-.932z"
              fill={backgroundColor}
            />
            <circle
              cx={157}
              cy={116.5}
              r={55.5}
              fill={backgroundColor}
              stroke={backgroundColor}
              strokeWidth={2}
            />
            <circle
              cx={157}
              cy={116.5}
              r={46.5}
              fill="#efefef"
              stroke={backgroundColor}
              strokeWidth={2}
            />
            <path
              d="M84.621 219.312l29.996-41.661 1.333-1 3-.667h4.333l2.333 1.667 2.333 1 2 2.333 1.666 3.666-25.997 48.994-2.999 1.666h-3.666l-5-1.666-4-1.667-3.665-4.999-1.667-2v-5.666z"
              fill={backgroundColor}
            />
            <path
              d="M137.282 168.656l-7.604 12.332M128.344 164.656l-7.332 10.999M116.618 175.984l-32.329 44.328M131.283 183.983l-25.997 50.327M115.951 176.653l.549-.305a6.59 6.59 0 013.944-.79v0a6.607 6.607 0 011.628.4l.939.362.317.106a11.975 11.975 0 014.683 2.894v0l1.034 1.034c.42.42.787.89 1.093 1.4v0c.357.596.628 1.241.803 1.914l.342 1.318M105.952 233.645l-1.42.639a11.525 11.525 0 01-4.365 1.008v0c-1.17.037-2.34-.105-3.468-.421l-.956-.267-.32-.109a19.906 19.906 0 01-7.55-4.645v0l-1.235-1.211a8.438 8.438 0 01-2.109-3.398v0a8.438 8.438 0 01-.096-4.936l.188-.658"
              stroke={backgroundColor}
              strokeWidth={2}
            />
          </svg>
        )}
      </div>
      {text && (
        <h3 className="mt-2 w-full text-center text-xl font-semibold text-body">
          {t(errorMessage)}
        </h3>
      )}
    </div>
  );
};

export default NotFound;
