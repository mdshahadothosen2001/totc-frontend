import type { ReactElement } from 'react';

const Header = (): ReactElement => {
  return (
    <header className="w-full relative bg-transparent translate-y-0 opacity-100">
      <img
        className="w-full h-auto"
        alt="Header bg"
        src="https://c.animaapp.com/mkz223c55tsHtR/img/header-bg.png"
      />

      <div className="absolute top-[626px] right-[162px] w-5 h-5 bg-[#c4c4c4] rounded-[10px]" />

      <img
        className="absolute top-[626px] right-[162px] w-5 h-5"
        alt="Group"
        src="https://c.animaapp.com/mkz223c55tsHtR/img/group-11.png"
      />

      <img
        className="absolute top-0 left-0 w-full h-auto"
        alt="Group"
        src="https://c.animaapp.com/mkz223c55tsHtR/img/group-452.png"
      />
    </header>
  );
};

export default Header;
