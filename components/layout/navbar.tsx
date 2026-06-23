"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  Menu,
  X,
} from "lucide-react";

import CreonoxLogo from "../creonox-logo";

export default function Header() {
  const [scrolled, setScrolled] =
    useState(false);

  const [
    mobileMenuOpen,
    setMobileMenuOpen,
  ] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  const navigation = [
    {
      label: "Services",
      href: "/services",
    },
    {
      label: "Products",
      href: "/products",
    },
    {
      label: "About",
      href: "/about",
    },
    {
      label: "Insights",
      href: "/insights",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ];

  return (
    <header
      className={`
        fixed
        left-0
        top-0
        z-50
        w-full

        transition-all
        duration-300

        ${scrolled
          ? "bg-[#f7f7fb]/80 backdrop-blur-xl"
          : "bg-[#f7f7fb]/90 backdrop-blur-xl"
        }
      `}
    >
      <div
        className="
          mx-auto
          flex
          h-20
          max-w-7xl
          items-center
          justify-between
          px-4
          sm:px-6
        "
      >


        <Link
          href="/"
          className="
    flex
    items-center
    gap-3
  "
        >
          <Image
            src="/clogo.svg"
            alt="Creonox Technologies"
            width={42}
            height={42}
            priority
            className="h-10 w-10 md:h-11 md:w-11"
          />

          <div className="flex flex-col leading-none">
            <span
              className="
        text-lg
        font-semibold
        tracking-[-0.04em]
        text-slate-950
      "
            >
              Creonox
            </span>

            <span
              className="
        mt-1
        text-[10px]
        font-medium
        uppercase
        tracking-[0.25em]
        text-slate-500
      "
            >
              Technologies
            </span>
          </div>
        </Link>
        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            items-center
            gap-2
            lg:flex
          "
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="
                group
                relative

                overflow-hidden

                rounded-xl

                px-4
                py-2.5

                text-sm
                font-medium

                text-slate-600

                transition-all
                duration-300

                hover:text-violet-700
              "
            >
              <div
                className="
                  absolute
                  inset-0

                  rounded-xl

                  bg-gradient-to-r
                  from-violet-50
                  via-fuchsia-50
                  to-cyan-50

                  opacity-0

                  transition-all
                  duration-300

                  group-hover:opacity-100
                "
              />

              <div
                className="
                  absolute
                  bottom-0
                  left-1/2

                  h-[2px]
                  w-0

                  -translate-x-1/2

                  rounded-full

                  bg-gradient-to-r
                  from-violet-500
                  to-fuchsia-500

                  transition-all
                  duration-300

                  group-hover:w-8
                "
              />

              <span className="relative z-10">
                {item.label}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div
          className="
            flex
            items-center
            gap-3
          "
        >
          {/* Desktop CTA */}
          <Link
            href="/products"
            className="
              group

              hidden
              sm:inline-flex

              items-center
              gap-2

              rounded-xl

              bg-gradient-to-r
              from-violet-600
              via-fuchsia-600
              to-cyan-500

              px-5
              py-2.5

              text-sm
              font-medium

              text-white

              shadow-lg
              shadow-violet-500/20

              transition-all
              duration-300

              hover:-translate-y-0.5
              hover:shadow-xl
            "
          >
            Explore Products

            <ArrowRight
              size={14}
              className="
                transition-transform
                duration-300

                group-hover:translate-x-1
              "
            />
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setMobileMenuOpen(
                !mobileMenuOpen
              )
            }
            className="
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-xl

              border
              border-slate-200

              bg-white

              lg:hidden
            "
          >
            {mobileMenuOpen ? (
              <X size={20} />
            ) : (
              <Menu size={20} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          overflow-hidden

          transition-all
          duration-300

          lg:hidden

          ${mobileMenuOpen
            ? "max-h-[500px]"
            : "max-h-0"
          }
        `}
      >
        <div
          className="
            border-t
            border-slate-200

            bg-white/95

            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              flex-col

              gap-1

              px-6
              py-6
            "
          >
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  rounded-xl

                  px-4
                  py-3

                  text-base
                  font-medium

                  text-slate-700

                  transition-colors

                  hover:bg-violet-50
                  hover:text-violet-700
                "
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/products"
              onClick={() =>
                setMobileMenuOpen(false)
              }
              className="
                mt-4

                inline-flex
                items-center
                justify-center
                gap-2

                rounded-xl

                bg-gradient-to-r
                from-violet-600
                via-fuchsia-600
                to-cyan-500

                px-5
                py-3

                font-medium

                text-white

                shadow-lg
                shadow-violet-500/20
              "
            >
              Explore Products

              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}