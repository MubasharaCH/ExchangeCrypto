//import Image from 'next/image';

import React from 'react';
import cn from 'classnames';
import { Image } from '../../components/ui/image';
import { useModalAction } from '@/components/ui/modal/modal.context';
interface propsType {
  list: string;
  className?: string;
  baseURL: string;
}

export const Jobs: React.FC<propsType> = ({
  list,
  className,
  baseURL,
}: any) => {
  // console.log('list ',list)

  console.log(list.id);
  const { openModal } = useModalAction();

  function handleListQuickView() {
    return openModal('LISTING_DETIALS', list.id);
  }
  return (
    <article
      className={cn(
        'product-card cart-type-helium h-full h-[270px]  overflow-hidden rounded-md border border-border-200 bg-light transition-shadow duration-200 hover:shadow-sm',
        className
      )}
    >
      <div
        className="relative cursor-pointer overflow-hidden  bg-light text-center"
        onClick={handleListQuickView}
      >
        <div className=" relative  mb-3 flex  h-[270px]   items-center justify-center  overflow-hidden rounded-lg">
          <Image
            src={baseURL !== undefined ? `${baseURL}/${list?.image}` : ''}
            alt={list?.name}
            fill
            sizes="(max-width: 768px) 100vw"
            className="product-image object-cover"
          />
        </div>
        <span className="block px-4 pb-4 text-center text-xs font-bold text-heading">
          <h3 className="cursor-pointer truncate text-xs text-body md:text-sm">
            {list?.name}
          </h3>
        </span>
      </div>
    </article>
  );
};
