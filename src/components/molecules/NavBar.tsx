import React from "react";
import Logo from "../atoms/Logo";
import UserProfile from "../atoms/UserProfile";
import { navItems } from "../../constants";
import {
  DrawerRoot,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  DrawerCloseTrigger,
} from "@chakra-ui/react";

const NavBar: React.FC = () => {
  return (
    <header className="w-full h-[143px] relative bg-white z-50">
      <div className="max-w-[1680px] h-full mx-auto flex items-center justify-between relative px-6">

        <Logo />

        <nav className="flex-1 flex justify-center">
          <ul className="flex gap-9 items-center list-none">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-poppins text-[22px] text-[#5B5B5B] font-normal cursor-pointer hover:text-[#49BBBD] transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Profile section */}
        <div className="flex items-center">
          <DrawerRoot placement="end">
            <DrawerTrigger asChild>
              <div className="cursor-pointer">
                <UserProfile />
              </div>
            </DrawerTrigger>

            <DrawerContent
              className="absolute top-[83px] right-0"
            >
              <DrawerCloseTrigger />
              <DrawerHeader className="text-xl font-semibold border-b border-gray-200">
                Account
              </DrawerHeader>
              <DrawerBody>
                <div className="flex flex-col gap-4 mt-6">
                  <a
                    href="/login"
                    className="w-full text-center py-3 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="w-full text-center py-3 rounded-md bg-[#49BBBD] text-white hover:opacity-90 transition"
                  >
                    Register
                  </a>
                </div>
              </DrawerBody>
            </DrawerContent>
          </DrawerRoot>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
