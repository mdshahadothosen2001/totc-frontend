import type { JSX } from "react";
import { Separator } from "../../ui";

export interface FooterLinksProps {
  links: Array<{ label: string; href?: string }>;
}

const FooterLinks = ({ links }: FooterLinksProps): JSX.Element => {
  return (
    <div className="flex items-center gap-5">
      {links.map((link, index) => (
        <div key={index} className="flex items-center gap-5">
          <button className="[font-family:'Poppins',Helvetica] font-normal text-[#b2b3cf] text-[22px] text-center tracking-[0.88px] leading-[normal] hover:text-white transition-colors">
            {link.label}
          </button>
          {index < links.length - 1 && (
            <Separator
              orientation="vertical"
              className="h-[17px] bg-[#b2b3cf]/30"
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default FooterLinks;
