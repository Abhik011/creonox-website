
"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow =
      mobileMenuOpen ? "hidden" : "unset";

    return () => {
      document.body.style.overflow =
        "unset";
    };
  }, [mobileMenuOpen]);

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
        top-0
        left-0
        z-50
        w-full
        transition-all
        duration-300

        ${
          scrolled
            ? "bg-white/75 backdrop-blur-2xl border-b border-slate-200/60 shadow-sm"
            : "bg-white/60 backdrop-blur-xl"
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
          lg:px-8
        "
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3"
        >
          <Image
            src="/clogo.svg"
            alt="Creonox Technologies"
            width={44}
            height={44}
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

        {/* Desktop Nav */}
        <nav
          className="
            hidden
            items-center
            gap-2
            lg:flex
          "
        >
          {navigation.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" &&
                pathname.startsWith(
                  item.href
                ));

            return (
              <Link
                key={item.href}
                href={item.href}
                className={`
                  group
                  relative
                  overflow-hidden
                  rounded-xl
                  px-4
                  py-2.5
                  text-sm
                  font-medium
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "text-violet-700"
                      : "text-slate-600 hover:text-violet-700"
                  }
                `}
              >
                <div
                  className={`
                    absolute
                    inset-0
                    rounded-xl
                    bg-gradient-to-r
                    from-violet-50
                    via-fuchsia-50
                    to-cyan-50
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "opacity-100"
                        : "opacity-0 group-hover:opacity-100"
                    }
                  `}
                />

                <div
                  className={`
                    absolute
                    bottom-0
                    left-1/2
                    h-[2px]
                    -translate-x-1/2
                    rounded-full
                    bg-gradient-to-r
                    from-violet-500
                    to-fuchsia-500
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "w-8"
                        : "w-0 group-hover:w-8"
                    }
                  `}
                />

                <span className="relative z-10">
                  {item.label}
                </span>
              </Link>
            );
          })}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-3">
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

          <button
            aria-label="Toggle Menu"
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

          ${
            mobileMenuOpen
              ? "max-h-[600px]"
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
            {navigation.map((item) => {
              const isActive =
                pathname === item.href;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    rounded-xl
                    px-4
                    py-3
                    text-base
                    font-medium
                    transition-all

                    ${
                      isActive
                        ? "bg-violet-50 text-violet-700"
                        : "text-slate-700 hover:bg-violet-50 hover:text-violet-700"
                    }
                  `}
                >
                  {item.label}
                </Link>
              );
            })}

            <Link
              href="/products"
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

