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
    <footer className="relative w-full mt-[115px] bg-[#252641] py-[74px] px-4">
      <div className="max-w-[1920px] mx-auto">
        <div className="flex flex-col items-center gap-[40px]">
          <div className="flex items-center gap-10 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
            <Logo />

            <Separator
              orientation="vertical"
              className="h-[83px] bg-white/20"
            />

            <div className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[22px] tracking-[0.88px] leading-[normal] max-w-[156px]">
              Virtual Class for Zoom
            </div>
          </div>

          <div className="flex flex-col items-center gap-[49px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#b2b3cf] text-[26px] text-center tracking-[1.04px] leading-[normal]">
              Subscribe to get our Newsletter
            </h3>

            <NewsLetterForm />
          </div>

          <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <FooterLinks links={footerLinks} />
          </div>

          <div className="[font-family:'Poppins',Helvetica] font-normal text-[#b2b3cf] text-[22px] text-center tracking-[0.88px] leading-[normal] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            © 2021 Class Technologies Inc.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
