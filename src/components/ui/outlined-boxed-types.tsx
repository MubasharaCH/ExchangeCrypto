import { useRouter } from 'next/router';
import cn from 'classnames';
import { getIcon } from '@/lib/get-icon';
import * as CategoryIcons from '@/components/icons/category';
import * as groupIcons from '@/components/icons/groups';
import Image from 'next/image';
import { avatarPlaceholder, productPlaceholder } from '@/lib/placeholders';
interface TypesItemProps {
  item: any;
}
const TypesItem: React.FC<TypesItemProps> = ({ item }) => {
  const router = useRouter();

  const { pathname, query } = router;
  const selectedQueries = query.category;

  const onTypeClick = (slug: string) => {
    router.push(slug);
  };
  return (
    <div
      className={cn(
        'relative flex cursor-pointer flex-col items-center justify-start overflow-hidden rounded border-2 bg-light py-4 text-center',
        selectedQueries === item?.slug
          ? 'border-gray-800'
          : 'border-border-100 xl:border-transparent'
      )}
      role="button"
      onClick={() => onTypeClick(item?.slug!)}
    >
      <div className="flex h-20 w-full items-center justify-center">
        <span className="inline-block h-10 w-10">
          <Image
            alt="icons"
            src={item?.icon ?? productPlaceholder}
            width={50}
            height={50}
            //className="object-cover"
          />
          {/* {getIcon({
            iconList: groupIcons,
            iconName: "DressIcon",
            className: 'w-10 h-10',
          })} */}
        </span>
      </div>

      <span className="block px-2.5 text-center text-sm font-semibold text-heading">
        {item?.name}
      </span>
    </div>
  );
};

function OutlinedBoxedTypesMenu({ items }: any) {
  return (
    <>
      {items?.map((item: any) => (
        <TypesItem key={`${item.name}${item.slug}`} item={item} />
      ))}
    </>
  );
}

export default OutlinedBoxedTypesMenu;
