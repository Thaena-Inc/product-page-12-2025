import { useState } from "react";
import { Minus, Plus, Check } from "lucide-react";
import {Image} from '@shopify/hydrogen';
import {AddToCartButton} from '~/components/AddToCartButton';
import {useAside} from '~/components/Aside';

const VARIANT_ID_30 = "gid://shopify/ProductVariant/42146515615939";
const VARIANT_ID_90 = "gid://shopify/ProductVariant/42146515648707";

/**
 * @param {{
 *   productImage?: {
 *     url: string;
 *     altText?: string;
 *     width?: number;
 *     height?: number;
 *   } | null;
 * }}
 */
export default function HeroAndBuyBox({productImage}) {
  const [selectedSize, setSelectedSize] = useState("30");
  const [quantity, setQuantity] = useState(1);
  const {open} = useAside();

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
    {/* Product Section */}
    <div className="min-h-screen bg-earth-brown/20">
    <div className="max-w-[1200px] mx-auto px-8 py-16 lg:py-24">
      {/* Hero Section */}
      <div className="flex flex-col items-center gap-6 mb-16">
        <h1 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
          The Power of the Human Microbiome, In a Capsule.
        </h1>
        
        <div className="w-24 h-[1px] bg-sage"></div>
        
        <p className="font-roboto text-lg md:text-xl leading-7 text-slate-dark text-center max-w-[768px]">
          Shop our flagship product, ThaenaBiotic®, the world's first human-derived postbiotic supplement.
        </p>
      </div>

      {/* Product Details */}
      <div className="flex flex-col lg:flex-row items-start gap-8 mb-16">
        {/* Product Image */}
        <div className="w-full lg:w-[473px] flex justify-center lg:justify-start flex-shrink-0">
          {productImage ? (
            <Image
              data={productImage}
              alt={productImage.altText || "ThaenaBiotic Supplement Bottle"}
              className="w-full max-w-[473px] h-auto"
              sizes="(min-width: 1024px) 473px, 100vw"
              loading="eager"
            />
          ) : (
            <div className="w-full max-w-[473px] h-[473px] bg-neutral-warm flex items-center justify-center">
              <span className="font-roboto text-slate-dark/50">Product image loading...</span>
            </div>
          )}
        </div>

        {/* Product Details */}
        <div className="flex-1 w-full">
          <h2 className="font-playfair text-3xl md:text-[40px] leading-[1.2] tracking-[-1.2px] text-slate-dark font-normal mb-6">
            ThaenaBiotic®-  Postbiotic Supplement
          </h2>

          {/* Size Selection */}
          <div className="mb-8">
            <p className="font-roboto text-xl font-light leading-7 text-slate-dark mb-3">Size:</p>
            <div className="flex gap-8 mb-5">
              <button
                onClick={() => setSelectedSize('30')}
                className={`px-4 py-[7.34px] rounded-full border font-roboto text-base font-light leading-7 capitalize transition-colors ${
                  selectedSize === '30'
                    ? 'border-slate-dark bg-slate-dark text-neutral-light'
                    : 'border-slate-dark text-slate-dark bg-transparent'
                }`}
              >
                30 Capsules
              </button>
              <button
                onClick={() => setSelectedSize('90')}
                className={`px-4 py-[7.34px] rounded-full border font-roboto text-base font-light leading-7 capitalize transition-colors ${
                  selectedSize === '90'
                    ? 'border-slate-dark bg-slate-dark text-neutral-light'
                    : 'border-slate-dark text-slate-dark bg-transparent'
                }`}
              >
                90 Capsules
              </button>
            </div>
            <p className="font-roboto text-lg font-light leading-7 text-slate-dark">
              Our most popular option. Ideal for ongoing daily use.
            </p>
            <p className="font-roboto text-lg font-light leading-7 text-slate-dark">
              Best value for continued support and household use.
            </p>
          </div>

          {/* Quantity Selection */}
          <div className="mb-8">
            <p className="font-roboto text-xl font-light leading-7 text-slate-dark mb-2">Quantity:</p>
            <div className="flex items-center justify-center w-[122px] h-9 border-[0.5px] border-slate-dark/30 gap-8">
              <button onClick={decrementQuantity} className="flex-shrink-0">
                <Minus className="w-4 h-4 text-slate-dark" strokeWidth={1.6} />
              </button>
              <span className="font-roboto text-lg font-light leading-7 text-slate-dark">{quantity}</span>
              <button onClick={incrementQuantity} className="flex-shrink-0">
                <Plus className="w-4 h-4 text-slate-dark" strokeWidth={1.6} />
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {/* 30 Capsules Card */}
            <div className="relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <div className="px-4 py-[7.34px] rounded-full bg-teal-green">
                  <span className="font-roboto-mono text-sm leading-5 tracking-[0.35px] uppercase text-neutral-light">
                    Most Popular
                  </span>
                </div>
              </div>
              <div className="border-2 border-teal-green/30 rounded-xl bg-neutral-light p-8 pt-12">
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl leading-8 tracking-[-0.6px] text-slate-dark mb-2">
                    30 Capsules
                  </h3>
                  <p className="font-playfair text-5xl leading-[48px] text-teal-green">$199</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-teal-green flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">Sterilized & Safe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-teal-green flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">No refrigeration needed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-teal-green flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">No Live Bacteria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-teal-green flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">Human-derived, not lab-grown</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-teal-green flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">Full month supply</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-teal-green/10 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs">💰</span>
                    </div>
                    <span className="font-roboto text-sm leading-5 text-slate-dark underline">30-day money-back guarantee</span>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <AddToCartButton
                    lines={[
                      {
                        merchandiseId: VARIANT_ID_30,
                        quantity,
                      },
                    ]}
                    onClick={() => {
                      open('cart');
                    }}
                    className="w-full h-14 flex items-center justify-center rounded-xl border-2 border-teal-green bg-teal-green">
                    <span className="font-roboto-mono text-base font-medium leading-6 text-neutral-light">Add To Cart</span>
                  </AddToCartButton>
                  <button className="w-full h-10 flex items-center justify-center rounded-xl">
                    <span className="font-roboto text-xs font-medium leading-4 text-earth-brown">Subscribe & Save 5%</span>
                  </button>
                </div>
              </div>
            </div>

            {/* 90 Capsules Card */}
            <div className="relative">
              <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-10">
                <div className="px-4 py-[7.34px] rounded-full bg-rust-dark">
                  <span className="font-roboto-mono text-sm leading-5 tracking-[0.35px] uppercase text-neutral-light">
                    Best Value
                  </span>
                </div>
              </div>
              <div className="border-2 border-rust-dark/30 rounded-xl bg-neutral-light p-8 pt-12">
                <div className="text-center mb-6">
                  <h3 className="font-playfair text-2xl leading-8 tracking-[-0.6px] text-slate-dark mb-2">
                    90 Capsules
                  </h3>
                  <p className="font-playfair text-5xl leading-[48px] text-rust">$499</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-rust-dark flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">Sterilized & Safe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-rust-dark flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">No refrigeration needed</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-rust-dark flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">No Live Bacteria</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-rust-dark flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">Human-derived, not lab-grown</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-rust-dark flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">3 month supply</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Check className="w-3 h-2 text-rust-dark flex-shrink-0" strokeWidth={1.33} />
                    <span className="font-roboto text-sm leading-5 text-slate-dark">Maximum value</span>
                  </div>
                </div>

                <div className="space-y-3 pt-6">
                  <AddToCartButton
                    lines={[
                      {
                        merchandiseId: VARIANT_ID_90,
                        quantity,
                      },
                    ]}
                    onClick={() => {
                      open('cart');
                    }}
                    className="w-full h-14 flex items-center justify-center rounded-xl border-2 border-rust-dark bg-transparent">
                    <span className="font-roboto-mono text-base font-medium leading-6 text-slate-dark">Add To Cart</span>
                  </AddToCartButton>
                  <button className="w-full h-10 flex items-center justify-center rounded-xl">
                    <span className="font-roboto text-xs font-medium leading-4 text-[#6B4F2E]">Subscribe & Save 5%</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Login Support Section */}
      <div className="mb-8">
        <h3 className="font-roboto text-xl font-light leading-7 text-slate-dark mb-3">Need Login Support?</h3>
        <p className="font-roboto text-lg font-light leading-7 text-slate-dark mb-2">
          Trouble logging into your provider account? Call, text, or email us your order anytime and we can submit an order for your account and email you an invoice direct or take payment over the phone. Jessa Lydon is available Mon-Friday 9-4 (PT) and happy to help.
        </p>
        <p className="font-roboto text-lg font-light leading-7 text-slate-dark mb-4">
          Email: <a href="mailto:Info@Thaena.com" className="underline">Info@Thaena.com</a> | Phone: <a href="tel:5035068732" className="underline">(503) 506-8732</a>
        </p>
        <button className="px-6 py-[6px] rounded-full bg-slate-dark">
          <span className="font-roboto-mono text-base font-medium leading-6 text-neutral-light">Login</span>
        </button>
      </div>

      {/* Ingredients Section */}
      <div>
        <h3 className="font-roboto text-xl font-light leading-7 text-slate-dark mb-3">Ingredients:</h3>
        <p className="font-roboto text-lg font-light leading-7 text-slate-dark mb-2">
          Citric acid, ThaenaBiotic®, delayed release vegetarian capsules (vegetable cellulose, purified water)
        </p>
        <p className="font-roboto text-lg leading-7 text-slate-dark">
          <span className="font-normal">May contain trace amounts of:</span>{' '}
          <span className="font-light">milk, eggs, fish, tree nuts, crustacean shellfish, peanuts, wheat, soybeans, sesame, or other food allergens</span>
        </p>
      </div>
    </div>
  </div>
  </>
  );
}
