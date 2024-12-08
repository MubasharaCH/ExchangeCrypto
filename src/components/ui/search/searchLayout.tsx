import SearchBox from '@/components/ui/search/search-box';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useSearch } from './search.context';
import Cookies from 'js-cookie';
import { useEffect, useState } from 'react';
import { SearchEvent } from '@/lib/Analytics';

interface Props {
  label: string;
  variant?: 'minimal' | 'normal' | 'with-shadow' | 'flat';
  [key: string]: unknown;
}

const Search: React.FC<Props> = ({ label, variant, ...props }) => {
  const [lat, setLat] = useState('');
  const [long, setLong] = useState('');
  const locationCookies = Cookies.get('location');
  useEffect(() => {
    if (locationCookies) {
      const keyValuePairs = locationCookies.split(';');
      const lat = keyValuePairs[0].split('=')[1].trim();
      const long = keyValuePairs[1].split('=')[1].trim();
      setLat(lat);
      setLong(long);
    }
  }, [locationCookies]);
  const { t } = useTranslation();
  const router = useRouter();
  const { searchTerm, updateSearchTerm } = useSearch();
  const handleOnChange = (e: any) => {
    const { value } = e.target;
    updateSearchTerm(value);
  };

  const onSearch = (e: any) => {
    e.preventDefault();

    if (!searchTerm) return;
    const { pathname, query } = router;
    var search = Cookies.get('search');
    let params = {
      src: 'search',
      query: searchTerm,
    };
    SearchEvent(params);
    if (search) {
      search = JSON.parse(search);
      if (search) {
        const newQueryParams = {
          longitude: long,
          latitude: lat,
          text: searchTerm,
        };
        // search.text = searchTerm;
        Cookies.set('search', JSON.stringify(newQueryParams));
      } else {
        const newQueryParams = {
          longitude: long,
          latitude: lat,
          text: searchTerm,
        };
        Cookies.set('search', JSON.stringify(newQueryParams));
      }
    } else {
      const newQueryParams = {
        longitude: long,
        latitude: lat,
        text: searchTerm,
      };
      Cookies.set('search', JSON.stringify(newQueryParams));
    }
    // Cookies.set('search',JSON.stringify(newQueryParams))

    // Cookies.set('search',)
    router.push(
      {
        pathname,
        // query: { ...query },
      },
      undefined,
      {
        scroll: false,
      }
    );
  };

  function clearSearch() {
    updateSearchTerm('');
    const { pathname, query } = router;
    const { text, ...rest } = query;
    var search = Cookies.get('search');
    if (search) {
      search = JSON.parse(search);
      if (search) {
        delete search?.text;
        Cookies.set('search', JSON.stringify(search));
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

    // if (text) {
    //   Cookies.remove('search');
    //   router.push(
    //     {
    //       pathname,
    //       query: { ...rest },
    //     },
    //     undefined,
    //     {
    //       scroll: false,
    //     }
    //   );
    // }
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
