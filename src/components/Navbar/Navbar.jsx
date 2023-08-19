import { useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import Logo from "../../../public/img/logo.svg";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const router = useRouter();

  return (
    <div className=" mx-auto container px-5 pt-5 flex items-center justify-between md:justify-normal sticky top-0 md:mix-blend-exclusion z-50 ">
      <Link href="/">
        <Image src={Logo} height={45} alt="logo emotional marketing" />
      </Link>

      {/* Desktop menu */}
      <ul className="hidden md:flex items-center space-x-3 font-heading text-lg ml-5 text-white">
        <li>
          <Link
            href="/work"
            className={
              router.pathname === "/work" ? "underline" : "hover:underline"
            }
          >
            Work
          </Link>
        </li>
        <li>
          <Link
            href="/services"
            className={
              router.pathname === "/services" ? "underline" : "hover:underline"
            }
          >
            Services
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={
              router.pathname === "/about" ? "underline" : "hover:underline"
            }
          >
            About
          </Link>
        </li>
        <li>
          <Link
            href="/contact"
            className={
              router.pathname === "/about" ? "underline" : "hover:underline"
            }
          >
            Contact
          </Link>
        </li>
      </ul>

      {/* mobile menu */}
      <section className="MOBILE-MENU flex md:hidden">
        <div
          className="md:hidden space-y-2 cursor-pointer bg-[#189332] p-4 rounded-full"
          onClick={() => setIsNavOpen((prev) => !prev)}
        >
          <span className="block h-0.5 w-6 rounded bg-white"></span>
          <span className="block h-0.5 w-6 rounded bg-white"></span>
          <span className="block h-0.5 w-6 rounded bg-white"></span>
        </div>
        <div className={isNavOpen ? "showMenuNav" : "hideMenuNav"}>
          <div
            className="absolute top-0 right-0 p-8 cursor-pointer"
            onClick={() => setIsNavOpen(false)}
          >
            <svg
              className="h-8 w-8 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </div>
          <ul className="flex flex-col items-center justify-between  min-h-[250px] w-full">
            <li className="text-white text-5xl font-inter uppercase w-full py-2">
              <Link href="/work">
                <span>Work</span>
              </Link>
            </li>
            <li className="text-white text-5xl font-inter uppercase w-full py-2">
              <Link href="/services">
                <span>Services</span>
              </Link>
            </li>
            <li className="text-white text-5xl font-inter uppercase w-full py-2">
              <Link href="/about">
                <span>About</span>
              </Link>
            </li>
            <li className="text-white text-5xl font-inter uppercase w-full py-2">
              <Link href="/contact">
                <span>Contact</span>
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default Navbar;
