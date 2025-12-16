import { Link, Await } from "react-router";
import { Suspense } from "react";

/**
 * @param {FooterProps}
 */
export default function Footer({ footer: footerPromise, header, publicStoreDomain }) {
  return (
    <Suspense>
      <Await resolve={footerPromise}>
        {(footer) => (
          <footer className="bg-[#43414F] flex flex-col justify-start items-start p-16">
      <div className="mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 mb-12">
          {/* Left Section - Logo and Description */}
          <div className="flex-1 max-w-[544px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/165ca6af22e89a8d3a96e835cfefd004b296584b?width=260"
              alt="Thaena Logo"
              className="w-[130px] h-[36px] mb-6"
            />
            <div className="max-w-[448px]">
              <p className="text-[rgba(247,243,236,0.8)] text-sm leading-[22.75px] mb-6">
                Thaena is built on a simple truth: humans are ecosystems, and
                modern life erodes the microbial biodiversity that keeps us
                resilient. We exist to restore the postbiotic signals that help
                those ecosystems recover. Our work begins with ThaenaBiotic®,
                but our mission reaches far beyond a single product. This is
                Humans Healing Humans™.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center bg-[rgba(247,243,236,0.2)] rounded-full overflow-hidden p-1.25 border border-[rgba(247,243,236,0.2)] hover:opacity-80 transition-opacity"
                aria-label="Follow us on Facebook"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col justify-center items-center"
                >
                  <path
                    d="M15 1.66675H12.5C11.3949 1.66675 10.3351 2.10573 9.5537 2.88714C8.7723 3.66854 8.33331 4.72835 8.33331 5.83341V8.33341H5.83331V11.6667H8.33331V18.3334H11.6666V11.6667H14.1666L15 8.33341H11.6666V5.83341C11.6666 5.6124 11.7544 5.40044 11.9107 5.24416C12.067 5.08788 12.279 5.00008 12.5 5.00008H15V1.66675Z"
                    stroke="#F7F3EC"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center bg-[rgba(247,243,236,0.2)] rounded-full overflow-hidden p-1.25 border border-[rgba(247,243,236,0.2)] hover:opacity-80 transition-opacity"
                aria-label="Follow us on Instagram"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col justify-center items-center overflow-hidden p-1.25"
                >
                  <path
                    d="M14.1667 1.66675H5.83335C3.53217 1.66675 1.66669 3.53223 1.66669 5.83341V14.1667C1.66669 16.4679 3.53217 18.3334 5.83335 18.3334H14.1667C16.4679 18.3334 18.3334 16.4679 18.3334 14.1667V5.83341C18.3334 3.53223 16.4679 1.66675 14.1667 1.66675Z"
                    stroke="#F7F3EC"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.3333 9.47501C13.4362 10.1685 13.3177 10.8769 12.9948 11.4992C12.6719 12.1215 12.161 12.6262 11.5347 12.9414C10.9084 13.2566 10.1987 13.3663 9.5065 13.255C8.81428 13.1436 8.17481 12.8167 7.67904 12.321C7.18327 11.8252 6.85645 11.1857 6.74507 10.4935C6.63368 9.8013 6.7434 9.09159 7.05862 8.46532C7.37383 7.83905 7.8785 7.32812 8.50083 7.00521C9.12316 6.68229 9.83147 6.56383 10.525 6.66667C11.2324 6.77158 11.8874 7.10123 12.3931 7.60693C12.8988 8.11263 13.2284 8.76757 13.3333 9.47501Z"
                    stroke="#F7F3EC"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M14.5833 5.41675H14.5917"
                    stroke="#F7F3EC"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col justify-center items-center bg-[rgba(247,243,236,0.2)] rounded-full overflow-hidden p-1.25 border border-[rgba(247,243,236,0.2)] hover:opacity-80 transition-opacity"
                aria-label="Follow us on LinkedIn"
              >
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="flex flex-col justify-center items-center overflow-hidden p-1.25"
                >
                  <path
                    d="M13.3333 6.66675C14.6594 6.66675 15.9312 7.19353 16.8689 8.13121C17.8066 9.0689 18.3333 10.3407 18.3333 11.6667V17.5001H15V11.6667C15 11.2247 14.8244 10.8008 14.5119 10.4882C14.1993 10.1757 13.7754 10.0001 13.3333 10.0001C12.8913 10.0001 12.4674 10.1757 12.1548 10.4882C11.8423 10.8008 11.6667 11.2247 11.6667 11.6667V17.5001H8.33334V11.6667C8.33334 10.3407 8.86013 9.0689 9.79781 8.13121C10.7355 7.19353 12.0073 6.66675 13.3333 6.66675Z"
                    stroke="#F7F3EC"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M4.99999 7.5H1.66666V17.5H4.99999V7.5Z"
                    stroke="#F7F3EC"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M3.33332 5.00008C4.2538 5.00008 4.99999 4.25389 4.99999 3.33341C4.99999 2.41294 4.2538 1.66675 3.33332 1.66675C2.41285 1.66675 1.66666 2.41294 1.66666 3.33341C1.66666 4.25389 2.41285 5.00008 3.33332 5.00008Z"
                    stroke="#F7F3EC"
                    strokeWidth="1.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Section - Navigation Columns */}
          <div className="flex flex-col sm:flex-row gap-8 flex-1 justify-between lg:justify-end lg:gap-8">
            {/* Company Column */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <h3 className="text-[rgba(247,243,236,0.8)] font-mono text-sm font-semibold leading-5 tracking-[0.7px] uppercase">
                Company
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/about"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/contact"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  Contact Us
                </Link>
                <Link
                  to="/faqs"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  FAQs
                </Link>
              </nav>
            </div>

            {/* Resources Column */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <h3 className="text-[rgba(247,243,236,0.8)] font-mono text-sm font-semibold leading-5 tracking-[0.7px] uppercase">
                Resources
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/learn"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  Learn
                </Link>
                <Link
                  to="/guarantee"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  Money Back Guarantee
                </Link>
                <Link
                  to="/providers"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  Provider Directory
                </Link>
              </nav>
            </div>

            {/* Account Column */}
            <div className="flex flex-col gap-4 min-w-[200px]">
              <h3 className="text-[rgba(247,243,236,0.8)] font-mono text-sm font-semibold leading-5 tracking-[0.7px] uppercase">
                Account
              </h3>
              <nav className="flex flex-col gap-3">
                <Link
                  to="/login"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  Login
                </Link>
                <Link
                  to="/shop"
                  className="text-[rgba(247,243,236,0.8)] text-sm leading-5 hover:text-[rgba(247,243,236,1)] transition-colors"
                >
                  Shop
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Bottom Border and Copyright */}
        <div className="border-t border-[rgba(247,243,236,0.1)] pt-6">
          <div className="flex justify-center">
            <p className="text-[rgba(247,243,236,0.8)] font-mono text-[10px] leading-[15px]">
              © 2019-2025 Thaena. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
        )}
      </Await>
    </Suspense>
  );
}

/**
 * @typedef {Object} FooterProps
 * @property {Promise<FooterQuery|null>} footer
 * @property {HeaderQuery} header
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').FooterQuery} FooterQuery */
/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
