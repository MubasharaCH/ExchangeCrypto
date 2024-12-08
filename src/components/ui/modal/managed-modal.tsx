import dynamic from 'next/dynamic';
import Modal from '@/components/ui/modal/modal';
import { useModalAction, useModalState } from './modal.context';
import StoreLocationMapModal from '@/components/storeLocations/StoreLocationMapModal';
import RulesModal from '@/components/products/cards/RulesModal';
import GroupProductPopup from '@/components/products/details/group-product-popup';
import ShareDeal from '@/components/products/details/share-deal';
import FlashView from '@/components/products/details/flash-view';

const OtpLoginView = dynamic(() => import('@/components/auth/otp-login'));
const Login = dynamic(() => import('@/components/auth/login-form'), {
  ssr: false,
});
const Register = dynamic(() => import('@/components/auth/register-form'));
const ForgotPassword = dynamic(
  () => import('@/components/auth/forgot-password')
);
const ProductDetailsModalView = dynamic(
  () => import('@/components/products/details/popup'),
  { ssr: false }
);
const ListingDetailsModalView = dynamic(
  () => import('@/components/listings/detials/popup'),
  { ssr: false }
);
const TicketDetailsModalView = dynamic(
  () => import('@/components/products/details/ticket-popup'),
  { ssr: false }
);
const ServiceDetailsModalView = dynamic(
  () => import('@/components/shops/services/pop-up'),
  { ssr: false }
);
const ShopInfoCard = dynamic(() => import('@/components/shops/sidebar'));
const CreateOrUpdateAddressForm = dynamic(
  () => import('@/components/address/address-form'),
  { ssr: false }
);
const CreateOrUpdateBankForm = dynamic(
  () => import('@/components/address/bank-form'),
  { ssr: false }
);
const LocationBasedShopForm = dynamic(
  () => import('@/components/form/location-based-shop-form'),
  { ssr: false }
);
const CreateOrUpdateGuestAddressForm = dynamic(
  () => import('@/components/checkout/create-or-update-guest')
);
const AddressDeleteView = dynamic(
  () => import('@/components/address/delete-view')
);
const AddOrUpdateCheckoutContact = dynamic(
  () => import('@/components/checkout/contact/add-or-update')
);
const ProfileAddOrUpdateContact = dynamic(
  () => import('@/components/profile/profile-add-or-update-contact')
);
const ConvertWallet = dynamic(
  () => import('@/components/profile/Convert-Points')
);
const AddFunds = dynamic(() => import('@/components/profile/handlePayment'));
const AddReplyModal = dynamic(() => import('@/components/social/ReplyComment'));
const UpdatedHighlights = dynamic(
  () => import('@/components/profile/Update-Collection')
);
const CreateRefundView = dynamic(
  () => import('@/components/refunds/refund-form')
);
const ReviewRating = dynamic(() => import('@/components/reviews/review-form'));
const QuestionForm = dynamic(
  () => import('@/components/questions/question-form')
);
const AbuseReport = dynamic(() => import('@/components/reviews/abuse-report'));
const ProductVariation = dynamic(
  () => import('@/components/products/variation-modal')
);
const ReviewImageModal = dynamic(
  () => import('@/components/reviews/review-image-modal')
);
const GalleryImageModal = dynamic(
  () => import('@/components/shops/gallery/GalleryImagePopover')
);
const PaymentModal = dynamic(
  () => import('@/components/payment/payment-modal'),
  { ssr: false }
);
const StripeElementModal = dynamic(
  () => import('@/components/payment/stripe-element-modal'),
  { ssr: false }
);
const AddNewPaymentModal = dynamic(
  () => import('@/components/payment/add-new-payment-modal'),
  { ssr: false }
);
const DeleteCardModal = dynamic(() => import('@/components/card/delete-view'));
const AddNewCardModal = dynamic(
  () => import('@/components/card/add-new-card-modal'),
  { ssr: false }
);

