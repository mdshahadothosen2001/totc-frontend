import React from "react";
import { Logo } from "../../atoms";
import { UserProfile } from "../../atoms";
import { NavigationMenu, type NavigationItem } from "../../molecules";

export interface HeaderProps {
  navigationItems: NavigationItem[];
  userName: string;
  userAvatarUrl?: string;
  className?: string;
}

const CheckoutHeader: React.FC<HeaderProps> = ({
  navigationItems,
  userName,
  userAvatarUrl,
  className = "",
}) => {
  return (
    <header
      className={`w-full px-[120px] py-8 flex items-center justify-between translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
    >
      <Logo />
      <NavigationMenu items={navigationItems} />
      <UserProfile name={userName} src={userAvatarUrl} />
    </header>
  );
};

export default CheckoutHeader;
