//import Image from 'next/image';

import React from 'react'
import cn from 'classnames';
import {Image} from "../../components/ui/image"
import { useModalAction } from '@/components/ui/modal/modal.context';
interface propsType {
    list: string;
    className?: string;
  }

export const Listing:React.FC<propsType> = ({list, className}:any)=> {
   // console.log('list ',list)

  

 const { openModal } = useModalAction();


   function handleListQuickView() {
     return openModal('LISTING_DETIALS', list.slug);
   }
  return (
    <article
    className={cn(
      'product-card cart-type-neon h-full transform overflow-hidden rounded border border-border-200 bg-light shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow',
      className
    )}
  >
     <div className='relative cursor-pointer overflow-hidden rounded-2xl border-2 bg-light text-center' onClick={handleListQuickView}>
      <div className="relative my-2 mb-3 flex h-16  w-auto items-center justify-center overflow-hidden" >
      <Image src={`/${list?.image}`} alt={list?.name} 
          width={50}
          height={50}
          className="object-contain"/>
      </div>
      <span className="block px-4 pb-4 text-center text-xs font-semibold text-heading">
        {list.name}
      </span>
        </div> 
 

   
  </article>
  )
}
