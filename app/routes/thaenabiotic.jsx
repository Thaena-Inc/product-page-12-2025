import {useLoaderData} from 'react-router';
import {getSelectedProductOptions} from '@shopify/hydrogen';
import ThaenaProductPageFinal from '../components/product-page/ThaenaProductPageFinal.jsx';

/**
 * @param {Route.LoaderArgs} args
 */
export async function loader(args) {
  const {context, request} = args;
  const {storefront} = context;
  
  // Try to find the ThaenaBiotic product - adjust handle if needed
  // Common handles: 'thaenabiotic', 'thaena-biotic', 'thaenabiotic-postbiotic-supplement'
  const handle = 'thaenabiotic'; // You may need to adjust this to match your actual product handle
  
  try {
    const {product} = await storefront.query(PRODUCT_QUERY, {
      variables: {
        handle,
        selectedOptions: getSelectedProductOptions(request),
      },
    });

    if (!product?.id) {
      // If product not found, return null and components will handle gracefully
      console.warn(`Product with handle "${handle}" not found. Please check the product handle in thaenabiotic.jsx`);
      return {product: null};
    }

    return {product};
  } catch (error) {
    console.error('Error fetching product:', error);
    return {product: null};
  }
}

export default function ThaenaBioticRoute() {
  /** @type {LoaderReturnData} */
  const {product} = useLoaderData();
  
  return <ThaenaProductPageFinal product={product} />;
}

const PRODUCT_QUERY = `#graphql
  query Product(
    $country: CountryCode
    $handle: String!
    $language: LanguageCode
    $selectedOptions: [SelectedOptionInput!]!
  ) @inContext(country: $country, language: $language) {
    product(handle: $handle) {
      id
      title
      handle
      featuredImage {
        id
        url
        altText
        width
        height
      }
      media(first: 10) {
        nodes {
          ... on MediaImage {
            id
            image {
              id
              url
              altText
              width
              height
            }
          }
        }
      }
      selectedOrFirstAvailableVariant(selectedOptions: $selectedOptions, ignoreUnknownOptions: true, caseInsensitiveMatch: true) {
        id
        image {
          id
          url
          altText
          width
          height
        }
      }
    }
  }
`;

/** @typedef {import('./+types/thaenabiotic').Route} Route */
/** @typedef {import('@shopify/remix-oxygen').SerializeFrom<typeof loader>} LoaderReturnData */
