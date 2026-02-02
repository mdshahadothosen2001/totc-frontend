import type { JSX } from "react";
import { Logo } from "../../atoms";
import { Separator } from "../../ui";
import { FooterLinks, NewsLetterForm } from "../../molecules";

const footerLinks = [
  { label: "Careers" },
  { label: "Privacy Policy" },
  { label: "Terms & Conditions" },
];

const Footer = (): JSX.Element => {
  return (
    <footer className="relative w-full mt-20 
    md:mt-[115px] bg-[#252641] px-4 sm:px-6 
    lg:px-12 py-16 sm:py-20
    "
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="flex flex-col items-center text-center gap-12 sm:gap-16">

          <div className="flex flex-col sm:flex-row
          items-center gap-6 sm:gap-10 translate-y-[-1rem] 
          animate-fade-in opacity-0 [--animation-delay:0ms]
          "
          >
            <Logo />

            <Separator
              orientation="vertical"
              className="hidden sm:block h-[83px] bg-white/20"
            />

            <p className="font-poppins font-semibold 
            text-white text-lg sm:text-xl 
            md:text-[22px] tracking-wide max-w-xs
            "
            >
              Virtual Class for Zoom
            </p>
          </div>

          <div className="flex flex-col items-center gap-8 
          sm:gap-12 w-full max-w-xl translate-y-[-1rem] 
          animate-fade-in opacity-0 [--animation-delay:200ms]
          "
          >
            <h3 className="font-poppins font-medium 
            text-[#b2b3cf] text-lg sm:text-xl 
            md:text-[26px] tracking-wide
            "
            >
              Subscribe to get our Newsletter
            </h3>

            <NewsLetterForm />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <FooterLinks links={footerLinks} />
          </div>

          <p className="font-poppins text-[#b2b3cf] 
          text-sm sm:text-base md:text-[22px] tracking-wide 
          translate-y-[-1rem] animate-fade-in opacity-0 
          [--animation-delay:600ms]
          "
          >
            © 2021 Class Technologies Inc.
          </p>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
