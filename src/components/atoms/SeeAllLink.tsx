import * as React from "react";
import { ButtonUI } from "../ui";

export interface SeeAllLinkProps {
  onClick?: () => void;
  className?: string;
}

const SeeAllLink: React.FC<SeeAllLinkProps> = ({
  onClick,
  className = "",
}) => {
  return (
    <ButtonUI
      variant="link"
      onClick={onClick}
      className={`[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] leading-normal p-0 h-auto ${className}`}
    >
      See all
    </ButtonUI>
  );
};

export default SeeAllLink;
