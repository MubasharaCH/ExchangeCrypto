import { Image } from '@/components/ui/image';
import { productPlaceholder } from '@/lib/placeholders';
import { formatString } from '@/lib/format-string';
import { useTranslation } from 'next-i18next';
import cn from 'classnames';
import { useModalAction } from '@/components/ui/modal/modal.context';

interface CategoryItemProps {
  item: any;
  className?: string;
  baseURL: string;
  //  onClick: () => void;
}
const Estate: React.FC<CategoryItemProps> = ({ item, className, baseURL }) => {
  const { t } = useTranslation('common');
  console.log('estate', item);
  const { openModal } = useModalAction();

  function handleListQuickView() {
    return openModal('LISTING_DETIALS', item.id);
  }
  return (
    <article
      className={cn(
        'product-card cart-type-helium h-full h-[270px]  overflow-hidden rounded-md border border-border-200 bg-light transition-shadow duration-200 hover:shadow-sm',
        className
      )}
    >
      <div
        className="relative cursor-pointer overflow-hidden bg-light text-center"
        onClick={handleListQuickView}
      >
        <div className=" relative  mb-3 flex  h-[270px]    items-center justify-center  overflow-hidden rounded-lg">
          <Image
            src={baseURL !== undefined ? `${baseURL}/${item?.image}` : ''}
            alt={item?.name}
            fill
            sizes="(max-width: 768px) 100vw"
            className="product-image object-cover"
          />
        </div>
        <span className="block px-4 pb-4 text-center text-xs font-bold text-heading">
          <h3 className="cursor-pointer truncate text-xs text-body md:text-sm">
            {item?.name}
          </h3>
        </span>
      </div>
    </article>
  );
};

export default Estate;
