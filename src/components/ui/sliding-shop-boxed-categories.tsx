import React, { useRef } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useIsRTL } from '@/lib/locals';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { productPlaceholder } from '@/lib/placeholders';
import { Image } from '@/components/ui/image';
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';


interface CategoryItemProps {
  item: any;
  background_color:any;
  isSelected:any;
  variables:any;
  // variables?.category_id
}

const CategoryItem: React.FC<CategoryItemProps> = ({ item, isSelected ,background_color}) => {
  const { pathname, query } = useRouter();
  const router = useRouter();

  const onCategoryClick = (slug: string,name:string) => {
    if (slug === '-1') {
      document.cookie = 'category=-1; path=/;';

      const { category, ...rest } = query;
      router.push(
        {
          pathname,
          query: { ...rest },
        },
        undefined,
        {
          scroll: false,
        }
      );
    } else {
      const { category, ...rest } = query;
      document.cookie = `category=${slug};categoryName=${name}; path=/;`;
      router.push(
        {
          pathname,
          query: { ...rest },
        },
        undefined,
        {
          scroll: false,
        }
      );
    }
  };

  return (
    <div
      className={cn(
        'relative cursor-pointer overflow-hidden ',
      )}
      data-baseweb="tab-list"
      role="tablist"
      aria-orientation="horizontal"
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center', // Center align
        alignItems: 'center',
      }}
      onClick={() => onCategoryClick(item?.id,item?.name)}
    >
      <button
        className={`pt-4 block  w-fit text-sm ${isSelected ? 'rounded-full pt-4 pb-4 border-b-2 backgroundcolor  text-sm' : ''}`}
        style={{
          backgroundColor: isSelected ? `${background_color}40` : '', // 50% opacity background color
          padding:item?.slug=='All'&& isSelected?'10px':isSelected&&'8px',
          marginTop:item?.slug=='All'&& isSelected?'5px':isSelected&&'8px',
          color:isSelected && background_color
          // textAlign: 'center', // Center text
          // minWidth: '100px', // Set a minimum width if needed
          // Add other styles as needed
        }}
      >
        {item.name}
      </button>
    </div>
  );
  
};


function SolidBoxedShopCategoryMenu({ itemss ,background_color,variables}: any) {
  // console.log(itemss)
  const { t } = useTranslation('common');
  const { isRTL } = useIsRTL();
  // const prevRef = useRef<HTMLDivElement>(null);
  // const nextRef = useRef<HTMLDivElement>(null);
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const [items, setItems] = useState([]);
  const { query } = useRouter();
 const cookieSelected =  Cookies.get('category');
// console.log(cookieSelected);
  const selectedCategory = cookieSelected?.toString() || '0';



  const breakpoints = {
    320: {
      slidesPerView: 2,
    },

    440: {
      slidesPerView: 3,
    },

    620: {
      slidesPerView: 4,
    },

    820: {
      slidesPerView: 5,
    },

    1100: {
      slidesPerView: 5,
    },

    1280: {
      slidesPerView: 6,
    },

    1360: {
      slidesPerView: 6,
    },
  };

  const calculateTextWidth = (text) => {
    const minWidth = 40; // Minimum width for each slide
    const div = document.createElement('div');
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    div.style.whiteSpace = 'nowrap';
    div.innerText = text;
    document.body.appendChild(div);
    const width = Math.max(div.clientWidth, minWidth);
    document.body.removeChild(div);
    return width;
  };

  return (
    <>
      <div
        className="relative"
        style={{ backgroundColor: 'white', height: '50px' }}
      >
        <Swiper
          id="category-card-menu"
          modules={[Navigation]}
          navigation={{
            prevEl: prevRef.current!, // Assert non-null
            nextEl: nextRef.current!, // Assert non-null
            disabledClass: 'swiper-button-disabled',
            hiddenClass: 'swiper-button-hidden',
          }}
          slidesPerView={'auto'}
          spaceBetween={1}
          loop={false}
        >
          {itemss?.map((category: any, idx: number) => (
            <SwiperSlide
              key={idx}
              style={{ width: calculateTextWidth(category.name) +6+'px' }}
            >
              <>
           
              <CategoryItem
                item={category}
                isSelected={selectedCategory === category?.id?.toString()}
                background_color={background_color}
              />
              </>
             
            </SwiperSlide>
          ))}
        </Swiper>

        <div
          ref={prevRef}
          className="category-slider-prev absolute top-1/2 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none focus:outline-none ltr:-left-3 rtl:-right-3 ltr:lg:-left-4 rtl:lg:-right-4"
        >
          <span className="sr-only">{t('text-previous')}</span>
          {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
        </div>

        <div
          ref={nextRef}
          className="category-slider-next absolute top-1/2 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none focus:outline-none ltr:-right-3 rtl:-left-3 ltr:lg:-right-0 rtl:lg:-left-4"
      
          style={{ zIndex: 1 }} // Set a higher z-index value
      >
          <span className="sr-only">{t('text-next')}</span>
          {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
        </div>

        {/* <div
          ref={prevRef}
          className="category-slider-prev absolute top-1/2 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none focus:outline-none ltr:-left-3 rtl:-right-3 ltr:lg:-left-4"
        >
          <span className="sr-only">{t('text-previous')}</span>
          {isRTL ? <ArrowNextIcon /> : <ArrowPrevIcon />}
        </div>
        <div
          ref={nextRef}
          className="category-slider-next absolute top-1/2 z-10 -mt-4 flex h-8 w-8 cursor-pointer items-center justify-center rounded-full bg-light text-heading shadow-300 outline-none focus:outline-none ltr:-right-3 rtl:-left-3 ltr:lg:-right-4 rtl:lg:-left-4"
        >
          <span className="sr-only">{t('text-next')}</span>
          {isRTL ? <ArrowPrevIcon /> : <ArrowNextIcon />}
        </div> */}
      </div>
    </>
  );
}


export default SolidBoxedShopCategoryMenu;

{
  /* <Swiper
        id="category-card-menu"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current!, // Assert non-null
          nextEl: nextRef.current!, // Assert non-null
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
        }}
        // breakpoints={breakpoints}
        slidesPerView={0}
        spaceBetween={0} */
}
