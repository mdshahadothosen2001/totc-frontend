import type { JSX } from "react";
import { ButtonUI, Input } from "../../ui";

const NewsLetterForm = (): JSX.Element => {
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full">

      <div className="relative w-full sm:w-auto">
        <Input
          type="email"
          placeholder="Your Email"
          className="
            w-full sm:w-[360px] md:w-[400px]
            h-[52px] sm:h-[60px]
            rounded-full
            border border-[#83839a]
            bg-transparent
            text-[#82839a]
            font-poppins
            text-base sm:text-lg md:text-xl
            tracking-wide
            placeholder:text-[#82839a]
            px-6 sm:px-[30px]
          "
        />
      </div>

      <div className="relative w-full sm:w-auto">
        <div className="absolute inset-0 m-auto 
        w-[140px] h-[24px] sm:w-[151px] sm:h-[29px]
        bg-[#545ae7] rounded-full blur-[27px] opacity-50
        "
        />

        <ButtonUI
          className="
            relative
            w-full sm:w-[160px] md:w-[179px]
            h-[52px] sm:h-[60px]
            bg-[#49bbbd]
            hover:bg-[#49bbbd]/90
            rounded-full
            font-poppins
            font-medium
            text-white
            text-base sm:text-lg md:text-[22px]
          "
        >
          Subscribe
        </ButtonUI>
      </div>

    </div>
  );
};

export default NewsLetterForm;
