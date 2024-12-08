import SearchBox from '@/components/ui/search/search-box';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useSearch } from './search.context';
import { locationAtom } from '@/lib/use-location';
import { useAtom } from 'jotai';
import { displayMobileHeaderSearchAtom } from '@/store/display-mobile-header-search-atom';
import Cookies from 'js-cookie';
import { SearchEvent } from '@/lib/Analytics';
interface Props {
  label: string;
  variant?: 'minimal' | 'normal' | 'with-shadow' | 'flat';
  [key: string]: unknown;
}

const Search: React.FC<Props> = ({ label, variant, ...props }) => {
  const { t } = useTranslation();
  const router = useRouter();
  const { pathname } = useRouter();
  const [displayMobileHeaderSearch, setDisplayMobileHeaderSearch] = useAtom(
    displayMobileHeaderSearchAtom
  );
  const { searchTerm, updateSearchTerm } = useSearch();
  const handleOnChange = (e: any) => {
    const { value } = e.target;
    updateSearchTerm(value);
  };
  const [location] = useAtom(locationAtom);
  const onSearch = (e: any) => {
    e.preventDefault();
    if (!searchTerm) return;
    const longitude = location?.lng;
    const latitude = location?.lat;
    // const module_id = JSON.parse(localStorage.getItem('module_id'));
    const type = 'store';
    const newQueryParams = {
      longitude: longitude,
      latitude: latitude,
      text: searchTerm,
    };
    if (pathname === '/[[...pages]]') {
      let params = {
        src: router?.asPath === '/' ? 'Home' : 'Module',
        module: router?.asPath === '/' ? '' : router?.query?.pages[0],
        query: searchTerm,
      };
      SearchEvent(params);
    } else {
      let params = {
        src: 'Global Search From Header',
        query: searchTerm,
      };
      SearchEvent(params);
    }
    Cookies.set('search', JSON.stringify(newQueryParams));
    const newUrl = `/search`;
    router.push(newUrl);

    setDisplayMobileHeaderSearch(false);
  };

  function clearSearch() {
    updateSearchTerm('');

    const longitude = location?.lng;
    const latitude = location?.lat;
    // const module_id = JSON.parse(localStorage.getItem('module_id'));
    const type = 'store';
    const newQueryParams = {
      longitude: longitude,
      latitude: latitude,
      text: searchTerm,
    };
    Cookies.set('search', JSON.stringify(newQueryParams));

    const { pathname, query } = router;
    const { text, ...rest } = query;
    if (text) {
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
    }
  }

  return (
    <SearchBox
      label={label}
      onSubmit={onSearch}
      onClearSearch={clearSearch}
      onChange={handleOnChange}
      value={searchTerm}
      name="search"
      placeholder={t('common:text-search-placeholder')}
      variant={variant}
      {...props}
    />
  );
};

export default Search;
