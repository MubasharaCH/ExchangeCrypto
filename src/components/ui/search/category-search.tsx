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
  searchTerm: any;
  updateSearchTerm: any;
}

const Search: React.FC<Props> = ({
  label,
  variant,
  searchTerm,
  updateSearchTerm,
  ...props
}) => {
  const { t } = useTranslation();
  const router = useRouter();

  const handleOnChange = (e: any) => {
    const { value } = e.target;
    updateSearchTerm(value);

    if (!value) {
      console.log('value');
      setTimeout(() => {
        clearSearch();
      }, 1000);
    } else {
      handleSearch(value);
    }
  };
  const handleSearch = (searchTerm: any) => {
    const { pathname, query } = router;
    var search = Cookies.get('category');
    const newQueryParams = {
      limit: 10,
      name: searchTerm,
    };
    if (search) {
      search = JSON.parse(search);
      if (search) {
        Cookies.set('category', JSON.stringify(newQueryParams));
      } else {
        Cookies.set('category', JSON.stringify(newQueryParams));
      }
    } else {
      Cookies.set('category', JSON.stringify(newQueryParams));
    }

    router.push(
      {
        pathname,
        query: { ...query },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };
  const onSearch = (e: any) => {
    e.preventDefault();

    if (!searchTerm) return;
    handleSearch(searchTerm);
  };

  function clearSearch() {
    updateSearchTerm('');
    const { pathname, query } = router;
    const { text, ...rest } = query;
    var search = Cookies.get('category');
    if (search) {
      search = JSON.parse(search);
      if (search) {
        delete search?.name;
        search.limit = 10;
        Cookies.set('category', JSON.stringify(search));
        router.push(
          {
            pathname,
            query: { ...query },
          },
          undefined,
          {
            scroll: false,
          }
        );
      }
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
