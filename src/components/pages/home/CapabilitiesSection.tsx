import type { JSX } from "react";
import { PlayIcon } from "lucide-react";
import { ButtonUI, Card, CardContent } from "../../../components/ui";

const CapabilitiesSection = (): JSX.Element => {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="space-y-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <div className="relative">
            <div className="absolute -left-8 -top-4 w-[73px] h-[73px] bg-[#33efa0] rounded-full translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]" />

            <h2 className="text-3xl lg:text-4xl [font-family:'Poppins',Helvetica] font-medium leading-tight tracking-normal translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
              <span className="text-[#2f327d]">
                Everything you can do in a physical classroom,{" "}
              </span>
              <span className="text-[#00cbb8]">you can do with TOTC</span>
            </h2>
          </div>

          <p className="text-xl lg:text-2xl [font-family:'Poppins',Helvetica] font-normal text-[#696983] leading-relaxed tracking-[0.48px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            TOTC&apos;s school management software helps traditional and online
            schools manage scheduling, attendance, payments and virtual
            classrooms all in one secure cloud-based system.
          </p>

          <ButtonUI
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-[22px] leading-[39.6px] underline p-0 h-auto translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]"
          >
            Learn more
          </ButtonUI>
        </div>

        <div className="relative translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
          <div className="absolute -top-8 -left-12 w-[138px] h-[138px] bg-[#23bdee] rounded-[20px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]" />

          <div className="absolute -bottom-12 -right-8 w-[231px] h-[231px] bg-[#33efa0] rounded-[20px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1400ms]" />

          <img
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30px] h-[30px] z-10"
            alt="Ellipse"
            src="/src/assets/ellipse-overlay.png"
          />

          <Card className="relative overflow-hidden rounded-[20px] border-0 shadow-none">
            <CardContent className="p-0">
              <img
                className="w-full h-auto rounded-[20px] object-cover"
                alt="Confident teacher"
                src="/src/assets/classroom-videobtn.png"
              />

              <ButtonUI
                size="icon"
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70px] h-[70px] rounded-full bg-white hover:bg-white/90 shadow-[2px_20px_60px_#3d9bb81a] transition-transform hover:scale-110"
              >
                <PlayIcon className="w-5 h-6 fill-current text-[#23bdee] ml-1" />
              </ButtonUI>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;
