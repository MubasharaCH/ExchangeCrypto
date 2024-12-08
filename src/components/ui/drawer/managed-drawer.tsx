import MobileCategoryMenu from '@/components/layouts/mobile-menu/mobile-category-menu';
import { drawerAtom } from '@/store/drawer-atom';
import { useAtom } from 'jotai';
import dynamic from 'next/dynamic';
import Drawer from './drawer';
const CartSidebarView = dynamic(
  () => import('@/components/cart/cart-sidebar-view')
);
const WishlistSidebar = dynamic(
  () => import('@/components/cart/wishlist-sidebar')
);
const PaymentSidebarView = dynamic(
  () => import('@/components/cart/paymentSidebar')
);
const WithdrawSidebar = dynamic(
  () => import('@/components/cart/Withdraw-sidebar')
);

const EventCartSidebarView = dynamic(
  () => import('@/components/cart/ticket-cart-sidebar-view')
);
const PlansSidebarView = dynamic(
  () => import('@/components/shops/plans/plans-sidebar-view')
);
const MobileAuthorizedMenu = dynamic(
  () => import('@/components/layouts/mobile-menu/mobile-authorized-menu')
);
const MobileOfferMenu = dynamic(
  () => import('@/components/layouts/mobile-menu/mobile-offer-menu')
);
const MobileMainMenu = dynamic(
  () => import('@/components/layouts/mobile-menu/mobile-main-menu')
);
const SearchFilterView = dynamic(
  () => import('@/components/search-view/sidebar-filter')
);

export default function ManagedDrawer() {
  const [{ display, view, data }, setDrawerState] = useAtom(drawerAtom);
  const isTransactionEnabled =
    process.env.NEXT_PUBLIC_TRANSACTION_FEATURE == 'true';
  return (
    <>
      {(isTransactionEnabled || view === 'paymentView') && (
        <Drawer
          open={display}
          onClose={() => setDrawerState({ display: false, view: '' })}
          variant={
            [
              'FILTER_VIEW',
              'MAIN_MENU_VIEW',
              'FILTER_LAYOUT_TWO_VIEW',
              'SEARCH_FILTER',
            ].includes(view)
              ? 'left'
              : 'right'
          }
        >
          {view === 'cart' && <CartSidebarView id={data} />}
          {view === 'wishlist' && <WishlistSidebar data={data} />}
          {view === 'paymentView' && <PaymentSidebarView id={data} />}
          {view === 'WithDraw' && <WithdrawSidebar />}
          {view === 'event_cart' && <EventCartSidebarView id={data} />}
          {view === 'plans' && <PlansSidebarView plan={data} />}
          {view === 'FILTER_VIEW' && <MobileCategoryMenu variables={data} />}
          {view === 'MAIN_MENU_VIEW' && <MobileMainMenu />}
          {view === 'OFFER_VIEW' && (
            <MobileOfferMenu setSelectedTabIndex={data} />
          )}
          {view === 'AUTH_MENU_VIEW' && <MobileAuthorizedMenu />}
          {view === 'SEARCH_FILTER' && (
            <SearchFilterView
              type={data?.type}
              showManufacturers={data?.showManufacturers}
              categoryid={data?.categoryid}
            />
          )}
        </Drawer>
      )}
    </>
  );
}
