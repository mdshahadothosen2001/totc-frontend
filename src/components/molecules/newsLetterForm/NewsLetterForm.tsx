import type { JSX } from "react";
import { ButtonUI } from "../../ui";
import { Input } from "../../ui";

const NewsletterForm = (): JSX.Element => {
  return (
    <div className="flex items-center gap-5">
      <div className="relative">
        <Input
          type="email"
          placeholder="Your Email"
          className="w-[400px] h-[60px] rounded-[80px] border border-[#83839a] bg-transparent text-[#82839a] [font-family:'Poppins',Helvetica] font-normal text-xl tracking-[0.80px] placeholder:text-[#82839a] px-[30px]"
        />
      </div>

      <div className="relative">
        <div className="absolute top-[30px] left-3 w-[151px] h-[29px] bg-[#545ae7] rounded-[60px] blur-[27px] opacity-50" />
        <ButtonUI className="relative w-[179px] h-[60px] bg-[#49bbbd] hover:bg-[#49bbbd]/90 rounded-[60px] [font-family:'Poppins',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[normal]">
          Subscribe
        </ButtonUI>
      </div>
    </div>
  );
};

export default NewsletterForm;
