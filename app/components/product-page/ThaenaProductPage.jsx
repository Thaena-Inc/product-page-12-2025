import { useState } from 'react';
import { Minus, Plus, Check } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import {AddToCartButton} from '~/components/AddToCartButton';

const VARIANT_ID_30 = "gid://shopify/ProductVariant/42146515615939";
const VARIANT_ID_90 = "gid://shopify/ProductVariant/42146515648707";

export default function Index() {
  const [selectedSize, setSelectedSize] = useState('30');
  const [quantity, setQuantity] = useState(1);

  const decrementQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <>
      {/* Product Section */}
      <div className="min-h-screen bg-[rgba(109,79,44,0.20)]">
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
              <img 
                src="https://api.builder.io/api/v1/image/assets/TEMP/1250ec8db2053fe583e1b891dfcd94333b4ca901?width=946" 
                alt="ThaenaBiotic Supplement Bottle"
                className="w-full max-w-[473px] h-auto"
              />
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
                <div className="flex items-center justify-center w-[122px] h-9 border-[0.5px] border-[rgba(67,65,79,0.30)] gap-8">
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
                  <div className="border-2 border-[rgba(28,94,84,0.30)] rounded-xl bg-neutral-light p-8 pt-12">
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
                        <div className="w-5 h-5 rounded-full bg-[rgba(28,94,84,0.10)] flex items-center justify-center flex-shrink-0">
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
                          quantity,   // ← uses your existing state
                        },
                      ]}
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
                  <div className="border-2 border-[rgba(160,93,64,0.30)] rounded-xl bg-neutral-light p-8 pt-12">
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
                          quantity,   // ← uses your existing state
                        },
                      ]}
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

      {/* What's in ThaenaBiotic Section */}
      <div className="bg-neutral-warm">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          {/* Header */}
          <div className="max-w-[896px] mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal mb-6">
              What's in ThaenaBiotic®
            </h2>
            <p className="font-roboto text-lg md:text-xl leading-7 text-[rgba(68,65,78,0.80)] text-center">
              ThaenaBiotic® delivers over 13,000 distinct metabolites made by healthy microbiomes — not created in a lab, but naturally fermented inside a healthy human donor.
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Image */}
            <div className="w-full lg:w-[592px] flex-shrink-0">
              <div className="relative rounded-md overflow-hidden">
                <img 
                  src="https://api.builder.io/api/v1/image/assets/TEMP/f75cf48b79dc5ec7bbad5dbea65ad7a76f78ef6e?width=1184"
                  alt="Abstract visualization of healthy microbiome metabolites and molecular structures"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 rounded-md shadow-[inset_0_0_0_1px_rgba(168,179,168,0.20)]"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-roboto text-lg md:text-xl leading-7 text-[rgba(68,65,78,0.80)] mb-8">
                We highlight a few of the most well-known and well-studied postbiotics below, but they're only the beginning. Because it all comes from humans — not lab beakers — you get the real-world diversity and complexity that can only come from a human gut.
              </p>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                {/* Short-chain fatty acids */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Short-chain fatty acids
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.70)]">
                    Energy for gut cells
                  </p>
                </div>

                {/* Amino acids */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Amino acids
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.70)]">
                    Building blocks of life
                  </p>
                </div>

                {/* Indoles */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Indoles
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.70)]">
                    Neurological signaling
                  </p>
                </div>

                {/* Peptides */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Peptides
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.70)]">
                    Cellular communication
                  </p>
                </div>
              </div>

              {/* Additional Metabolites */}
              <div className="border-l-2 border-rust-dark pl-7">
                <h3 className="font-playfair text-[22px] font-medium leading-10 tracking-[-0.48px] text-slate-dark">
                  + 10,000+ additional human-derived metabolites
                </h3>
                <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.70)]">
                  Science is still mapping them — but your gut already knows what to do with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Is ThaenaBiotic for You Section */}
      <div className="bg-neutral-light">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          {/* Header */}
          <div className="mb-16 text-center">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-0.96px] text-teal-green font-normal">
              Is ThaenaBiotic® for You?
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="flex flex-wrap gap-6 mb-16">
            {/* Card 1: Tried probiotics */}
            <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-[rgba(159,93,60,0.30)] border-r-[rgba(159,93,60,0.30)] border-b-[rgba(159,93,60,0.30)] border-l-sepia shadow-sm p-8 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-full bg-[rgba(159,93,60,0.10)] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9.9165 9.91675L18.0832 18.0834M12.2498 23.9167L23.9165 12.25C24.4617 11.7158 24.8955 11.0788 25.193 10.3758C25.4904 9.67278 25.6455 8.91786 25.6494 8.15461C25.6532 7.39136 25.5057 6.63491 25.2154 5.92896C24.9251 5.22301 24.4977 4.58163 23.958 4.04194C23.4183 3.50225 22.7769 3.07486 22.071 2.78457C21.365 2.49429 20.6086 2.34674 19.8453 2.35061C19.082 2.35447 18.3271 2.50961 17.6241 2.80705C16.9211 3.10449 16.2841 3.53828 15.7498 4.08341L4.0832 15.75C3.53801 16.2843 3.10421 16.9212 2.80677 17.6242C2.50933 18.3272 2.35419 19.0822 2.35033 19.8454C2.34646 20.6087 2.49401 21.3651 2.7843 22.0711C3.07458 22.777 3.50197 23.4184 4.04166 23.9581C4.58136 24.4978 5.22274 24.9252 5.92869 25.2155C6.63464 25.5058 7.39109 25.6533 8.15434 25.6495C8.91759 25.6456 9.67251 25.4905 10.3755 25.193C11.0785 24.8956 11.7155 24.4618 12.2498 23.9167Z" stroke="#9F5D3C" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark">
                You've tried probiotics… but you still don't feel right.
              </h3>
              <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.80)]">
                Most probiotics add bacteria your body doesn't recognize — they often can't colonize or communicate with your native microbes. ThaenaBiotic® delivers what your gut actually uses: the nutrient signals (postbiotics) that tell your body how to digest, regulate, and heal.
              </p>
              <button className="flex items-center justify-center gap-2 text-sepia font-roboto text-sm leading-5 hover:opacity-80 transition-opacity">
                Learn More About the Difference Between Probiotics + ThaenaBiotic®
                <svg className="w-[9.33px] h-[9.33px] flex-shrink-0" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.666504 5.33342H9.99984M9.99984 5.33342L5.33317 0.666748M9.99984 5.33342L5.33317 10.0001" stroke="#9F5D3C" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Card 2: Recovering from antibiotics */}
            <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-[rgba(41,86,77,0.30)] border-r-[rgba(41,86,77,0.30)] border-b-[rgba(41,86,77,0.30)] border-l-teal-dark shadow-sm p-8 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-full bg-[rgba(41,86,77,0.10)] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M22.1665 16.3333C23.905 14.63 25.6665 12.5883 25.6665 9.91667C25.6665 8.21487 24.9905 6.5828 23.7871 5.37941C22.5838 4.17602 20.9517 3.5 19.2499 3.5C17.1965 3.5 15.7499 4.08333 13.9999 5.83333C12.2499 4.08333 10.8032 3.5 8.74987 3.5C7.04807 3.5 5.416 4.17602 4.21261 5.37941C3.00922 6.5828 2.3332 8.21487 2.3332 9.91667C2.3332 12.6 4.0832 14.6417 5.8332 16.3333L13.9999 24.5L22.1665 16.3333Z" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark">
                You're recovering from antibiotics, illness, or burnout.
              </h3>
              <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.80)]">
                When your microbiome's been wiped out, your body loses access to key compounds that regulate digestion, energy, and mood. ThaenaBiotic® replenishes those microbial nutrients — safely, without live bacteria — helping your system remember how to balance itself.
              </p>
            </div>

            {/* Card 3: Diet limited */}
            <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-[rgba(143,86,129,0.30)] border-r-[rgba(143,86,129,0.30)] border-b-[rgba(143,86,129,0.30)] border-l-purple shadow-sm p-8 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-full bg-[rgba(143,86,129,0.10)] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.3309 3.5V8.16667M25.6643 5.83333H20.9976M4.66431 19.8333V22.1667M5.83098 21H3.49764M11.5908 18.0833C11.4866 17.6795 11.2762 17.3111 10.9814 17.0162C10.6865 16.7214 10.318 16.511 9.91431 16.4068L2.75681 14.5611C2.63461 14.5265 2.52719 14.4529 2.45065 14.3517C2.37411 14.2504 2.33271 14.1269 2.33271 14C2.33271 13.873 2.37411 13.7496 2.45065 13.6483C2.52719 13.547 2.63461 13.4735 2.75681 13.4388L9.91431 11.592C10.318 11.4879 10.6862 11.2776 10.9811 10.983C11.2759 10.6884 11.4864 10.3202 11.5908 9.91667L13.4364 2.75917C13.4708 2.63652 13.5442 2.52854 13.6456 2.45161C13.7471 2.37469 13.8709 2.33301 13.9982 2.33301C14.1255 2.33301 14.2493 2.37469 14.3507 2.45161C14.4522 2.52854 14.5256 2.63652 14.56 2.75917L16.4044 9.91667C16.5086 10.3204 16.719 10.6888 17.0139 10.9837C17.3087 11.2785 17.6772 11.489 18.0809 11.5931L25.2384 13.4376C25.3615 13.4716 25.4701 13.545 25.5474 13.6466C25.6248 13.7481 25.6667 13.8723 25.6667 14C25.6667 14.1276 25.6248 14.2518 25.5474 14.3534C25.4701 14.455 25.3615 14.5283 25.2384 14.5623L18.0809 16.4068C17.6772 16.511 17.3087 16.7214 17.0139 17.0162C16.719 17.3111 16.5086 17.6795 16.4044 18.0833L14.5588 25.2408C14.5245 25.3634 14.451 25.4714 14.3496 25.5483C14.2481 25.6253 14.1243 25.6669 13.997 25.6669C13.8697 25.6669 13.7459 25.6253 13.6445 25.5483C13.543 25.4714 13.4695 25.3634 13.4353 25.2408L11.5908 18.0833Z" stroke="#8F5681" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark">
                Your diet is limited by sensitivities or fear of flares.
              </h3>
              <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.80)]">
                If you can't tolerate certain foods, your microbes can't make the nutrients those foods would normally create. Our donors eat the full spectrum of foods — so ThaenaBiotic® gives you the full spectrum of postbiotics. You get the nourishment your gut's been missing until you can reintroduce foods naturally again over time.
              </p>
              <button className="flex items-center justify-center gap-2 text-purple font-roboto text-sm leading-5 hover:opacity-80 transition-opacity">
                🌿 To Help You Build Toward Real Food Freedom — Without Fear
              </button>
            </div>

            {/* Card 4: Optimized everything */}
            <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-[rgba(109,79,44,0.30)] border-r-[rgba(109,79,44,0.30)] border-b-[rgba(109,79,44,0.30)] border-l-[#6D4F2C] shadow-sm p-8 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-full bg-[rgba(109,79,44,0.10)] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2.9165 25.0834C2.9165 21.5834 5.07484 18.8301 8.84317 18.0834C11.6665 17.5234 14.5832 15.7501 15.7498 14.5834M13.4165 23.9167C11.3679 23.923 9.39177 23.159 7.88008 21.7764C6.36839 20.3938 5.4316 18.4936 5.25541 16.4525C5.07921 14.4115 5.67653 12.3788 6.92889 10.7576C8.18126 9.13636 9.99721 8.04509 12.0165 7.70008C18.6665 6.41675 20.4165 5.81008 22.7498 2.91675C23.9165 5.25008 25.0832 7.79341 25.0832 12.2501C25.0832 18.6667 19.5065 23.9167 13.4165 23.9167Z" stroke="#6D4F2C" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark">
                You've optimized everything else — now it's time to upgrade your biology.
              </h3>
              <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.80)]">
                You track sleep. You train recovery. You fine-tune every system — except the one that runs them all: your gut. ThaenaBiotic® delivers the rare, human-native metabolites produced by the healthiest microbiomes on Earth. Think of it as molecular intelligence for high-functioning biology.
              </p>
            </div>

            {/* Card 5: Just want it to work */}
            <div className="w-full lg:w-[calc(50%-12px)] bg-white rounded-md border-t border-r border-b border-l-4 border-t-[rgba(168,179,168,0.30)] border-r-[rgba(168,179,168,0.30)] border-b-[rgba(168,179,168,0.30)] border-l-sage-grey shadow-sm p-8 flex flex-col gap-5">
              <div className="w-14 h-14 rounded-full bg-[rgba(168,179,168,0.10)] flex items-center justify-center flex-shrink-0">
                <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8335 23.3333C10.7849 23.3395 8.80881 22.5755 7.29712 21.1929C5.78542 19.8103 4.84857 17.9101 4.67237 15.869C4.49617 13.828 5.09348 11.7953 6.34585 10.1741C7.59822 8.55289 9.41416 7.46157 11.4335 7.11659C18.0835 5.83325 19.8335 5.22659 22.1668 2.33325C23.3335 4.66659 24.5002 7.20992 24.5002 11.6666C24.5002 18.0833 18.9235 23.3333 12.8335 23.3333Z" stroke="#A8B3A8" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2.3335 24.5C2.3335 21 4.49183 18.2467 8.26016 17.5C11.0835 16.94 14.0002 15.1667 15.1668 14" stroke="#A8B3A8" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3 className="font-playfair text-2xl font-medium leading-8 tracking-[-0.48px] text-slate-dark">
                You just want your gut to work — every day, without thinking about it.
              </h3>
              <p className="font-roboto text-base leading-[26px] text-[rgba(68,65,78,0.80)]">
                ThaenaBiotic® helps regulate rhythm, comfort, and consistency from the inside out. Whether you deal with constipation, loose stools, or unpredictable digestion, our human-derived postbiotics help your body find its natural pace again.
              </p>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="flex flex-col items-center gap-6">
            <div className="w-16 h-[2px] bg-golden"></div>
            <p className="font-roboto text-lg leading-7 text-[rgba(68,65,78,0.80)] text-center max-w-2xl">
              Still not sure? Talk to your healthcare provider about whether ThaenaBiotic® is right for you.
            </p>
            <button className="h-14 px-11 rounded-xl border-2 border-purple bg-neutral-light hover:opacity-90 transition-opacity">
              <span className="font-roboto-mono text-sm font-medium leading-5 text-purple">Explore the Science</span>
            </button>
          </div>
        </div>
      </div>

      {/* How to Take ThaenaBiotic Section */}
      <div className="bg-[rgba(109,79,44,0.20)]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          {/* Header */}
          <div className="mb-12">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-0.96px] text-teal-green text-center font-normal mb-4">
              How to Take ThaenaBiotic®
            </h2>
            <p className="font-roboto text-lg md:text-xl leading-7 text-[rgba(68,65,78,0.80)] text-center">
              Flexible dosing for your lifestyle. Take with or without food, morning or evening.
            </p>
          </div>

          {/* Dosage Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Card 1: Daily Maintenance */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-sage self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">EVERYDAY</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Daily Maintenance
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                1-2 capsules
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                For ongoing microbiome support and overall wellness
              </p>
            </div>

            {/* Card 2: Travel Support */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-sepia self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">ON THE GO</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Travel Support
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                2-3 capsules
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                Before and during travel to maintain gut balance
              </p>
            </div>

            {/* Card 3: Acute Support */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-teal-green self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">INTENSIVE</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Acute Support
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                3-4 capsules
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                During stress, illness recovery, or disruption
              </p>
            </div>

            {/* Card 4: Professional Guidance */}
            <div className="bg-neutral-light rounded-xl border border-[#A8B3A8] shadow-sm p-6 flex flex-col gap-3">
              <div className="inline-flex items-center px-3 py-[2.667px] rounded-full bg-golden self-start">
                <span className="font-roboto-mono text-xs font-bold leading-4 text-white">PERSONALIZED</span>
              </div>
              <h3 className="font-cormorant text-xl font-semibold leading-7 tracking-[-0.4px] text-slate-dark">
                Professional Guidance
              </h3>
              <p className="font-roboto text-2xl font-bold leading-9 text-purple">
                As directed
              </p>
              <p className="font-roboto text-sm leading-[22.75px] text-slate-dark">
                Follow your healthcare provider's recommendations
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Track Your Journey Section */}
      <div className="bg-neutral-light">
        <div className="max-w-[1200px] mx-auto px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="flex flex-col items-center gap-6 mb-14">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
              Track Your Journey
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
            <p className="font-roboto text-lg md:text-xl leading-7 text-slate-dark text-center max-w-[768px]">
              Monitor your transformation with CHLOE, our companion app. Complete 30 days of tracking and earn 30% off your next order.
            </p>
          </div>

          {/* Content Grid */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 mb-14">
            {/* Phone Mockup */}
            <div className="w-full lg:w-[544px] flex justify-center flex-shrink-0">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/5de8fe995069f8afc14440c29b3e088a977d176b?width=768"
                alt="CHLOE app progress tracking interface showing daily wellness metrics"
                className="w-full max-w-[384px] h-auto rounded-2xl shadow-2xl"
              />
            </div>

            {/* Feature Cards */}
            <div className="w-full lg:w-[544px] flex flex-col gap-8 flex-shrink-0">
              {/* Progress Tracking Card */}
              <div className="bg-neutral-warm rounded-xl border-t border-r border-b border-l-4 border-t-[rgba(39,91,82,0.70)] border-r-[rgba(39,91,82,0.70)] border-b-[rgba(39,91,82,0.70)] border-l-teal-green p-6 flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-[rgba(28,94,84,0.10)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.6668 8.16675L15.7502 18.0834L9.91683 12.25L2.3335 19.8334M25.6668 8.16675H18.6668M25.6668 8.16675V15.1667" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-playfair text-3xl leading-9 tracking-[-0.75px] text-teal-green font-normal">
                    Progress Tracking
                  </h3>
                  <p className="font-roboto text-base leading-[27.2px] text-[#6B4F2E]">
                    Monitor symptoms, energy levels, and overall wellness
                  </p>
                </div>
              </div>

              {/* Daily Check-ins Card */}
              <div className="bg-neutral-warm rounded-xl border-t border-r border-b border-l-4 border-t-[rgba(39,91,82,0.70)] border-r-[rgba(39,91,82,0.70)] border-b-[rgba(39,91,82,0.70)] border-l-teal-green p-6 flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-[rgba(28,94,84,0.10)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.33333 2.33325V6.99992M18.6667 2.33325V6.99992M3.5 11.6666H24.5M5.83333 4.66659H22.1667C23.4553 4.66659 24.5 5.71133 24.5 6.99992V23.3333C24.5 24.6218 23.4553 25.6666 22.1667 25.6666H5.83333C4.54467 25.6666 3.5 24.6218 3.5 23.3333V6.99992C3.5 5.71133 4.54467 4.66659 5.83333 4.66659Z" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-playfair text-3xl leading-9 tracking-[-0.75px] text-teal-green font-normal">
                    Daily Check-ins
                  </h3>
                  <p className="font-roboto text-base leading-[27.2px] text-[#6B4F2E]">
                    Simple daily logging to track your journey
                  </p>
                </div>
              </div>

              {/* Earn Rewards Card */}
              <div className="bg-neutral-warm rounded-xl border-t border-r border-b border-l-4 border-t-[rgba(39,91,82,0.70)] border-r-[rgba(39,91,82,0.70)] border-b-[rgba(39,91,82,0.70)] border-l-teal-green p-6 flex gap-6">
                <div className="w-14 h-14 rounded-xl bg-[rgba(28,94,84,0.10)] flex items-center justify-center flex-shrink-0">
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18.0565 15.0385L19.824 24.9855C19.8438 25.1026 19.8274 25.223 19.7769 25.3305C19.7264 25.4381 19.6443 25.5276 19.5416 25.5873C19.4388 25.6469 19.3203 25.6737 19.2019 25.6642C19.0835 25.6546 18.9709 25.6091 18.879 25.5338L14.7023 22.399C14.5007 22.2484 14.2558 22.167 14.0041 22.167C13.7524 22.167 13.5075 22.2484 13.3058 22.399L9.12217 25.5327C9.03042 25.6078 8.91776 25.6532 8.79955 25.6628C8.68134 25.6724 8.56301 25.6456 8.46031 25.5862C8.35761 25.5267 8.27551 25.4374 8.2249 25.3301C8.1743 25.2227 8.15773 25.1025 8.17717 24.9855L9.9435 15.0385M21 9.33325C21 13.1992 17.866 16.3333 14 16.3333C10.134 16.3333 7 13.1992 7 9.33325C7 5.46725 10.134 2.33325 14 2.33325C17.866 2.33325 21 5.46725 21 9.33325Z" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-playfair text-3xl leading-9 tracking-[-0.75px] text-teal-green font-normal">
                    Earn Rewards
                  </h3>
                  <p className="font-roboto text-base leading-[27.2px] text-[#6B4F2E]">
                    30% off your next order after completing 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Download Button */}
          <div className="flex justify-center">
            <button className="h-14 px-11 rounded-xl border-2 border-purple hover:opacity-90 transition-opacity">
              <span className="font-roboto-mono text-base font-medium leading-6 text-purple">Download CHLOE App</span>
            </button>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-neutral-warm">
        <div className="max-w-[1200px] mx-auto px-8 py-16 lg:py-24">
          {/* Header */}
          <div className="flex flex-col items-center gap-4 mb-16">
            <p className="font-roboto-mono text-sm leading-5 tracking-[0.35px] uppercase text-rust-dark text-center">
              Common Questions
            </p>
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
              Frequently Asked Questions
            </h2>
            <div className="w-24 h-[1px] bg-sage"></div>
            <p className="font-roboto text-lg md:text-xl leading-7 text-slate-dark text-center max-w-[768px] pt-6">
              Get answers to the most common questions about ThaenaBiotic® and our microbiome restoration process.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-[896px] mx-auto">
            <Accordion type="single" collapsible className="flex flex-col gap-4">
              <AccordionItem value="item-1" className="bg-neutral-light rounded-xl border-none">
                <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
                  <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                    Why poop?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-0">
                  <p className="font-roboto text-base leading-7 text-slate-dark">
                    ThaenaBiotic® is derived from human stool because that's where the most diverse and beneficial postbiotic metabolites are found. Unlike lab-grown alternatives, our human-derived approach captures the full spectrum of compounds your gut actually recognizes and uses.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-neutral-light rounded-xl border-none">
                <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
                  <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                    Are the molecules still viable?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-0">
                  <p className="font-roboto text-base leading-7 text-slate-dark">
                    Yes. Our proprietary sterilization and preservation process maintains the structural integrity of the metabolites while eliminating all live bacteria. The postbiotic compounds remain bioactive and ready to signal your gut.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-neutral-light rounded-xl border-none">
                <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
                  <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                    Don't I need "matching" bacteria?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-0">
                  <p className="font-roboto text-base leading-7 text-slate-dark">
                    No. ThaenaBiotic® doesn't add bacteria—it delivers the metabolites (postbiotics) that bacteria produce. Your existing microbiome can recognize and respond to these signals regardless of your individual bacterial strains.
                  </p>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-neutral-light rounded-xl border-none">
                <AccordionTrigger className="px-8 py-6 hover:no-underline" chevronColor="text-teal-green">
                  <span className="font-playfair text-lg font-medium leading-7 tracking-[-0.4px] text-teal-green text-left">
                    Can I take it in tandem with my other medications?
                  </span>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-6 pt-0">
                  <p className="font-roboto text-base leading-7 text-slate-dark">
                    ThaenaBiotic® is generally safe to take alongside most medications. However, we always recommend consulting with your healthcare provider before starting any new supplement, especially if you're on prescription medications or have specific health conditions.
                  </p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Final CTA Hero Section */}
      <div
        className="relative flex items-center justify-center py-24 md:py-32 lg:py-40 px-6 md:px-16 lg:px-80 bg-neutral-light overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(167, 179, 167, 0.50) 0%, rgba(167, 179, 167, 0.50) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/80793d93bdf389f5d69e348e63b2dc293d01eac3?width=2849')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-[786px] flex flex-col justify-center items-center gap-6 relative z-10">
          {/* Heading */}
          <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal">
            One Capsule. Thousands of Nutrients.
          </h2>

          {/* Subheading */}
          <div className="pb-4">
            <p className="font-roboto text-xl md:text-2xl lg:text-[28px] leading-[32.5px] text-slate-dark text-center">
              Everything your gut ecosystem needs to find its way back.
            </p>
          </div>

          {/* CTA Button */}
          <button className="h-14 px-10 py-7 flex items-center justify-center rounded-[10px] bg-mauve shadow-lg hover:opacity-90 transition-opacity">
            <span className="font-roboto text-lg font-medium leading-7 text-[#F9F5F1]">
              Shop ThaenaBiotic® Now
            </span>
          </button>
        </div>
      </div>
    </>
  );
}
