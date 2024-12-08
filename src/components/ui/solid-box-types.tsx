import { useRef } from 'react';
import { useRouter } from 'next/router';
import cn from 'classnames';
import { useTranslation } from 'next-i18next';
import { useIsRTL } from '@/lib/locals';
import { ArrowPrevIcon } from '@/components/icons/arrow-prev';
import { ArrowNextIcon } from '@/components/icons/arrow-next';
import { Swiper, SwiperSlide, Navigation } from '@/components/ui/slider';
import { productPlaceholder } from '@/lib/placeholders';
import { Image } from '@/components/ui/image';
import { toast } from 'react-toastify';

interface TypesItemProps {
  item: any;
}
const TypesItem: React.FC<TypesItemProps> = ({ item }) => {
  const router = useRouter();
  const onCategoryClick = (slug: string) => {
    const location = JSON.parse(window.localStorage.getItem('currentLocation'));
    if (!location) {
      toast.error('Please Add Location First');
    } else {
      const queryParams = `?lat=${location?.lat}&lng=${location?.lng}`;
      const routeWithQuery = `${slug}${queryParams}`;
      router.push(routeWithQuery);
    }
  };

  return (
    <div
      className={cn(
        'relative cursor-pointer overflow-hidden rounded border-2 border-light bg-light text-center'
      )}
      role="button"
      onClick={() => onCategoryClick(item?.slug)}
    >
      <div className="relative my-2 mb-3 flex h-32 w-auto items-center justify-center overflow-hidden">
        <Image
          src={item?.icon ?? productPlaceholder}
          alt={item?.name!}
          width={50}
          height={50}
          className="object-contain"
        />
      </div>
      <span className="block px-4 pb-4 text-center text-xs font-semibold text-heading">
        {item.name}
      </span>
    </div>
  );
};

const Card = ({ item }) => {
  const router = useRouter();
  const onCategoryClick = (slug: string) => {
    const location = JSON.parse(window.localStorage.getItem('currentLocation'));
    if (!location) {
      toast.error('Please Add Location First');
    } else {
      localStorage.setItem('module', slug);
      const queryParams = `?lat=${location?.lat}&lng=${location?.lng}`;
      const routeWithQuery = `${slug}${queryParams}`;
      router.push(routeWithQuery);
    }
  };
  return (
    <div
      className="relative min-h-[80px] min-w-[163px] cursor-pointer border bg-white p-3 transition-all"
      onClick={() => onCategoryClick(item?.slug)}
    >
      <span className="block pb-4 text-center text-xs font-semibold text-heading">
        {item.name}
      </span>
      <div className="flex justify-center">
        {/* <span  className="text">
            Over
          </span> 

          <span >
              {item?.stores_count > 2
                ? item?.stores_count - 1
                : item?.stores_count}
              {item?.stores_count > 2 && "+"}{" "}
            </span> */}
        <div className="relative">
          <Image
            src={item?.icon ?? productPlaceholder}
            alt={item?.name!}
            width={30}
            height={30}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};
function SolidBoxedTypes({ items }: any) {
  const { t } = useTranslation('common');
  const { isRTL } = useIsRTL();

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

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
      slidesPerView: 6,
    },

    1280: {
      slidesPerView: 7,
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
        spaceBetween={10}
      >
        {items?.map((type: any, idx: number) => (
          <SwiperSlide key={idx}>
            <Card item={type} />
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

export default SolidBoxedTypes;
