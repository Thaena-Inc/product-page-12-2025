/**
 * Dispatches a custom event when an item is added to cart
 * @param {Object} detail - Event detail containing cart item information
 * @param {string} [detail.imageUrl] - Product image URL
 * @param {string} [detail.title] - Product title
 * @param {string} [detail.variantTitle] - Variant/selected options text
 * @param {number} [detail.quantity] - Quantity added
 */
export function dispatchCartItemAdded(detail) {
  if (typeof window === 'undefined') return;
  
  window.dispatchEvent(
    new CustomEvent('cart:itemAdded', { detail })
  );
}
