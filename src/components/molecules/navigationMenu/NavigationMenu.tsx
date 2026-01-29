import type { JSX } from "react";
export interface NavigationItem {
  label: string;
  href: string;
}

export interface NavigationMenuProps {
  items: NavigationItem[];
  className?: string;
}

const NavigationMenu = ({
  items,
  className = "",
}: NavigationMenuProps): JSX.Element => {
  return (
    <nav className={`flex items-center gap-[57px] ${className}`}>
      {items.map((item, index) => (
        <a
          key={index}
          href={item.href}
          className="[font-family:'Poppins',Helvetica] font-normal text-[#5b5b5b] text-[22px] tracking-[0.44px] hover:text-[#49bbbd] transition-colors"
        >
          {item.label}
        </a>
      ))}
    </nav>
  );
};

export default NavigationMenu;
