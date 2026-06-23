"use client";
import Image from "next/image";
import Link from "next/link";
import CreonoxLogo from "../creonox-logo";
import {
  Linkedin,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";
export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-white ">
      {/* Outer Container */}
      <div
        className="
          relative
          mx-auto
          max-w-[1800px]
          overflow-hidden
          rounded-[40px]
          border
          border-slate-200
          bg-white
          px-6
          py-20
          pb-65
          
          shadow-[0_20px_80px_rgba(15,23,42,0.04)]
        "
      >
        {/* Watermark */}
        <div
          className="
            pointer-events-none

            absolute
            bottom-[-90px]
            left-1/2

            -translate-x-1/2

            whitespace-nowrap

            text-[18rem]
            font-black
            tracking-[-0.08em]

            text-slate-100

            select-none
          "
        >
          Creonox.
        </div>

        {/* Inner Card */}
        <div
          className="
            relative
            z-10

            mx-auto
            max-w-6xl
            rounded-[36px]
            border
            border-slate-200
            bg-white
            p-12
            
            shadow-[0_10px_40px_rgba(15,23,42,0.03)]
          "
        >
          <div
            className="
              flex
              flex-col
              gap-16
              
              lg:flex-row
              lg:justify-between
            "
          >
            {/* Brand */}
            <div className="max-w-md">
              <div className="flex items-center gap-3">

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

              </div>

              <p
                className="
                  mt-8
                  text-lg
                  leading-8
                  text-slate-600
                "
              >
                Building intelligent operating
                systems for industries where
                operations matter most.
              </p>
            </div>

            {/* Links */}
            <div
              className="
                grid
                gap-16

                sm:grid-cols-3
              "
            >
              <div>
                <h3 className="font-semibold text-slate-950">
                  Products
                </h3>

                <div className="mt-6 flex flex-col gap-4 text-slate-600">
                  <Link href="/products">CA IQ</Link>
                  <Link href="/products">Audit Hub</Link>
                  <Link href="/products">Automation Center</Link>
                  <Link href="/products">Client Portal</Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">
                  Company
                </h3>

                <div className="mt-6 flex flex-col gap-4 text-slate-600">
                  <Link href="/about">About</Link>
                  <Link href="/insights">Insights</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-slate-950">
                  Connect
                </h3>

                <div className="mt-6 flex flex-col gap-5">
                  <a
                    href="https://www.linkedin.com/company/creonox-technologies/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        flex
        items-center
        gap-3
        text-slate-600
        transition-colors
        hover:text-violet-600
      "
                  >
                    <Linkedin size={18} />
                   
                  </a>

                  <a
                    href="https://www.instagram.com/creonox.global"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
        flex
        items-center
        gap-3
        text-slate-600
        transition-colors
        hover:text-violet-600
      "
                  >
                    <Instagram size={18} />
                   
                  </a>

                  <a
                    href="mailto:hello@creonox.com"
                    className="
        flex
        items-center
        gap-3
        text-slate-600
        transition-colors
        hover:text-violet-600
      "
                  >
                    
                    <span>hello@creonox.com</span>
                  </a>

                  <a
                    href="tel:+917385415081"
                    className="
        flex
        items-center
        gap-3
        text-slate-600
        transition-colors
        hover:text-violet-600
      "
                  >
                   
                    <span>+91 73854 15081</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom */}
          <div
            className="
              mt-14

              flex
              flex-col
              gap-4

              border-t
              border-slate-100

              pt-8

              text-sm
              text-slate-500

              md:flex-row
              md:items-center
              md:justify-between
            "
          >
            <p>
              © {new Date().getFullYear()} Creonox.
              All rights reserved.
            </p>

            <div className="flex gap-6">
              <Link href="/privacy">
                Privacy Policy
              </Link>

              <Link href="/terms">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}