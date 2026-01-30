import type { JSX } from "react";
import { CheckCircle2Icon, PhoneIcon } from "lucide-react";
import { ButtonUI, Card, CardContent } from "../../ui";

const features = [
  "Free E-book, video & consolation",
  "Top instructors from around world",
  "Top courses from your team",
];

const participants = [
  {
    name: "Eveny Howard",
    role: "Instructor",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/mask-group-1.png",
    size: "large",
    position: { top: "top-[84px]", left: "left-[76px]" },
  },
  {
    name: "Adam Levin",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/mask-group-2.png",
    size: "medium",
    position: { top: "top-12", left: "left-[615px]" },
  },
  {
    name: "Tamara Clarke",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/mask-group-3.png",
    size: "small",
    position: { top: "top-[84px]", left: "left-[414px]" },
  },
  {
    name: "Humbert Holland",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/mask-group-4.png",
    size: "small",
    position: { top: "top-[253px]", left: "left-[414px]" },
  },
  {
    name: "Patricia Mendoza",
    image: "https://c.animaapp.com/ml0tlc5743oHtU/img/mask-group-5.png",
    size: "xlarge",
    position: { top: "top-[263px]", left: "left-[596px]" },
  },
];

export const FeaturedCoursesGridSection = (): JSX.Element => {
  return (
    <section className="w-full px-4 py-16 relative">
      <div className="max-w-[1684px] mx-auto relative">
        <div className="absolute inset-0 bg-[#9dccff] rounded-[20px] opacity-20" />

        <div className="relative grid lg:grid-cols-2 gap-12 items-center py-16 px-8 lg:px-16">
          <div className="space-y-8 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[#252641] text-3xl lg:text-4xl tracking-[0] leading-normal">
              Know about learning learning platform
            </h2>

            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 translate-y-[-1rem] animate-fade-in opacity-0"
                  style={
                    {
                      "--animation-delay": `${400 + index * 100}ms`,
                    } as React.CSSProperties
                  }
                >
                  <CheckCircle2Icon className="w-5 h-5 text-green-light flex-shrink-0" />
                  <span className="font-18-sp-paragraph-default font-[number:var(--18-sp-paragraph-default-font-weight)] text-black text-[length:var(--18-sp-paragraph-default-font-size)] tracking-[var(--18-sp-paragraph-default-letter-spacing)] leading-[var(--18-sp-paragraph-default-line-height)] [font-style:var(--18-sp-paragraph-default-font-style)]">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <ButtonUI className="bg-[#49bbbd] hover:bg-[#3a9a9c] text-white [font-family:'Poppins',Helvetica] font-bold text-2xl h-[63px] px-10 rounded-xl transition-colors translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:700ms]">
              Start learning now
            </ButtonUI>
          </div>

          <div className="relative h-[474px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <Card className="absolute top-0 left-0 w-full max-w-[711px] h-[439px] bg-[#f4f4f499] border-0 rounded-[20px] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] overflow-hidden">
              <CardContent className="p-0 h-full">
                <div className="h-[31px] bg-[#e9e9e999] rounded-t-[20px] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] flex items-center gap-[9px] px-[25px]">
                  <div className="w-[13px] h-[13px] bg-[#ee6666] rounded-full" />
                  <div className="w-[13px] h-[13px] bg-[#f6c566] rounded-full" />
                  <div className="w-[13px] h-[13px] bg-[#5bea7a] rounded-full" />
                </div>

                <div className="relative h-[calc(100%-31px)]">
                  <img
                    className="absolute top-[-27px] left-[34px] w-[316px] h-[308px]"
                    alt="Background decoration"
                    src="https://c.animaapp.com/ml0tlc5743oHtU/img/mask-group.png"
                  />

                  {participants.map((participant, index) => (
                    <div
                      key={index}
                      className={`absolute ${participant.position.top} ${participant.position.left} ${participant.size === "xlarge"
                          ? "w-[218px] h-[211px]"
                          : participant.size === "large"
                            ? "w-[232px] h-[230px]"
                            : participant.size === "medium"
                              ? "w-[184px] h-[177px]"
                              : "w-[151px] h-[146px]"
                        } flex shadow-[17px_17px_40px_#0d0f1c1a] bg-cover bg-center rounded-lg overflow-hidden`}
                      style={{ backgroundImage: `url(${participant.image})` }}
                    >
                      <div
                        className={`mt-auto ${participant.size === "xlarge"
                            ? "w-[146.63px] h-[28.34px] ml-[11.6px] mb-[10px]"
                            : participant.size === "large"
                              ? "w-[158px] h-5 ml-[7px] mb-[14px]"
                              : participant.size === "medium"
                                ? "w-[94.98px] h-[23.86px] ml-[9.8px] mb-[9px]"
                                : "w-[90.17px] h-[19.65px] ml-[8.1px] mb-[8px]"
                          } relative`}
                      >
                        <div
                          className={`absolute inset-0 bg-[#c9d3e666] ${participant.size === "xlarge"
                              ? "rounded-lg"
                              : participant.size === "large"
                                ? "rounded-[5.55px]"
                                : participant.size === "medium"
                                  ? "rounded-[6.73px]"
                                  : "rounded-[5.55px]"
                            } backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)]`}
                        />
                        {participant.role && (
                          <div
                            className={`absolute ${participant.size === "large"
                                ? "top-[3px] left-[17px]"
                                : ""
                              } w-[53px] h-[15px] bg-[#3692ff] rounded-[5.55px]`}
                          />
                        )}
                        <div
                          className={`absolute ${participant.size === "xlarge"
                              ? "top-1 left-6 text-base"
                              : participant.size === "large"
                                ? "top-[3px] left-[78px] text-[11.1px]"
                                : participant.size === "medium"
                                  ? "top-1 left-5 text-[13.5px]"
                                  : "top-[3px] left-[17px] text-[11.1px]"
                            } [font-family:'Nunito_Sans',Helvetica] font-semibold text-white tracking-[0] leading-[normal]`}
                        >
                          {participant.name}
                        </div>
                        {participant.role && (
                          <div className="absolute top-1 left-6 [font-family:'Nunito_Sans',Helvetica] font-semibold text-white text-[10px] tracking-[0] leading-[normal]">
                            {participant.role}
                          </div>
                        )}
                        <div
                          className={`absolute ${participant.size === "xlarge"
                              ? "top-[9px] left-[7px] w-[9px] h-2.5 gap-[1.5px]"
                              : participant.size === "large"
                                ? "top-[7px] left-[5px] w-[7px] h-[7px] gap-px"
                                : participant.size === "medium"
                                  ? "top-2 left-1.5 w-2 h-[9px] gap-[1.2px]"
                                  : "top-[7px] left-[5px] w-[7px] h-[7px] gap-px"
                            } flex`}
                        >
                          <div
                            className={`${participant.size === "xlarge"
                                ? "mt-[5.1px] w-[2.18px] h-[5.09px] rounded-[0.8px]"
                                : participant.size === "medium"
                                  ? "mt-[4.3px] w-[1.84px] h-[4.28px] rounded-[0.67px]"
                                  : "mt-[3.5px] w-[1.51px] h-[3.53px] rounded-[0.55px]"
                              } bg-white`}
                          />
                          <div
                            className={`${participant.size === "xlarge"
                                ? "mt-[2.5px] w-[2.18px] h-[7.63px] rounded-[0.8px]"
                                : participant.size === "medium"
                                  ? "mt-[2.1px] w-[1.84px] h-[6.42px] rounded-[0.67px]"
                                  : "mt-[1.8px] w-[1.51px] h-[5.29px] rounded-[0.55px]"
                              } bg-white`}
                          />
                          <div
                            className={`${participant.size === "xlarge"
                                ? "w-[2.18px] h-[10.18px] rounded-[0.8px]"
                                : participant.size === "medium"
                                  ? "w-[1.84px] h-[8.56px] rounded-[0.67px]"
                                  : "w-[1.51px] h-[7.05px] rounded-[0.55px]"
                              } bg-white`}
                          />
                        </div>
                      </div>
                    </div>
                  ))}

                  <div className="absolute top-[230px] left-[363px] w-[84px] h-[84px]">
                    <div className="absolute top-0 left-0 w-[84px] h-[84px] bg-[#f9f9f9] rounded-full shadow-[2px_10px_34px_#0f132726] opacity-80" />
                    <div className="absolute top-[9px] left-[9px] w-[66px] h-[66px] bg-[#f9f9f9] rounded-full shadow-[2px_10px_34px_#0f132726]" />
                  </div>

                  <div className="absolute top-[346px] left-[41px]">
                    <ButtonUI className="bg-[#3364e1] hover:bg-[#2850c7] text-white [font-family:'Nunito_Sans',Helvetica] font-bold text-[22.1px] h-[46px] px-8 rounded-[51.07px] shadow-[0px_8.51px_20.43px_#3465e14c] transition-colors">
                      Present
                    </ButtonUI>
                  </div>

                  <div className="absolute top-[340px] left-[202px]">
                    <div className="relative w-[156px] h-[59px]">
                      <div className="absolute top-0 left-0 w-[154px] h-[59px] bg-[#ffd3e0] rounded-[51.07px]" />
                      <ButtonUI className="absolute top-1.5 left-[7px] w-[139px] h-[46px] bg-[#e13367] hover:bg-[#c72d5a] text-white [font-family:'Nunito_Sans',Helvetica] font-bold text-[22.1px] rounded-[51.07px] shadow-[0px_8.51px_20.43px_#c92e5d4c] transition-colors">
                        <PhoneIcon className="w-[15px] h-[15px] mr-2" />
                        Call
                      </ButtonUI>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