const GateWayControlModal = dynamic(
  () => import('@/components/payment/gateway-control/gateway-modal'),
  { ssr: false }
);

const ManagedModal = () => {
  const { isOpen, view, data } = useModalState();
  const { closeModal } = useModalAction();

  // Controlled payment modal [custom & default]
  if (view === 'PAYMENT_MODAL') {
    return <PaymentModal />;
  }

  return (
    <Modal open={isOpen} onClose={closeModal}>
      {view === 'LOGIN_VIEW' && <Login />}
      {view === 'REGISTER' && <Register />}
      {view === 'FORGOT_VIEW' && <ForgotPassword />}
      {view === 'OTP_LOGIN' && <OtpLoginView />}
      {view === 'REFUND_REQUEST' && <CreateRefundView />}
      {view === 'ADD_OR_UPDATE_ADDRESS' && <CreateOrUpdateAddressForm />}
      {view === 'AddBank' && <CreateOrUpdateBankForm />}
      {view === 'PromotionModal' && <RulesModal data={data} />}
      {view === 'AddReply' && <AddReplyModal data={data} />}
      {view === 'ADD_OR_UPDATE_GUEST_ADDRESS' && (
        <CreateOrUpdateGuestAddressForm />
      )}
      {view === 'LOCATION_BASED_SHOP' && <LocationBasedShopForm />}
      {view === 'ADD_OR_UPDATE_CHECKOUT_CONTACT' && (
        <AddOrUpdateCheckoutContact />
      )}
      {view === 'Add_Funds' && <AddFunds />}
      {view === 'UpdateCollection' && <UpdatedHighlights data={data} />}
      {view === 'ConvertWallet' && <ConvertWallet />}
      {view === 'ADD_OR_UPDATE_PROFILE_CONTACT' && (
        <ProfileAddOrUpdateContact />
      )}
      {view === 'DELETE_ADDRESS' && <AddressDeleteView />}
      {view === 'PRODUCT_DETAILS' && (
        <ProductDetailsModalView productSlug={data} />
      )}
       {view === 'LISTING_DETIALS' && (
        <ListingDetailsModalView productSlug={data} />
      )}
      {view === 'GROUP_PRODUCT_DETAILS' && (
        <GroupProductPopup productSlug={data} />
      )}
      {view === 'SHARE_DEAL' && <ShareDeal product={data} />}
      {view === 'FLASH_PENDING_VIEW' && <FlashView product={data} />}
      {view === 'MAP_MODAL' && <StoreLocationMapModal productSlug={data} />}
      {view === 'TICKET_DETAILS' && (
        <TicketDetailsModalView productSlug={data} />
      )}
      {view === 'SERVICE_DETAILS' && <ServiceDetailsModalView data={data} />}
      {view === 'SHOP_INFO' && (
        <ShopInfoCard
          shop={data?.shop}
          cardClassName="!hidden"
          className="!flex !h-screen !w-screen max-w-screen-sm flex-col"
        />
      )}
      {view === 'REVIEW_RATING' && <ReviewRating />}
      {view === 'ABUSE_REPORT' && <AbuseReport data={data} />}
      {view === 'QUESTION_FORM' && <QuestionForm />}
      {view === 'SELECT_PRODUCT_VARIATION' && (
        <ProductVariation productSlug={data} />
      )}
      {view === 'REVIEW_IMAGE_POPOVER' && <ReviewImageModal />}
      {view === 'GALLERY_IMAGE_POPOVER' && <GalleryImageModal />}
      {/* Payment Modal */}
      {view === 'USE_NEW_PAYMENT' && <AddNewPaymentModal />}
      {/* Card/My Card Modal */}
      {view === 'ADD_NEW_CARD' && <AddNewCardModal />}
      {view === 'DELETE_CARD_MODAL' && <DeleteCardModal />}
      {view === 'GATEWAY_MODAL' && <GateWayControlModal />}
      {view === 'STRIPE_ELEMENT_MODAL' && <StripeElementModal />}
    </Modal>
  );
};

export default ManagedModal;
