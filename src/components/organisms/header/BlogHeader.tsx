import type { JSX } from "react";
import { Logo } from "../../atoms";
import { NavigationMenu, type NavigationItem } from "../../molecules";
import { UserProfile } from "../../atoms";

export interface HeaderProps {
  navigationItems: NavigationItem[];
  user: {
    name: string;
    avatarSrc: string;
  };
  className?: string;
}

const BlogHeader = ({
  navigationItems,
  user,
  className = "",
}: HeaderProps): JSX.Element => {
  return (
    <header className={`relative w-full px-[120px] py-[30px] flex items-center justify-between ${className}`}>
      <Logo />

      <NavigationMenu
        items={navigationItems}
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]"
      />

      <UserProfile
        {...({ name: user.name, avatarSrc: user.avatarSrc } as any)}
        className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]"
      />
    </header>
  );
};

export default BlogHeader;
