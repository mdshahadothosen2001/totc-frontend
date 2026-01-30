import type { JSX } from "react";
import { ChevronDownIcon } from "lucide-react";
import { ButtonUI, Input } from "../../ui";

const filterButtons = [
  { label: "Subject", width: "w-[174px]" },
  { label: "Partner", width: "w-[174px]" },
  { label: "Program", width: "w-48" },
  { label: "Language", width: "w-[209px]" },
  { label: "Abaliability", width: "w-[220px]" },
  { label: "Learning Type", width: "w-[267px]" },
];

export const HeroSearchSection = (): JSX.Element => {
  return (
    <section className="w-full h-[326px] mt-[29px] flex justify-center bg-[url(https://c.animaapp.com/ml0tlc5743oHtU/img/rectangle-180.svg)] bg-cover bg-center">
      <div className="w-full max-w-[1324px] px-4 mt-20">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="relative flex items-center bg-white rounded-[10px] h-[73px] mb-5">
            <Input
              type="text"
              placeholder="Search your favourite course"
              className="flex-1 h-full border-0 rounded-[10px] pl-[35px] pr-[200px] text-xl text-[#82839a99] [font-family:'Poppins',Helvetica] font-normal tracking-[0.80px] placeholder:text-[#82839a99] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <ButtonUI className="absolute right-[5px] top-[5px] h-[63px] w-[185px] bg-[#49bbbd] hover:bg-[#3da5a7] rounded-xl text-white text-2xl [font-family:'Poppins',Helvetica] font-bold">
              Search
            </ButtonUI>
          </div>
        </div>

        <div className="flex gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          {filterButtons.map((filter) => (
            <ButtonUI
              key={filter.label}
              variant="outline"
              className={`${filter.width} h-[73px] bg-white hover:bg-gray-50 rounded-[10px] border-0 flex items-center justify-between px-[18px] gap-3`}
            >
              <span className="text-2xl [font-family:'Poppins',Helvetica] font-medium text-[#252641] tracking-[0.96px]">
                {filter.label}
              </span>
              <ChevronDownIcon className="w-5 h-5 text-[#252641] flex-shrink-0" />
            </ButtonUI>
          ))}
        </div>
      </div>
    </section>
  );
};
