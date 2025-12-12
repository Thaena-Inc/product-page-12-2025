export default function FinalCTA() {
  return (
    <>
    {/* Final CTA Hero Section */}
    <div
    className="relative flex items-center justify-center py-24 md:py-32 lg:py-40 px-6 md:px-16 lg:px-80 bg-neutral-light overflow-hidden"
    style={{
      backgroundImage: `linear-gradient(0deg, rgba(167, 179, 167, 0.50) 0%, rgba(167, 179, 167, 0.50) 100%), url('https://api.builder.io/api/v1/image/assets/TEMP/80793d93bdf389f5d69e348e63b2dc293d01eac3?width=2849')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }}
    onError={() => {
      console.error('Background image failed to load. Please update the image URL in FinalCTA.jsx');
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