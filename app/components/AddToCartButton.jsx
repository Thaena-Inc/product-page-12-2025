import {useEffect, useRef} from 'react';
import {CartForm} from '@shopify/hydrogen';
import {dispatchCartItemAdded} from '~/lib/cartFeedback';

/**
 * @param {{
 *   analytics?: unknown;
 *   children: React.ReactNode;
 *   disabled?: boolean;
 *   lines: Array<OptimisticCartLineInput>;
 *   onClick?: () => void;
 * }}
 */
export function AddToCartButton({
  analytics,
  children,
  disabled,
  lines,
  onClick,
  className,
}) {
  return (
    <CartForm route="/cart" inputs={{lines}} action={CartForm.ACTIONS.LinesAdd}>
      {(fetcher) => (
        <>
          <CartFeedbackTrigger fetcher={fetcher} lines={lines} />
          <input
            name="analytics"
            type="hidden"
            value={JSON.stringify(analytics)}
          />
          <button
            type="submit"
            onClick={onClick}
            disabled={disabled ?? fetcher.state !== 'idle'}
            className={className}
          >
            {children}
          </button>
        </>
      )}
    </CartForm>
  );
}

/**
 * Inner component that tracks fetcher state and dispatches cart feedback event on success
 * @param {{fetcher: FetcherWithComponents; lines: Array<OptimisticCartLineInput>}}
 */
function CartFeedbackTrigger({fetcher, lines}) {
  const prevStateRef = useRef(fetcher.state);
  const lastDispatchedDataRef = useRef(null);

  useEffect(() => {
    const wasSubmitting = prevStateRef.current === 'submitting';
    const isNowIdle = fetcher.state === 'idle';
    const hasData = fetcher.data && !fetcher.data.errors;

    if (wasSubmitting && isNowIdle && hasData) {
      // Check if we've already dispatched for this data
      const currentDataId = JSON.stringify(fetcher.data);
      if (lastDispatchedDataRef.current !== currentDataId) {
        // Calculate quantity
        const totalQuantity =
          lines.reduce((sum, line) => sum + (line.quantity || 0), 0) || 1;

        dispatchCartItemAdded({
          title: 'Added to bag',
          quantity: totalQuantity,
        });

        lastDispatchedDataRef.current = currentDataId;
      }
    }

    prevStateRef.current = fetcher.state;
  }, [fetcher.state, fetcher.data, lines]);

  return null;
}

/** @typedef {import('react-router').FetcherWithComponents} FetcherWithComponents */
/** @typedef {import('@shopify/hydrogen').OptimisticCartLineInput} OptimisticCartLineInput */
