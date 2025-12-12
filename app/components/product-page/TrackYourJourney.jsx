export default function TrackYourJourney() {
  return (
    <>
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
            onError={(e) => {
              e.target.style.display = 'none';
              console.error('Image failed to load. Please update the image URL in TrackYourJourney.jsx');
            }}
          />
        </div>

        {/* Feature Cards */}
        <div className="w-full lg:w-[544px] flex flex-col gap-8 flex-shrink-0">
          {/* Progress Tracking Card */}
          <div className="bg-neutral-warm rounded-xl border-t border-r border-b border-l-4 border-t-teal-green/70 border-r-teal-green/70 border-b-teal-green/70 border-l-teal-green p-6 flex gap-6">
            <div className="w-14 h-14 rounded-xl bg-teal-green/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M25.6668 8.16675L15.7502 18.0834L9.91683 12.25L2.3335 19.8334M25.6668 8.16675H18.6668M25.6668 8.16675V15.1667" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-3xl leading-9 tracking-[-0.75px] text-teal-green font-normal">
                Progress Tracking
              </h3>
              <p className="font-roboto text-base leading-[27.2px] text-earth-brown">
                Monitor symptoms, energy levels, and overall wellness
              </p>
            </div>
          </div>

          {/* Daily Check-ins Card */}
          <div className="bg-neutral-warm rounded-xl border-t border-r border-b border-l-4 border-t-teal-green/70 border-r-teal-green/70 border-b-teal-green/70 border-l-teal-green p-6 flex gap-6">
            <div className="w-14 h-14 rounded-xl bg-teal-green/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.33333 2.33325V6.99992M18.6667 2.33325V6.99992M3.5 11.6666H24.5M5.83333 4.66659H22.1667C23.4553 4.66659 24.5 5.71133 24.5 6.99992V23.3333C24.5 24.6218 23.4553 25.6666 22.1667 25.6666H5.83333C4.54467 25.6666 3.5 24.6218 3.5 23.3333V6.99992C3.5 5.71133 4.54467 4.66659 5.83333 4.66659Z" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-3xl leading-9 tracking-[-0.75px] text-teal-green font-normal">
                Daily Check-ins
              </h3>
              <p className="font-roboto text-base leading-[27.2px] text-earth-brown">
                Simple daily logging to track your journey
              </p>
            </div>
          </div>

          {/* Earn Rewards Card */}
          <div className="bg-neutral-warm rounded-xl border-t border-r border-b border-l-4 border-t-teal-green/70 border-r-teal-green/70 border-b-teal-green/70 border-l-teal-green p-6 flex gap-6">
            <div className="w-14 h-14 rounded-xl bg-teal-green/10 flex items-center justify-center flex-shrink-0">
              <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.0565 15.0385L19.824 24.9855C19.8438 25.1026 19.8274 25.223 19.7769 25.3305C19.7264 25.4381 19.6443 25.5276 19.5416 25.5873C19.4388 25.6469 19.3203 25.6737 19.2019 25.6642C19.0835 25.6546 18.9709 25.6091 18.879 25.5338L14.7023 22.399C14.5007 22.2484 14.2558 22.167 14.0041 22.167C13.7524 22.167 13.5075 22.2484 13.3058 22.399L9.12217 25.5327C9.03042 25.6078 8.91776 25.6532 8.79955 25.6628C8.68134 25.6724 8.56301 25.6456 8.46031 25.5862C8.35761 25.5267 8.27551 25.4374 8.2249 25.3301C8.1743 25.2227 8.15773 25.1025 8.17717 24.9855L9.9435 15.0385M21 9.33325C21 13.1992 17.866 16.3333 14 16.3333C10.134 16.3333 7 13.1992 7 9.33325C7 5.46725 10.134 2.33325 14 2.33325C17.866 2.33325 21 5.46725 21 9.33325Z" stroke="#275B52" strokeWidth="2.33333" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-playfair text-3xl leading-9 tracking-[-0.75px] text-teal-green font-normal">
                Earn Rewards
              </h3>
              <p className="font-roboto text-base leading-[27.2px] text-earth-brown">
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
  </>
  );
}