import { useRouter } from 'next/router';
import React, { FC, useEffect, useMemo, useState } from 'react';
import Cookies from 'js-cookie';
export interface State {
  searchTerm: string;
}

const initialState = {
  searchTerm: '',
};

export const SearchContext = React.createContext<State | any>(initialState);

SearchContext.displayName = 'SearchContext';

export const SearchProvider: FC<{ children?: React.ReactNode }> = (props) => {

  const { pathname } = useRouter();

  const [searchTerm, updateSearchTerm] = useState('');
  var search = Cookies.get('search');
  useEffect(()=>{
    if(pathname!=='/search'){
      Cookies.remove('search');
    }
  },[])
  // console.log(search);
  useEffect(() => {
    if(search){
      
      const searchText = JSON.parse(search);
      if(searchText){
        updateSearchTerm(searchText?.text?searchText?.text:'')
      }else{
        updateSearchTerm('');
      }
    }else{
      updateSearchTerm('');
    }


    // if (query?.text) {
    //   updateSearchTerm(query?.text as string);
    // } else {
    //   updateSearchTerm('');
    // }
  }, [updateSearchTerm,search]);

  const value = useMemo(
    () => ({
      searchTerm,
      updateSearchTerm,
    }),
    [searchTerm]
  );

  return <SearchContext.Provider value={value} {...props} />;
};

export const useSearch = () => {
  const context = React.useContext(SearchContext);
  if (context === undefined) {
    throw new Error(`useSearch must be used within a SearchProvider`);
  }
  return context;
};
