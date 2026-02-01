import type { ReactElement } from 'react';
import { NavBar } from '../../molecules';

const HomeBanner = (): ReactElement => {
  return (
    <header
      className="w-full relative bg-transparent translate-y-0 opacity-100">
      <NavBar />
      <img
        className="w-full h-auto"
        alt="Header bg"
        src="/src/assets/home-header-bg-blur.png"
      />

      <div className="absolute top-[626px] right-[162px] w-5 h-5 bg-[#c4c4c4] rounded-[10px]" />

      <img
        className="absolute top-0 left-0 w-full h-auto"
        alt="Group"
        src="/src/assets/home-banner.png"
      />
    </header>
  );
};

export default HomeBanner;
