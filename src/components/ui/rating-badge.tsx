import { StarIcon } from '@/components/icons/star-icon';
import cn from 'classnames';

type RatingProps = {
  className?: any;
  rating: number | undefined;
  variant?: 'xs' | 'small' | 'large';
  boxed?: boolean;
  backgroundColor?:string;
};

const RatingsBadge: React.FC<RatingProps> = ({
  className = '',
  rating,
  variant = 'small',
  boxed,
  backgroundColor,
  ...props
}) => {
  {console.log(backgroundColor)}
  return (

    <span
      className={cn(
        `inline-flex shrink-0 items-center rounded-full bg-accent text-white`,
        {
          'px-2 py-[3px] text-sm': variant === 'xs',
          'px-3 py-1 text-base': variant === 'small',
          'px-6 py-2 text-3xl font-semibold': variant === 'large',
          '!rounded': boxed,
        },
        className
       
      )}
      //style={{backgroundColor:backgroundColor}}
      {...props}
    >
      {rating?.toFixed(2)}
      <StarIcon
        className={cn({
          'h-2.5 w-2.5 ltr:ml-1 rtl:mr-1': variant === 'xs',
          'h-3 w-3 ltr:ml-1.5 rtl:mr-1.5': variant === 'small',
          'h-6 w-6 ltr:ml-2 rtl:mr-2': variant === 'large',
        })}
      />
    </span>
  );
};

export default RatingsBadge;
