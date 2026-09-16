"use client";

import Image from "next/image";
import Link from "next/link";
import { useContextData } from "@/app/context/Provider";

const Header = () => {
  const { scrollingDown } = useContextData();

  return (
    <header className={`sticky top-0 z-50 border-b border-white/10 bg-[#001541] text-white transition-transform duration-300 ${scrollingDown ? "-translate-y-full" : "translate-y-0"}`}>
      <div className="mx-auto flex min-h-24 max-w-7xl items-center justify-between gap-8 px-6 py-4 lg:px-10">
        <Link href="/" aria-label="Bail Bonds home" className="shrink-0">
          <Image
            src="/assets/mainLogoWhite.svg"
            alt="Bail Bonds"
            width={148}
            height={64}
            priority
            className="h-14 w-auto"
          />
        </Link>

        <nav aria-label="Main navigation" className="hidden items-center gap-8 lg:flex">
          <Link className="text-sm font-medium tracking-wide text-white transition-colors hover:text-[#D6232E]" href="/">
            Home
          </Link>
          <details className="group relative">
            <summary className="flex cursor-pointer list-none items-center gap-2 text-sm font-medium tracking-wide text-white transition-colors hover:text-[#D6232E] [&::-webkit-details-marker]:hidden">
              Practice Areas
              <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-180">&#9662;</span>
            </summary>
            <div className="absolute left-1/2 top-full z-20 mt-5 w-64 -translate-x-1/2 border-t-2 border-[#D6232E] bg-white p-2 text-[#001541] shadow-xl">
              <a className="block px-4 py-3 text-sm transition-colors hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#dui-dwi">DUI &amp; DWI</a>
              <a className="block px-4 py-3 text-sm transition-colors hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#drug-crimes">Drug Crimes</a>
              <a className="block px-4 py-3 text-sm transition-colors hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#violent-crimes">Violent Crimes</a>
              <a className="block px-4 py-3 text-sm transition-colors hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#federal-crimes">Federal Crimes</a>
            </div>
          </details>
          <a className="text-sm font-medium tracking-wide text-white transition-colors hover:text-[#D6232E]" href="#about">About</a>
          <a className="text-sm font-medium tracking-wide text-white transition-colors hover:text-[#D6232E]" href="#videos">Videos</a>
          <a className="text-sm font-medium tracking-wide text-white transition-colors hover:text-[#D6232E]" href="#blogs">Blogs</a>
          <a className="text-sm font-medium tracking-wide text-white transition-colors hover:text-[#D6232E]" href="#contact">Contact</a>
          <a className="flex items-center gap-2 bg-[#D6232E] px-5 py-3 text-sm font-semibold tracking-wide text-white transition-colors hover:bg-white hover:text-[#001541]" href="#contact">
            <Image src="/assets/phone.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
            Call Now
          </a>
        </nav>

        <details className="group relative lg:hidden">
          <summary className="flex cursor-pointer list-none items-center gap-2 border border-white/30 px-4 py-3 text-sm font-semibold [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden="true" className="text-xs transition-transform group-open:rotate-180">&#9662;</span>
          </summary>
          <nav aria-label="Mobile navigation" className="absolute right-0 top-full z-30 mt-4 w-64 border-t-2 border-[#D6232E] bg-white p-3 text-[#001541] shadow-xl">
            <Link className="block px-4 py-3 text-sm font-medium hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="/">Home</Link>
            <details className="group/practice">
              <summary className="flex cursor-pointer list-none items-center justify-between px-4 py-3 text-sm font-medium hover:bg-[#f4f5f7] hover:text-[#D6232E] [&::-webkit-details-marker]:hidden">
                Practice Areas
                <span aria-hidden="true" className="text-xs transition-transform group-open/practice:rotate-180">&#9662;</span>
              </summary>
              <div className="border-l-2 border-[#D6232E] pl-3">
                <a className="block px-4 py-2 text-sm hover:text-[#D6232E]" href="#dui-dwi">DUI &amp; DWI</a>
                <a className="block px-4 py-2 text-sm hover:text-[#D6232E]" href="#drug-crimes">Drug Crimes</a>
                <a className="block px-4 py-2 text-sm hover:text-[#D6232E]" href="#violent-crimes">Violent Crimes</a>
                <a className="block px-4 py-2 text-sm hover:text-[#D6232E]" href="#federal-crimes">Federal Crimes</a>
              </div>
            </details>
            <a className="block px-4 py-3 text-sm font-medium hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#about">About</a>
            <a className="block px-4 py-3 text-sm font-medium hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#videos">Videos</a>
            <a className="block px-4 py-3 text-sm font-medium hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#blogs">Blogs</a>
            <a className="block px-4 py-3 text-sm font-medium hover:bg-[#f4f5f7] hover:text-[#D6232E]" href="#contact">Contact</a>
            <a className="mt-2 flex items-center gap-2 bg-[#D6232E] px-4 py-3 text-sm font-semibold text-white" href="#contact">
              <Image src="/assets/phone.svg" alt="" width={18} height={18} className="h-[18px] w-[18px]" />
              Call Now
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
};

export default Header;