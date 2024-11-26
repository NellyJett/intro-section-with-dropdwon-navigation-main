'use client';
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const AppLayout = () => {
  const [isFeatureOpen, setIsFeatureOpen] = useState(false);
  const [isCompanyOpen, setIstCompanyOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleFeatureDropdown = () => {
    setIsFeatureOpen(!isFeatureOpen);
    setIstCompanyOpen(false);
  };

  const toggleCompanyDropdown = () => {
    setIstCompanyOpen(!isCompanyOpen);
    setIsFeatureOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="p-6 w-full h-screen flex flex-col">
      {/* Header */}
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-20">
            <Image
              src="/images/logo.svg"
              alt="Company Logo"
              width={100}
              height={50}
            />
          </div>
          {/* Desktop Navigation */}
          <nav className="hidden md:flex ml-6">
            <ul className="flex gap-4">
              <li className="relative">
                <button
                  onClick={toggleFeatureDropdown}
                  className="flex items-center gap-1"
                >
                  Features
                  <Image
                    src="/images/icon-arrow-up.svg"
                    alt="arrow icon"
                    width={10}
                    height={10}
                  />
                </button>
                {isFeatureOpen && (
                  <ul className="absolute left-0 border rounded-lg bg-white w-36 mt-2 z-20">
                    <li className="px-4 py-2 flex gap-2">
                      <Image
                        src="/images/icon-todo.svg"
                        alt="todo icon"
                        width={20}
                        height={10}
                      />
                      <Link href="/features/feature1">Todo List</Link>
                    </li>
                    <li className="px-4 py-2 flex gap-2">
                      <Image
                        src="/images/icon-calendar.svg"
                        alt="calendar icon"
                        width={20}
                        height={10}
                      />
                      <Link href="/features/features2">Calendar</Link>
                    </li>
                    <li className="px-4 py-2 flex gap-2">
                      <Image
                        src="/images/icon-reminders.svg"
                        alt="reminder icon"
                        width={20}
                        height={10}
                      />
                      <Link href="/features/features3">Reminders</Link>
                    </li>
                    <li className="px-4 py-2 flex gap-2">
                      <Image
                        src="/images/icon-planning.svg"
                        alt="planning icon"
                        width={20}
                        height={10}
                      />
                      <Link href="/features/features4">Planning</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li className="relative">
                <button
                  onClick={toggleCompanyDropdown}
                  className="flex items-center gap-1"
                >
                  Company
                  <Image
                    src="/images/icon-arrow-up.svg"
                    alt="arrow icon"
                    width={10}
                    height={10}
                  />
                </button>
                {isCompanyOpen && (
                  <ul className="absolute left-0 border rounded-lg bg-white w-32 mt-2">
                    <li className="px-4 py-2">
                      <Link href="/company/history">History</Link>
                    </li>
                    <li className="px-4 py-2">
                      <Link href="/company/team">Our Team</Link>
                    </li>
                    <li className="px-4 py-2">
                      <Link href="/company/blog">Blog</Link>
                    </li>
                  </ul>
                )}
              </li>
              <li>
                <Link href="/careers">Careers</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
        {/* Mobile Navigation */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu}>
            <Image
              src="/images/icon-menu.svg"
              alt="menu icon"
              width={24}
              height={24}
            />
          </button>
          {isMobileMenuOpen && (
            <div className="absolute top-0 left-0 bg-white w-1/2 h-full z-10 p-6 shadow-lg">
              <button onClick={toggleMobileMenu} className="mb-4">
                <Image
                  src="/images/icon-close-menu.svg"
                  alt="close menu icon"
                  width={24}
                  height={24}
                />
              </button>
              <nav>
                <ul className="flex flex-col gap-4">
                  <li>
                    <button onClick={toggleFeatureDropdown}>
                      Features
                    </button>
                    {isFeatureOpen && (
                      <ul className="mt-2 max-h-60 overflow-auto">
                        <li>
                          <Link href="/features/feature1">Todo List</Link>
                        </li>
                        <li>
                          <Link href="/features/feature2">Calendar</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <button onClick={toggleCompanyDropdown}>
                      Company
                    </button>
                    {isCompanyOpen && (
                      <ul className="mt-2">
                        <li>
                          <Link href="/company/history">History</Link>
                        </li>
                        <li>
                          <Link href="/company/team">Our Team</Link>
                        </li>
                      </ul>
                    )}
                  </li>
                  <li>
                    <Link href="/careers">Careers</Link>
                  </li>
                  <li>
                    <Link href="/about">About</Link>
                  </li>
                  {/* Login and Register Links for Mobile */}
                  <li>
                    <Link href="/login">Login</Link>
                  </li>
                  <li>
                    <Link href="/register" className="border border-blue-500 rounded-[10px] px-2">
                      Register
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
        {/* Desktop Login and Register Links */}
        <div className="hidden md:flex gap-6">
          <Link href="/login">Login</Link>
          <Link
            href="/register"
            className="border border-blue-500 rounded-[10px] px-2"
          >
            Register
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row gap-6 py-12 px-6">
        <div className="md:w-1/2 pl-10 mt-20">
          <h1 className="font-extrabold text-4xl sm:text-5xl md:text-7xl leading-tight">Make <br />remote work</h1>
          <p className="mt-10 text-gray-400">Get your team in sync, no matter your location. Streamline processes, create team rituals, and watch productivity soar.</p>
          <button className="rounded-lg border border-1 border-black px-4 py-2 mt-20 font-semibold">Learn more</button>
          <div className="w-full mt-20 flex gap-6 flex-wrap">
            <Image src="/images/client-databiz.svg" alt="Databiz Logo" width={60} height={10} />
            <Image src="/images/client-audiophile.svg" alt="Audiophile Logo" width={60} height={10} />
            <Image src="/images/client-meet.svg" alt="Meet Logo" width={60} height={10} />
            <Image src="/images/client-maker.svg" alt="Maker Logo" width={60} height={10} />
          </div>
        </div>
        <div className="md:w-1/2 relative h-96 md:h-[550px] order-first md:order-last">
          <Image
            src="/images/image-hero-desktop.png"
            alt="hero"
            layout="fill"
            objectFit="contain"
          />
        </div>
      </section>
    </div>
  );
};

export default AppLayout;
