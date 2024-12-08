import { Image } from '@/components/ui/image';
import cn from 'classnames';
import Link from '@/components/ui/link';
import { logoPlaceholder } from '@/lib/placeholders';
import { getRequest } from '@/components/api';
import { useEffect, useState } from 'react';
const Logo: React.FC<React.AnchorHTMLAttributes<{}>> = ({
  className,
  h,
  ...props
}) => {
  const [settings, setsetting] = useState([]);
  const [apiCall, setApiCall] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const local = JSON.parse(window.localStorage.getItem('setting'));

        setsetting(local);
        setApiCall(false);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, [apiCall]);

  return (
    <Link href="/" className={cn('inline-flex', className)} {...props}>
      <span className={`relative h-10 w-32 overflow-hidden md:w-40 lg:h-20`}>
        <Image
          src={settings?.options?.logo?.original ?? logoPlaceholder}
          alt={settings?.options?.siteTitle || 'OneApp Logo'}
          fill
          sizes="(max-width: 768px) 100vw"
          loading="eager"
          className="object-contain"
        />
      </span>
    </Link>
  );
};

export default Logo;
