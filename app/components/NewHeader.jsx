import { Link } from "react-router";
import { Search, User, ShoppingBag, Menu, X } from "lucide-react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "~/components/ui/dropdown-menu";

const ChevronDownIcon = () => (
  <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-1.5">
    <path d="M0.666664 0.666748L4.66666 4.66675L8.66666 0.666748" stroke="#43414F" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const NavDropdown = ({ label, items }) => (
  <DropdownMenu>
    <DropdownMenuTrigger className="flex items-center gap-1 px-3 py-2 rounded-md text-slate-primary font-playfair text-sm leading-5 hover:bg-gray-50 transition-colors">
      {label}
      <ChevronDownIcon />
    </DropdownMenuTrigger>
    <DropdownMenuContent className="bg-neutral-light border-slate-primary/20">
      {items.map((item) => (
        <DropdownMenuItem key={item.path} className="cursor-pointer">
          <Link
            to={item.path}
            className="w-full text-slate-primary font-playfair text-sm py-1 px-2 hover:bg-gray-50 rounded"
          >
            {item.name}
          </Link>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
);

export default function Header({ header, isLoggedIn, cart, publicStoreDomain }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [expandedMobileMenu, setExpandedMobileMenu] = useState(null);

  const sciencePages = [
    { name: "Approach", path: "/approach" },
    { name: "Process", path: "/process" },
    { name: "Chloe Tracking App", path: "/chloe-tracking-app" },
  ];

  const learnPages = [
    { name: "Microbiome Masterclass", path: "/microbiome-masterclass" },
    { name: "Microbiome 101", path: "/microbiome-101" },
    { name: "Blogs", path: "/blogs" },
    { name: "Videos", path: "/videos" },
    { name: "Provider Education", path: "/provider-education" },
  ];

  const shopPages = [{ name: "ThaenaBiotic", path: "/thaena-biotic" }];

  const imPages = [
    { name: "Provider", path: "/provider" },
    { name: "Client", path: "/client" },
  ];

  return (
    <header className="h-20 shadow-[0_4px_20px_-4px_rgba(29,41,48,0.08)] bg-neutral-light relative">
      <div className="max-w-[1400px] mx-auto h-full flex items-center justify-between px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center z-20">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/238dff1877ca9ed1af7c979ec8d68d2ce396d48c?width=260"
            alt="Thaena"
            className="w-[130px] h-9"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1 ml-auto">
          <Link
            to="/"
            className="px-3 py-2 rounded-md text-slate-primary font-playfair text-sm leading-5 hover:bg-gray-50 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/who-we-are"
            className="px-3 py-2 rounded-md text-slate-primary font-playfair text-sm leading-5 hover:bg-gray-50 transition-colors"
          >
            Who We Are
          </Link>
          <NavDropdown label="Science" items={sciencePages} />
          <NavDropdown label="Learn" items={learnPages} />
          <NavDropdown label="Shop" items={shopPages} />
          <NavDropdown label="I'm…" items={imPages} />
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden lg:flex items-center gap-1 ml-[25px]">
          <button className="p-2.5 rounded-md hover:bg-gray-50 transition-colors" aria-label="Search">
            <Search className="w-[15px] h-[15px] text-slate-primary" strokeWidth={1.33} />
          </button>
          <button className="p-2.5 rounded-md hover:bg-gray-50 transition-colors" aria-label="Login">
            <User className="w-[15px] h-[15px] text-slate-primary" strokeWidth={1.33} />
          </button>
          <button className="p-2.5 rounded-md hover:bg-gray-50 transition-colors" aria-label="Shopping cart">
            <ShoppingBag className="w-[15px] h-[15px] text-slate-primary" strokeWidth={1.33} />
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 z-20"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6 text-slate-primary" />
          ) : (
            <Menu className="w-6 h-6 text-slate-primary" />
          )}
        </button>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 right-0 bg-neutral-light shadow-lg z-10 border-t max-h-[calc(100vh-80px)] overflow-y-auto">
            <nav className="flex flex-col p-4">
              <Link
                to="/"
                className="px-3 py-3 text-slate-primary font-playfair text-base hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/who-we-are"
                className="px-3 py-3 text-slate-primary font-playfair text-base hover:bg-gray-50 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Who We Are
              </Link>

              {/* Science Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-primary font-playfair text-base hover:bg-gray-50 rounded-md text-left"
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === "science" ? null : "science")}
                >
                  Science
                  <ChevronDownIcon />
                </button>
                {expandedMobileMenu === "science" && (
                  <div className="bg-gray-100/50 pl-4">
                    {sciencePages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="block px-3 py-2 text-slate-primary font-playfair text-sm hover:bg-gray-50 rounded-md"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExpandedMobileMenu(null);
                        }}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Learn Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-primary font-playfair text-base hover:bg-gray-50 rounded-md text-left"
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === "learn" ? null : "learn")}
                >
                  Learn
                  <ChevronDownIcon />
                </button>
                {expandedMobileMenu === "learn" && (
                  <div className="bg-gray-100/50 pl-4">
                    {learnPages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="block px-3 py-2 text-slate-primary font-playfair text-sm hover:bg-gray-50 rounded-md"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExpandedMobileMenu(null);
                        }}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Shop Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-primary font-playfair text-base hover:bg-gray-50 rounded-md text-left"
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === "shop" ? null : "shop")}
                >
                  Shop
                  <ChevronDownIcon />
                </button>
                {expandedMobileMenu === "shop" && (
                  <div className="bg-gray-100/50 pl-4">
                    {shopPages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="block px-3 py-2 text-slate-primary font-playfair text-sm hover:bg-gray-50 rounded-md"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExpandedMobileMenu(null);
                        }}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* I'm… Menu */}
              <div>
                <button
                  className="flex items-center justify-between w-full px-3 py-3 text-slate-primary font-playfair text-base hover:bg-gray-50 rounded-md text-left"
                  onClick={() => setExpandedMobileMenu(expandedMobileMenu === "im" ? null : "im")}
                >
                  I'm…
                  <ChevronDownIcon />
                </button>
                {expandedMobileMenu === "im" && (
                  <div className="bg-gray-100/50 pl-4">
                    {imPages.map((page) => (
                      <Link
                        key={page.path}
                        to={page.path}
                        className="block px-3 py-2 text-slate-primary font-playfair text-sm hover:bg-gray-50 rounded-md"
                        onClick={() => {
                          setMobileMenuOpen(false);
                          setExpandedMobileMenu(null);
                        }}
                      >
                        {page.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center gap-4 px-3 py-3 mt-4 border-t">
                <button className="p-2 hover:bg-gray-50 rounded-md" aria-label="Search">
                  <Search className="w-5 h-5 text-slate-primary" strokeWidth={1.33} />
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-md" aria-label="Login">
                  <User className="w-5 h-5 text-slate-primary" strokeWidth={1.33} />
                </button>
                <button className="p-2 hover:bg-gray-50 rounded-md" aria-label="Shopping cart">
                  <ShoppingBag className="w-5 h-5 text-slate-primary" strokeWidth={1.33} />
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

/**
 * @typedef {Object} HeaderProps
 * @property {HeaderQuery} header
 * @property {Promise<CartApiQueryFragment|null>} cart
 * @property {Promise<boolean>} isLoggedIn
 * @property {string} publicStoreDomain
 */

/** @typedef {import('storefrontapi.generated').HeaderQuery} HeaderQuery */
/** @typedef {import('storefrontapi.generated').CartApiQueryFragment} CartApiQueryFragment */
