import { useState, Fragment } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import { LangSwitcherIcon } from '@/components/icons/lang-switcher-icon';
import { languageMenu } from '@/lib/locals';
import Cookies from 'js-cookie';
import { AUTH_TOKEN_KEY } from '@/lib/constants';
import { Routes } from '@/config/routes';
import { useCart } from '@/store/quick-cart/cart.context';
import { useAtom } from 'jotai';
import { clearCheckoutAtom } from '@/store/checkout';
import { locationAtom } from '@/lib/use-location';

export default function LanguageSwitcher() {
  const { t } = useTranslation('common');
  const router = useRouter();
  const { resetCart } = useCart();
  const [, resetCheckout] = useAtom(clearCheckoutAtom);
  const [location, setLocation] = useAtom(locationAtom);
  const { asPath, locale, locales } = router;
  const country = Cookies.get('country');
  let filterItem = languageMenu?.filter((element) =>
    locales?.includes(element?.id)
  );
  const [languages, countries]: any = locale?.split('-');

  const currentSelectedItem = country
    ? languageMenu?.find((o) => o?.value === country)!
    : languageMenu[2];
  const [selectedItem, setSelectedItem] = useState(currentSelectedItem);

  function handleItemClick(values: any) {
    let count = values?.value === 'saudi' ? 'SA' : 'PK';
    let locales = `en-${count}`;
    Cookies.set('country', values?.value);
    Cookies.set('NEXT_LOCALE', 'en', { expires: 365 });
    // console.log(values, 'values');
    if (values.value == 'Demo') {
      router.push('https://demo-one.myignite.online/', undefined, {
        locale: locales,
      });
    }
    router.push('/', undefined, {
      locale: locales,
    });
    Cookies.remove(AUTH_TOKEN_KEY);
    // resetCart();
    // //@ts-ignore
    // resetCheckout();
    localStorage.removeItem('currentLocation');
    Cookies.remove('currentLocation');
    Cookies.remove('location');
    setLocation(null);
    setSelectedItem(values);
    // router.push('/');
    setTimeout(() => {
      window.location.reload();
    }, 2000); // 2000 milliseconds = 2 seconds

    // router.push(asPath, undefined, {
    //   locale: values?.value,
    // });
  }

  return (
    // switch
    <Listbox value={selectedItem} onChange={handleItemClick}>
      {({ open }) => (
        <div className="ms-2 lg:ms-0 relative z-10 xl:w-[130px]">
          <Listbox.Button className="relative flex h-full w-full cursor-pointer items-center rounded text-[13px] focus:outline-0 focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 xl:h-auto xl:w-full xl:border xl:border-solid xl:border-[#CFD3DA] xl:bg-white xl:py-2 xl:text-sm xl:text-heading xl:ltr:pl-3  xl:ltr:pr-7 xl:rtl:pl-7 xl:rtl:pr-3">
            <span className="relative mx-2 block h-[35px] w-[35px] gap-3 overflow-hidden rounded-full xl:hidden">
              <span className="relative block">{selectedItem?.iconMobile}</span>
            </span>
            <span className="hidden items-center truncate xl:flex">
              <span className="text-xl ltr:mr-3 rtl:ml-3">
                {selectedItem?.icon}
              </span>{' '}
              {t(selectedItem?.name)}
            </span>
            <span className="pointer-events-none absolute inset-y-0 hidden items-center ltr:right-0 ltr:pr-2 rtl:left-0 rtl:pl-2 xl:flex">
              <LangSwitcherIcon className="text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>
          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              static
              className={`absolute mt-1 max-h-60 w-[130px] overflow-auto rounded-md bg-white py-1 text-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-0 ltr:right-0 rtl:left-0 xl:w-full`}
            >
              {languageMenu?.map((option, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `${active ? 'bg-gray-100 text-amber-900' : 'text-gray-900'}
												relative cursor-pointer select-none py-2 px-3`
                  }
                  value={option}
                >
                  {({ selected, active }) => (
                    <span className="flex items-center">
                      <span className="text-xl">{option?.icon}</span>
                      <span
                        className={`${
                          selected ? 'font-medium' : 'font-normal'
                        } block truncate ltr:ml-2.5 rtl:mr-2.5`}
                      >
                        {t(option?.name)}
                      </span>
                      {selected ? (
                        <span
                          className={`${active && 'text-amber-600'}
                                 absolute inset-y-0 flex items-center ltr:left-0 ltr:pl-3 rtl:right-0 rtl:pr-3`}
                        />
                      ) : null}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
  );
}
