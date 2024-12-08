import { Image } from '@/components/ui/image';
import { useTranslation } from 'next-i18next';
import { formatAddress } from '@/lib/format-address';
import { Routes } from '@/config/routes';
import Link from '@/components/ui/link';
import isEmpty from 'lodash/isEmpty';
import { productPlaceholder } from '@/lib/placeholders';
import { Shop } from '@/types';
import Button from '../button';
import { StarIcon } from '@/components/icons/star-icon';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { BusinessViewEvent } from '@/lib/Analytics';
import { useModalAction } from '../modal/modal.context';
type ShopCardProps = {
  shop: Shop;
  background_color: string;
  limit: string;
  offset: string;
  total_size: string;
  latLong?: string;
  template_name: any;
  isMapModal: any;
};

const NearShopCard: React.FC<ShopCardProps> = ({
  limit,
  offset,
  total_size,
  latLong,
  shop,
  background_color,
  template_name,
  isMapModal,
}) => {
  const { t } = useTranslation();
  const isNew = false;
  const fullURL = window.location.href;
  const url = 'https://ignitestorage.blob.core.windows.net/oneapp/store/';
  const { configData } = useSelector((state: any) => state.config);
  const router = useRouter();
  const { closeModal } = useModalAction();
  const saveColor = () => {
    localStorage.setItem('background_color', background_color);
    localStorage.setItem('module_id', shop?.module_id);
    let location = {
      lat: shop?.latitude,
      lng: shop?.longitude,
    };
    localStorage.setItem('storelocation', JSON.stringify(location));

    const params = new URLSearchParams(latLong);

    const latitude = params.get('latitude');
    const longitude = params.get('longitude');
    const zone = params.getAll('home');

    document.cookie = `latitude=${latitude}&longitude=${longitude}&zoneId=${zone}; path=/`;
    let path = router.asPath;
    let module =
      router.pathname === '/[[...pages]]' && path !== '/'
        ? router?.query?.pages[0]
        : '';

    let parms: any = {
      item_id: shop?.id,
      item_name: shop?.name,
      business_id: shop?.id,
      business_name: shop?.name,
      type: 'store',
      src:
        path === '/'
          ? 'Home'
          : path === '/offers'
          ? 'Deals'
          : path === '/search'
          ? 'search'
          : router?.pathname === '/shops/[slug]'
          ? 'Featured Products and Stores'
          : 'Module',
    };

    if (module) {
      parms.module = module;
    }
    if (template_name) {
      parms.template_name = template_name;
    }

    BusinessViewEvent(parms);
    closeModal();
  };

  return (
    <Link
      href={isMapModal ? '' : Routes.shops + '/' + shop?.slug}
      onClick={isMapModal ? '' : saveColor}
    >
      <div
        className="
      cur group relative cursor-pointer overflow-hidden rounded-lg bg-white shadow-[0_1px_3px_rgba(0,0,0,0.1),_0_1px_2px_rgba(0,0,0,0.06)]"
      >
        <div className="relative ">
          {isNew && (
            <span className="absolute top-2 rounded bg-blue-500 px-2 py-1 text-xs text-light ltr:right-2 rtl:left-2">
              {t('common:text-new')}
            </span>
          )}
          <div className="relative flex h-[170px] w-full max-w-full shrink-0 items-center justify-center overflow-hidden bg-gray-300">
            <Image
              alt={t('common:text-logo')}
              src={
                !shop?.cover_photo
                  ? productPlaceholder
                  : configData?.base_urls?.store_cover_photo_url
                  ? configData.base_urls.store_cover_photo_url +
                    '/' +
                    shop?.cover_photo
                  : productPlaceholder
              }
              fill
              sizes="(max-width: 300px) 100vw"
              className="transform-gpu object-cover transition-transform group-hover:scale-110"
              style={{ maxHeight: '170px !important' }}
            />
          </div>

          <div className="bg-overlay absolute inset-0">
            {shop?.distance != 0 ? (
              <div className="absolute top-2.5 right-2.5 rounded-md bg-black/50 py-2 px-2.5 text-white backdrop-blur">
                {shop?.distance?.toFixed(2)}km Away
              </div>
            ) : (
              <div className="absolute top-2.5 right-2.5 rounded-md bg-black/50 py-2 px-2.5 text-white backdrop-blur">
                {shop?.distance}km Away
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 px-1.5 pt-3 pb-5">
          <div className="bottom-5 left-5 z-10 flex gap-4">
            <div className="relative z-20 -mt-14 flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-full border-[3px] border-solid border-white shadow-md">
              <Image
                alt={t('common:text-logo')}
                src={
                  !shop?.logo
                    ? productPlaceholder
                    : configData?.base_urls?.store_image_url
                    ? configData.base_urls.store_image_url + '/' + shop?.logo
                    : productPlaceholder
                }
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-grow flex-col justify-between">
            <div className="flex justify-between ">
              <Link
                href={isMapModal ? Routes.shops + '/' + shop?.slug : ''}
                onClick={isMapModal ? saveColor : ''}
              >
                <h4 className={`text-md  font-bold text-heading`}>
                  {shop?.name?.length > 15
                    ? shop?.name?.slice(0, 15) + '.'
                    : shop?.name}
                </h4>
              </Link>
              <span className="flex justify-between bg-accent p-1 text-xs text-white">
                {shop?.avg_rating?.toFixed(2)}
              </span>
            </div>
            <span className="line-clamp-1 mt-1.5 text-sm text-body">
              {shop?.address}
            </span>
          </div>

          {/* {
            shop?.distance && <Button variant='outline' size='small' className='text-heading font-normal group-hover:!bg-accent group-hover:text-white group-hover:border-transparent focus:outline-0 focus:ring-0'>{shop?.distance?.toFixed(2)}km</Button>
          } */}
        </div>
      </div>
    </Link>
  );
};

export default NearShopCard;
