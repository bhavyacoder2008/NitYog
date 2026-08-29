import CallbackModal from '../ui/CallbackModal.jsx'

// ProductDetailPage keeps a product-specific component name while the reusable
// modal owns the shared dialog, phone form, validation and success behavior.
function BuyNowModal({ product, onClose }) {
  return <CallbackModal mode="purchase" product={product} onClose={onClose} />
}

export default BuyNowModal
