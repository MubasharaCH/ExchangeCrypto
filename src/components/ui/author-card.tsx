import cn from 'classnames';
import { avatarPlaceholder } from '@/lib/placeholders';
import { Image } from '@/components/ui/image';
import Link from '@/components/ui/link';
import { Routes } from '@/config/routes';
import { UserProfileView } from '@/lib/Analytics';

interface AuthorItemProps {
  item: any;
}

const AuthorCard: React.FC<AuthorItemProps> = ({ item }) => {
  const handleEvent = () => {
    let params = {
      user_viewd_name: item?.f_name + '' + item?.l_name,
      user_viewd_id: item?.id,
    };
    UserProfileView(params);
  };
  return (
    <Link
      href={Routes.user(item?.id)}
      onClick={handleEvent}
      className={cn(
        'group relative flex cursor-pointer flex-col items-center text-center'
      )}
    >
      <span
        className={cn(
          'relative mb-6 flex h-44 w-44 items-center justify-center overflow-hidden rounded-full border-4 border-white bg-gray-100 shadow-350'
        )}
      >
        <Image
          src={item?.image?.original! ?? avatarPlaceholder}
          alt={item.f_name! + ' ' + item.l_name!}
          fill
          sizes="(max-width: 768px) 100vw"
          className="object-contain"
        />
      </span>
      <span className="block text-center font-semibold text-heading transition-colors group-hover:text-orange-500">
        {item.f_name + ' ' + item.l_name}
      </span>
    </Link>
  );
};

export default AuthorCard;
