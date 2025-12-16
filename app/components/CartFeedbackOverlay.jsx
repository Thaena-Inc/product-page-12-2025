import { useState, useEffect } from 'react';
import { Link } from 'react-router';
import { X } from 'lucide-react';

export function CartFeedbackOverlay() {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItem, setCartItem] = useState(null);

  useEffect(() => {
    const handleCartItemAdded = (event) => {
      setCartItem(event.detail || {});
      setIsOpen(true);
    };

    window.addEventListener('cart:itemAdded', handleCartItemAdded);

    return () => {
      window.removeEventListener('cart:itemAdded', handleCartItemAdded);
    };
  }, []);

  useEffect(() => {
    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && isOpen) {
        handleClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  const {
    imageUrl,
    title = 'Item',
    variantTitle,
    quantity = 1,
  } = cartItem || {};

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-end justify-center md:items-end md:justify-end p-0 md:p-4 lg:p-6 transition-opacity duration-300 ease-in-out"
      onClick={handleBackdropClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="cart-feedback-title"
    >
      <div
        className="bg-white rounded-t-lg md:rounded-lg shadow-lg p-4 md:p-6 w-full md:max-w-md md:w-auto md:min-w-[400px] transform transition-all duration-300 ease-in-out animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Row */}
        <div className="flex items-center justify-between mb-4">
          <h2
            id="cart-feedback-title"
            className="text-lg font-semibold text-gray-900"
            role="status"
            aria-live="polite"
          >
            Added to bag
          </h2>
          <button
            onClick={handleClose}
            className="p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close"
          >
            <X className="w-5 h-5 text-gray-600" />
          </button>
        </div>

        {/* Content Row */}
        <div className="flex gap-4 mb-6">
          {imageUrl && (
            <img
              src={imageUrl}
              alt={title}
              className="w-20 h-20 object-cover rounded border border-gray-200 flex-shrink-0"
            />
          )}
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium text-gray-900 mb-1 truncate">
              {title}
            </p>
            {variantTitle && (
              <p className="text-sm text-gray-600 mb-1">{variantTitle}</p>
            )}
            <p className="text-sm text-gray-600">Quantity: {quantity}</p>
          </div>
        </div>

        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/cart"
            className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
            onClick={handleClose}
          >
            View cart
          </Link>
          <Link
            to="/checkout"
            className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
            onClick={handleClose}
          >
            Checkout
          </Link>
          <button
            onClick={handleClose}
            className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors text-sm font-medium"
          >
            Continue shopping
          </button>
        </div>
      </div>

      <style>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}
