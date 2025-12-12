export default function WhatsInThaenaBiotic() {
    return (
      <>
      {/* What's in ThaenaBiotic Section */}
      <div className="bg-neutral-warm">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-24 py-20">
          {/* Header */}
          <div className="max-w-[896px] mx-auto mb-16">
            <h2 className="font-playfair text-3xl md:text-4xl lg:text-[48px] leading-[1] lg:leading-[48px] tracking-[-1.2px] text-teal-green text-center font-normal mb-6">
              What's in ThaenaBiotic®
            </h2>
            <p className="font-roboto text-lg md:text-xl leading-7 text-slate-dark text-center">
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
                  onError={(e) => {
                    e.target.style.display = 'none';
                    console.error('Image failed to load. Please update the image URL in WhatsInThaenaBiotic.jsx');
                  }}
                />
                <div className="absolute inset-0 rounded-md shadow-[inset_0_0_0_1px_sage-grey/20]"></div>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1">
              <p className="font-roboto text-lg md:text-xl leading-7 text-slate-dark/80 mb-8">
                We highlight a few of the most well-known and well-studied postbiotics below, but they're only the beginning. Because it all comes from humans — not lab beakers — you get the real-world diversity and complexity that can only come from a human gut.
              </p>

              {/* 2x2 Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-8">
                {/* Short-chain fatty acids */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Short-chain fatty acids
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-slate-dark/70">
                    Energy for gut cells
                  </p>
                </div>

                {/* Amino acids */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Amino acids
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-slate-dark/70">
                    Building blocks of life
                  </p>
                </div>

                {/* Indoles */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Indoles
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-slate-dark/70">
                    Neurological signaling
                  </p>
                </div>

                {/* Peptides */}
                <div className="border-l-2 border-golden pl-7">
                  <h3 className="font-playfair text-[22px] font-medium leading-8 tracking-[-0.48px] text-slate-dark mb-2">
                    Peptides
                  </h3>
                  <p className="font-roboto text-base leading-[26px] text-slate-dark/70">
                    Cellular communication
                  </p>
                </div>
              </div>

              {/* Additional Metabolites */}
              <div className="border-l-2 border-rust-dark pl-7">
                <h3 className="font-playfair text-[22px] font-medium leading-10 tracking-[-0.48px] text-slate-dark">
                  + 10,000+ additional human-derived metabolites
                </h3>
                <p className="font-roboto text-base leading-[26px] text-slate-dark/70">
                  Science is still mapping them — but your gut already knows what to do with them.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    );
  }
  