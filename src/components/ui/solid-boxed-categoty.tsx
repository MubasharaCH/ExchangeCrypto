import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useIsRTL } from '@/lib/locals';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { productPlaceholder } from '@/lib/placeholders';
import { Image } from '@/components/ui/image';
import Cookies from 'js-cookie';
import { useSelector } from 'react-redux';
interface CategoryItemProps {
  item: any;
  lat: string;
  long: string;
  configData: any;
}
export const CategoryItem: React.FC<CategoryItemProps> = ({
  item,
  lat,
  long,
  configData,
}) => {
  const router = useRouter();

  const { pathname, query } = router;
  const selectedQueries = query.category;

  const onCategoryClick = (
    module_id: any,
    category_id: any,
    slug: string,
    color: string,
    module_name: any
  ) => {
    if (selectedQueries === slug) {
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
      return;
    }
    const zoneId = localStorage.getItem('zoneid');

    Cookies.set('moduleid', module_id);
    Cookies.set('zoneid', zoneId);
    let obj = {
      limit: 10,
    };
    Cookies.set('category', JSON.stringify(obj));
    router.push(
      {
        pathname: `/category/${slug}`, // Specify the pathname of the new route
      },
      undefined,
      {
        scroll: false,
      }
    );
  };
  console.log(item.slug, 'daattaaaa');
  return (
    <div
      className={cn(
        'relative cursor-pointer overflow-hidden rounded-2xl border-2 bg-light text-center ',
        selectedQueries === item.slug ? 'border-accent' : 'border-light'
      )}
      role="button"
      onClick={() =>
        onCategoryClick(
          item?.module_id,
          item?.slug,
          item?.slug!,
          item?.color,
          item?.module_name
        )
      }
    >
      <div className="flex flex-col items-center justify-center pl-1 text-center">
        <div className="h-18 w-18 relative my-2 mb-3 flex  items-center justify-center  overflow-hidden rounded-full bg-gray-50 p-6">
          <Image
            src={
              !item?.image
                ? productPlaceholder
                : configData?.base_urls?.category_image_url
                ? configData.base_urls.category_image_url + '/' + item?.image
                : productPlaceholder
            }
            alt={item?.name!}
            width={70}
            height={70}
            className="object-contain"
          />
        </div>
        <div className="items  center block justify-center pb-4 text-center text-xs font-semibold text-heading">
          {item.name}
        </div>
      </div>
    </div>
  );
};

function SolidBoxedCategoryMenu({ items }: any) {
  const locationCookies = Cookies.get('location');
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const { t } = useTranslation('common');
  const { isRTL } = useIsRTL();
  const { configData } = useSelector((state: any) => state.config);
  console.log(configData);
  useEffect(() => {
    if (locationCookies) {
      const keyValuePairs = locationCookies.split(';');
      const lat = keyValuePairs[0].split('=')[1].trim();
      const long = keyValuePairs[1].split('=')[1].trim();
      setLat(lat);
      setLong(long);
    }
  }, [locationCookies]);
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const breakpoints = {
    320: {
      slidesPerView: 3,
    },

    440: {
      slidesPerView: 5,
    },

    620: {
      slidesPerView: 7,
    },

    820: {
      slidesPerView: 10,
    },

    1100: {
      slidesPerView: 11,
    },

    1280: {
      slidesPerView: 12,
    },
  };

  return (
    <div className="relative">
      <Swiper
        id="category-card-menu"
        modules={[Navigation]}
        navigation={{
          prevEl: prevRef.current!, // Assert non-null
          nextEl: nextRef.current!, // Assert non-null
          disabledClass: 'swiper-button-disabled',
          hiddenClass: 'swiper-button-hidden',
        }}
        breakpoints={breakpoints}
        // slidesPerView={7}
      >
        {items?.map((category: any, idx: number) => (
          <SwiperSlide key={idx}>
            <CategoryItem
              item={category}
              lat={lat}
              long={long}
              configData={configData}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div
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
      </div>
    </div>
  );
}

export default SolidBoxedCategoryMenu;
