import type { JSX } from "react";
import { PhoneIcon } from "lucide-react";
import { ButtonUI } from "../../../components/ui";
import { Card, CardContent } from "../../../components/ui";

const videoParticipants = [
  {
    name: "Eveny Howard",
    role: "Instructor",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-2.png",
    bgImage: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-1.png",
  },
  {
    name: "Adam Levin",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-3.png",
  },
  {
    name: "Tamara Clarke",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-4.png",
  },
  {
    name: "Humbert Holland",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-5.png",
  },
  {
    name: "Patricia Mendoza",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-6.png",
  },
];

const featureIcons = [
  {
    top: "top-[306px]",
    left: "left-[1019px]",
  },
  {
    top: "top-[430px]",
    left: "left-[1019px]",
  },
  {
    top: "top-[544px]",
    left: "left-[1019px]",
  },
];

const gradeBookStudents = [
  {
    name: "Student 1",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-9.png",
    score: "100",
    scoreColor: "text-[#43869b]",
    bgColor: "bg-[#cdf3ff]",
    barColor: "bg-[#39c6f2]",
    top: "top-[209px]",
    left: "left-[124px]",
    scoreTop: "top-[260px]",
    scoreLeft: "left-[217px]",
    badgeTop: "top-[252px]",
    badgeLeft: "left-[185px]",
    barTop: "top-[241px]",
    barLeft: "left-[46px]",
    barWidth: "w-[127px]",
  },
  {
    name: "Student 2",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-10.png",
    score: "85",
    scoreColor: "text-[#4e8c3e]",
    bgColor: "bg-[#d7ffcd]",
    barColor: "bg-[#68f145]",
    top: "top-[359px]",
    left: "left-[266px]",
    scoreTop: "top-[415px]",
    scoreLeft: "left-[363px]",
    badgeTop: "top-[407px]",
    badgeLeft: "left-[327px]",
    barTop: "top-[392px]",
    barLeft: "left-[46px]",
    barWidth: "w-[260px]",
  },
  {
    name: "Student 3",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-11.png",
    score: "98",
    scoreColor: "text-[#486e9c]",
    bgColor: "bg-[#cde4ff]",
    barColor: "bg-[#3188ef]",
    top: "top-[186px]",
    left: "left-[416px]",
    scoreTop: "top-[264px]",
    scoreLeft: "left-[445px]",
    badgeTop: "top-64",
    badgeLeft: "left-[409px]",
    barTop: "top-[214px]",
    barLeft: "left-[459px]",
    barWidth: "w-[305px]",
  },
  {
    name: "Student 4",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-12.png",
    score: "75",
    scoreColor: "text-[#9e5555]",
    bgColor: "bg-[#ffcdcd]",
    barColor: "bg-[#f13b3b]",
    top: "top-[302px]",
    left: "left-[582px]",
    scoreTop: "top-[365px]",
    scoreLeft: "left-[554px]",
    badgeTop: "top-[357px]",
    badgeLeft: "left-[518px]",
    barTop: "top-[335px]",
    barLeft: "left-[618px]",
    barWidth: "w-[146px]",
  },
];

const discussionParticipants = [
  {
    name: "Adam Levin",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-13.png",
    top: "top-[70px]",
    left: "left-[500px]",
  },
  {
    name: "Tamara Clarke",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-14.png",
    top: "top-[70px]",
    left: "left-[347px]",
  },
  {
    name: "Humbert Holland",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-15.png",
    top: "top-[211px]",
    left: "left-[347px]",
  },
  {
    name: "Patricia Mendoza",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-16.png",
    top: "top-[211px]",
    left: "left-[500px]",
  },
];

const privateDiscussionParticipants = [
  {
    name: "Participant 1",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-17.png",
  },
  {
    name: "Patricia Mendoza",
    image: "https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-18.png",
  },
];

const FeaturesOverviewSection = (): JSX.Element => {
  return (
    <section className="w-full py-20 px-4 md:px-8 lg:px-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 translate-y-[-1rem] animate-fade-in opacity-0">
          <h2 className="[font-family:'Poppins',Helvetica] font-bold text-4xl tracking-[0] leading-[64.8px] mb-4">
            <span className="text-[#2f327d]">Our </span>
            <span className="text-[#00cbb8]">Features</span>
          </h2>
          <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl tracking-[0] leading-[43.2px]">
            This very extraordinary feature, can make learning activities more
            efficient
          </p>
        </div>

        <div className="space-y-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
            <div className="relative order-2 lg:order-1">
              <div className="absolute top-0 left-[63px] w-[140px] h-[140px] bg-[#33efa0] rounded-[70px]" />
              <div className="absolute top-2 left-[223px] w-[30px] h-[30px] bg-[#33d8ef] rounded-[15px]" />
              <div className="absolute top-[386px] left-[607px] w-[264px] h-[264px] bg-[#5b61ea] rounded-[132px]" />
              <div className="absolute top-[598px] left-[578px] w-[30px] h-[30px] bg-[#f56565] rounded-[15px]" />

              <Card className="relative bg-[#f4f4f499] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] border-0 shadow-none">
                <CardContent className="p-0">
                  <div className="bg-[#e9e9e999] rounded-t-[20px] h-[34px] backdrop-blur-2xl backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(40px)_brightness(100%)] flex items-center gap-2 px-[27px]">
                    <div className="w-3.5 h-3.5 bg-[#ee6666] rounded-[7px]" />
                    <div className="w-3.5 h-3.5 bg-[#f6c566] rounded-[7px]" />
                    <div className="w-3.5 h-3.5 bg-[#5bea7a] rounded-[7px]" />
                  </div>

                  <div className="relative p-8 min-h-[450px]">
                    <div className="absolute top-[93px] left-[84px] w-[255px] h-[253px]">
                      <img
                        className="absolute top-[-25px] left-[-41px] w-[337px] h-[329px]"
                        alt="Mask group"
                        src={videoParticipants[0].bgImage}
                      />
                      <img
                        className="absolute top-0 left-0 w-[255px] h-[247px]"
                        alt="Mask group"
                        src={videoParticipants[0].image}
                      />
                      <div className="absolute top-[216px] left-2 w-[174px] h-[22px]">
                        <div className="w-[170px] h-[22px] rounded-[5.55px] backdrop-blur-[5.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.55px)_brightness(100%)] absolute top-0 left-0 bg-[#c9d3e666]" />
                        <div className="absolute top-[3px] left-[19px] w-[58px] h-4 bg-[#3692ff] rounded-[5.55px]" />
                        <div className="absolute top-[3px] left-[86px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-white text-[11.1px] tracking-[0] leading-[normal]">
                          {videoParticipants[0].name}
                        </div>
                        <div className="absolute top-1 left-[26px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-white text-[10px] tracking-[0] leading-[normal]">
                          {videoParticipants[0].role}
                        </div>
                        <div className="absolute top-[7px] left-1.5 w-[7px] h-2 flex gap-[1.1px]">
                          <div className="mt-[3.9px] w-[1.66px] h-[3.88px] ml-0 bg-white rounded-[0.55px]" />
                          <div className="mt-[1.9px] w-[1.66px] h-[5.82px] bg-white rounded-[0.55px]" />
                          <div className="mt-0 w-[1.66px] h-[7.76px] bg-white rounded-[0.55px]" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[53px] left-[677px] w-[202px] h-[195px] flex shadow-[17px_17px_40px_#0d0f1c1a] bg-[url(https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-3.png)] bg-[100%_100%]">
                      <div className="mt-[158.2px] w-[104.35px] h-[26.26px] ml-[10.8px] relative">
                        <div className="w-[102px] h-[26px] rounded-[6.73px] backdrop-blur-[6.73px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.73px)_brightness(100%)] absolute top-0 left-0 bg-[#c9d3e666]" />
                        <div className="top-1 left-[22px] w-[73px] text-white text-[13.5px] leading-[normal] absolute [font-family:'Nunito_Sans',Helvetica] font-semibold tracking-[0]">
                          {videoParticipants[1].name}
                        </div>
                        <div className="top-[9px] left-[7px] w-[9px] h-[9px] gap-[1.3px] absolute flex">
                          <div className="mt-[4.7px] w-[2.02px] h-[4.71px] ml-0 bg-white rounded-[0.67px]" />
                          <div className="mt-[2.4px] w-[2.02px] h-[7.07px] bg-white rounded-[0.67px]" />
                          <div className="mt-0 w-[2.02px] h-[9.43px] bg-white rounded-[0.67px]" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[93px] left-[456px] w-[166px] h-[161px] flex bg-[url(https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-4.png)] bg-[100%_100%]">
                      <div className="mt-[130.3px] w-[99.05px] h-[21.63px] ml-[8.9px] relative">
                        <div className="w-[97px] h-[22px] rounded-[5.55px] backdrop-blur-[5.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.55px)_brightness(100%)] absolute top-0 left-0 bg-[#c9d3e666]" />
                        <div className="top-[3px] left-[18px] w-[73px] text-white text-[11.1px] leading-[normal] absolute [font-family:'Nunito_Sans',Helvetica] font-semibold tracking-[0]">
                          {videoParticipants[2].name}
                        </div>
                        <div className="absolute top-[7px] left-1.5 w-[7px] h-2 flex gap-[1.1px]">
                          <div className="mt-[3.9px] w-[1.66px] h-[3.88px] ml-0 bg-white rounded-[0.55px]" />
                          <div className="mt-[1.9px] w-[1.66px] h-[5.82px] bg-white rounded-[0.55px]" />
                          <div className="mt-0 w-[1.66px] h-[7.76px] bg-white rounded-[0.55px]" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[279px] left-[456px] w-[166px] h-[161px] flex bg-[url(https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-5.png)] bg-[100%_100%]">
                      <div className="mt-[130.3px] w-[115.13px] h-[21.63px] ml-[8.9px] relative">
                        <div className="w-[113px] h-[22px] rounded-[5.55px] backdrop-blur-[5.55px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(5.55px)_brightness(100%)] absolute top-0 left-0 bg-[#c9d3e666]" />
                        <div className="absolute top-[3px] left-[18px] w-[89px] [font-family:'Nunito_Sans',Helvetica] font-semibold text-white text-[11.1px] tracking-[0] leading-[normal]">
                          {videoParticipants[3].name}
                        </div>
                        <div className="absolute top-[7px] left-1.5 w-[7px] h-2 flex gap-[1.1px]">
                          <div className="mt-[3.9px] w-[1.66px] h-[3.88px] ml-0 bg-white rounded-[0.55px]" />
                          <div className="mt-[1.9px] w-[1.66px] h-[5.82px] bg-white rounded-[0.55px]" />
                          <div className="mt-0 w-[1.66px] h-[7.76px] bg-white rounded-[0.55px]" />
                        </div>
                      </div>
                    </div>

                    <div className="absolute top-[290px] left-[656px] w-60 h-[232px] flex shadow-[20px_20px_40px_#0d0f1c26] bg-[url(https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-6.png)] bg-[100%_100%]">
                      <div className="mt-[188.0px] w-[161.2px] h-[31.2px] ml-[12.8px] relative">
                        <div className="w-[159px] h-[31px] rounded-lg backdrop-blur backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(8px)_brightness(100%)] absolute top-0 left-0 bg-[#c9d3e666]" />
                        <div className="top-[5px] left-[26px] w-[125px] text-white text-base leading-[normal] absolute [font-family:'Nunito_Sans',Helvetica] font-semibold tracking-[0]">
                          {videoParticipants[4].name}
                        </div>
                        <div className="top-2.5 left-2 w-2.5 h-[11px] gap-[1.6px] absolute flex">
                          <div className="mt-[5.6px] w-[2.4px] h-[5.6px] bg-white rounded-[0.8px]" />
                          <div className="mt-[2.8px] w-[2.4px] h-[8.4px] bg-white rounded-[0.8px]" />
                          <div className="w-[2.4px] h-[11.2px] bg-white rounded-[0.8px]" />
                        </div>
                      </div>
                    </div>

                    <img
                      className="absolute top-[229px] left-[368px] w-[161px] h-[893px]"
                      alt="Group"
                      src="https://c.animaapp.com/mkz223c55tsHtR/img/group-70.png"
                    />

                    <div className="absolute top-[381px] left-[45px] flex gap-4">
                      <ButtonUI className="w-[155px] h-[51px] bg-[#3364e1] rounded-[51.07px] shadow-[0px_8.51px_20.43px_#3465e14c] hover:bg-[#2854d0]">
                        <span className="text-[22.1px] [font-family:'Nunito_Sans',Helvetica] font-bold text-white tracking-[0] leading-[normal]">
                          Present
                        </span>
                      </ButtonUI>

                      <ButtonUI className="relative w-[171px] h-[65px] bg-transparent hover:bg-transparent p-0">
                        <div className="absolute top-0 left-0 w-[169px] h-[65px] bg-[#ffd3e0] rounded-[51.07px]" />
                        <div className="absolute top-[7px] left-2 w-[153px] h-[51px] bg-[#e13367] rounded-[51.07px] shadow-[0px_8.51px_20.43px_#c92e5d4c]" />
                        <div className="relative z-10 flex items-center gap-2">
                          <PhoneIcon className="w-[17px] h-[17px] text-white" />
                          <span className="text-[22.1px] [font-family:'Nunito_Sans',Helvetica] font-bold text-white tracking-[0] leading-[normal]">
                            Call
                          </span>
                        </div>
                      </ButtonUI>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[40px] tracking-[0] leading-[64px]">
                <span className="text-[#2f327d]">A </span>
                <span className="text-[#00cbb8]">user interface</span>
                <span className="text-[#2f327d]">
                  {" "}
                  designed for the classroom
                </span>
              </h3>

              <div className="space-y-8">
                {featureIcons.map((icon, index) => (
                  <div key={index} className="flex gap-6 items-start">
                    <div className="w-[60px] h-[60px] bg-neutral-50 rounded-[30px] shadow-[0px_15px_44px_#0d0f1c1f] flex items-center justify-center flex-shrink-0">
                      {index === 0 && (
                        <div className="w-[27px] h-[26px] relative">
                          <div className="absolute top-0 left-0 w-3 h-3 bg-[#2f327d] rounded-sm" />
                          <div className="absolute top-3.5 left-0 w-3 h-3 bg-[#2f327d] rounded-sm" />
                          <div className="absolute top-0 left-[15px] w-3 h-3 bg-[#2f327d] rounded-sm" />
                          <div className="absolute top-3.5 left-[15px] w-3 h-3 bg-[#f48c06] rounded-sm" />
                        </div>
                      )}
                      {index === 1 && (
                        <div className="w-7 h-[26px] relative">
                          <div className="absolute top-1.5 left-2 w-5 h-5 bg-[#2f327d] rounded-sm" />
                          <div className="absolute top-0 left-0 w-[21px] h-[21px] bg-[#f48c06] rounded-sm" />
                        </div>
                      )}
                      {index === 2 && (
                        <img
                          className="w-[30px] h-[26px]"
                          alt="Users"
                          src="https://c.animaapp.com/mkz223c55tsHtR/img/users-2.svg"
                        /> 
                      )}
                    </div>
                    <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-[22px] tracking-[0.44px] leading-[39.6px] flex-1">
                      {index === 0 &&
                        "Teachers don't get lost in the grid view and have a dedicated Podium space."}
                      {index === 1 &&
                        "TA's and presenters can be moved to the front of the class."}
                      {index === 2 &&
                        "Teachers can easily see all students and class data at one time."}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <div className="space-y-6">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[40px] tracking-[0] leading-[64px]">
                <span className="text-[#00cbb8]">Tools</span>
                <span className="text-[#2f327d]">
                  {" "}
                  For Teachers And Learners
                </span>
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-[22px] tracking-[0.44px] leading-[39.6px]">
                Class has a dynamic set of teaching tools built to be deployed
                and used during class. Teachers can handout assignments in
                real-time for students to complete and submit.
              </p>
            </div>

            <div className="relative">
              <img
                className="w-full h-auto"
                alt="Group"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/group-122.png"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="relative order-2 lg:order-1">
              <div className="absolute top-[632px] left-[33px] w-[19px] h-[19px] bg-[#34e6a5] rounded-[9.58px]" />
              <div className="absolute top-[358px] left-[552px] w-4 h-4 bg-[#f3528c] rounded-[8.14px]" />
              <div className="absolute top-[26px] left-0 w-[100px] h-[100px] bg-[#677ef3] rounded-[49.82px]" />
              <div className="absolute top-0 left-[118px] w-[23px] h-[23px] bg-[#f3a267] rounded-[11.5px]" />

              <Card className="relative bg-white rounded-[18.21px] shadow-[0px_9.1px_43.69px_#272a6e1a] border-0">
                <CardContent className="p-0">
                  <div className="p-8">
                    <div className="w-[174px] h-12 bg-[#cdd8ff] rounded-[72.82px] flex items-center justify-center mb-8">
                      <span className="[font-family:'Poppins',Helvetica] font-medium text-[#707eb0] text-xl tracking-[0] leading-[32.0px]">
                        Question 1
                      </span>
                    </div>

                    <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-[#55578d] text-[31px] tracking-[0] leading-[49.5px] mb-8">
                      True or false? This play takes place in Italy
                    </h4>

                    <div className="relative">
                      <img
                        className="w-full h-auto"
                        alt="Mask group"
                        src="https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-7.png"
                      />
                      <img
                        className="absolute top-[60px] left-[53px] w-[456px] h-64"
                        alt="Mask group"
                        src="https://c.animaapp.com/mkz223c55tsHtR/img/mask-group-8.png"
                      />

                      <Card className="absolute bottom-[-60px] left-1/2 transform -translate-x-1/2 w-[367px] bg-white rounded-[18.21px] shadow-[0px_18.21px_52.8px_#272a6e14] border-0">
                        <CardContent className="p-6 flex items-center gap-4">
                          <div className="relative w-[59px] h-[59px] bg-[#d7f8ec] rounded-[29.7px] flex items-center justify-center flex-shrink-0">
                            <div className="absolute top-[26px] left-[34px] w-[37px] h-[38px] bg-[#d7f8ec] rounded-[18.68px/19.16px]" />
                            <img
                              className="relative z-10 w-[88px] h-[76px]"
                              alt="Group"
                              src="https://c.animaapp.com/mkz223c55tsHtR/img/group-86.png"
                            />
                          </div>
                          <p className="[font-family:'Poppins',Helvetica] font-semibold text-[#41be90] text-xl tracking-[0] leading-[32.0px]">
                            Your answer was sent successfully
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <img
                className="absolute top-[-7px] left-[373px] w-[157px] h-[157px]"
                alt="Group"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/group-90.png"
              />
              <img
                className="absolute top-[43px] left-[430px] w-[157px] h-[157px]"
                alt="Group"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/group-88.png"
              />
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[40px] tracking-[0] leading-[64px]">
                <span className="text-[#2f327d]">Assessments, </span>
                <span className="text-[#00cbb8]">Quizzes</span>
                <span className="text-[#2f327d]">, Tests</span>
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-[22px] tracking-[0.44px] leading-[39.6px]">
                Easily launch live assignments, quizzes, and tests. Student
                results are automatically entered in the online gradebook.
              </p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:800ms]">
            <div className="space-y-6">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[40px] tracking-[0] leading-[64px]">
                <span className="text-[#00cbb8]">Class Management</span>
                <span className="text-[#f48c06]"> </span>
                <span className="text-[#2f327d]">Tools for Educators</span>
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-[22px] tracking-[0.44px] leading-[39.6px]">
                Class provides tools to help run and manage the class such as
                Class Roster, Attendance, and more. With the Gradebook, teachers
                can review and grade tests and quizzes in real-time.
              </p>
            </div>

            <div className="relative">
              <div className="absolute top-[352px] left-[26px] w-[289px] h-52 bg-[#d2e7ff] rounded-[20px]" />
              <div className="absolute top-[41px] left-[780px] w-5 h-5 bg-[#9ed6ff] rounded-[10px/9.98px]" />
              <div className="absolute top-[7px] left-[712px] w-11 h-11 bg-[#9ed6ff] rounded-[21.99px/21.96px]" />

              <Card className="relative bg-white rounded-[20px] shadow-[0px_10px_48px_#272a6e1a] border-0">
                <CardContent className="p-0">
                  <div className="bg-[#54aef0] rounded-t-[20px] h-[70px] flex items-center justify-center">
                    <h4 className="[font-family:'Poppins',Helvetica] font-semibold text-[#f1fdff] text-[22px] tracking-[0] leading-[35.2px]">
                      GradeBook
                    </h4>
                  </div>

                  <div className="relative p-8 min-h-[400px]">
                    {gradeBookStudents.map((student, index) => (
                      <div key={index}>
                        <div
                          className={`absolute ${student.barTop} ${student.barLeft} ${student.barWidth} h-[30px] ${student.barColor}`}
                        />
                        <img
                          className={`absolute ${student.top} ${student.left} w-[85px] h-[85px]`}
                          alt="Mask group"
                          src={student.image}
                        />
                        <div
                          className={`absolute ${student.badgeTop} ${student.badgeLeft} w-[100px] h-[50px] ${student.bgColor} rounded-[60px]`}
                        />
                        <div
                          className={`absolute ${student.scoreTop} ${student.scoreLeft} [font-family:'Poppins',Helvetica] font-medium ${student.scoreColor} text-[22px] tracking-[0] leading-[35.2px]`}
                        >
                          {student.score}
                        </div>
                      </div>
                    ))}

                    <img
                      className="absolute top-[277px] left-[154px] w-[30px] h-[29px]"
                      alt="Star"
                      src="https://c.animaapp.com/mkz223c55tsHtR/img/star-5.svg"
                    />

                    <div className="absolute top-[13px] left-[13px] w-[132px] h-[132px] rotate-[-13.28deg]">
                      <div className="absolute top-0 left-0 w-[132px] h-[132px] bg-white rounded-[65.97px/65.89px] shadow-[0px_10px_48px_#282b6f1a] opacity-80" />
                      <div className="absolute top-4 left-4 w-[100px] h-[100px] bg-white rounded-[49.97px/49.92px] rotate-[-0.01deg] shadow-[0px_10px_48px_#282b6f1a]" />
                      <img
                        className="absolute top-[18px] left-[18px] w-[92px] h-[93px] rotate-[13.28deg]"
                        alt="Star"
                        src="https://c.animaapp.com/mkz223c55tsHtR/img/star-7.svg"
                      />
                    </div>

                    <ButtonUI className="absolute top-[456px] left-[554px] w-[172px] h-[59px] rounded-[60px] bg-[linear-gradient(157deg,rgba(84,90,231,1)_0%,rgba(57,63,207,1)_100%)] hover:opacity-90">
                      <div className="absolute top-[30px] left-3 w-[146px] h-[29px] bg-[#545ae7] rounded-[60px] blur-[27px]" />
                      <span className="relative z-10 [font-family:'Poppins',Helvetica] font-medium text-white text-[22px] tracking-[0] leading-[normal]">
                        Export
                      </span>
                    </ButtonUI>
                  </div>
                </CardContent>
              </Card>

              <img
                className="absolute top-[62px] left-[650px] w-[196px] h-[196px]"
                alt="Group"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/group-95.png"
              />
              <img
                className="absolute top-[483px] left-0.5 w-[84px] h-[38px]"
                alt="Group"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/group-96.png"
              />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1000ms]">
            <div className="relative order-2 lg:order-1">
              <div className="absolute top-0 left-[599px] w-[113px] h-[113px] rounded-[56.49px] border-[18.83px] border-solid border-[#23bdee]" />
              <img
                className="absolute top-[114px] left-[728px] w-[23px] h-[23px]"
                alt="Polygon"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/polygon-3.svg"
              />
              <div className="absolute top-[223px] left-0 w-[197px] h-[193px] bg-[#73bcff] rounded-[18.83px]" />

              <div className="relative">
                <Card className="absolute top-[31px] left-[19px] w-[658px] bg-[#f4f4f4] rounded-[18.83px] border-0 shadow-none">
                  <CardContent className="p-0">
                    <div className="bg-[#eaeaea] rounded-t-[18.83px] h-[26px] flex items-center gap-2 px-[13px]">
                      <div className="w-[13px] h-[13px] bg-[#ee6666] rounded-[6.45px]" />
                      <div className="w-[13px] h-[13px] bg-[#f6c566] rounded-[6.45px]" />
                      <div className="w-[13px] h-[13px] bg-[#5bea7a] rounded-[6.45px]" />
                    </div>

                    <div className="relative p-8 min-h-[340px]">
                      <img
                        className="absolute top-[51px] left-[5px] w-[255px] h-[249px]"
                        alt="Group"
                        src="https://c.animaapp.com/mkz223c55tsHtR/img/group-101.png"
                      />

                      {discussionParticipants.map((participant, index) => (
                        <div
                          key={index}
                          className={`absolute ${participant.top} ${participant.left} w-[126px] h-[122px] flex bg-[url(${participant.image})] bg-[100%_100%]`}
                        >
                          <div className="mt-[98.7px] ml-[6.7px] relative">
                            <div className="w-16 h-4 rounded-[4.2px] backdrop-blur-[4.2px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.2px)_brightness(100%)] absolute top-0 left-0 bg-[#c9d3e666]" />
                            <div className="top-[3px] left-3.5 text-white text-[8.4px] leading-[normal] absolute [font-family:'Nunito_Sans',Helvetica] font-semibold tracking-[0]">
                              {participant.name}
                            </div>
                            <div className="top-[5px] left-1 w-[5px] h-1.5 gap-[0.8px] absolute flex">
                              <div className="mt-[2.9px] w-[1.26px] h-[2.94px] bg-white rounded-[0.42px]" />
                              <div className="mt-[1.5px] w-[1.26px] h-[4.41px] bg-white rounded-[0.42px]" />
                              <div className="w-[1.26px] h-[5.88px] bg-white rounded-[0.42px]" />
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="absolute top-[296px] left-9 flex gap-4">
                        <ButtonUI className="w-[118px] h-[39px] bg-[#3364e1] rounded-[38.67px] shadow-[0px_6.45px_15.47px_#3465e14c] hover:bg-[#2854d0]">
                          <span className="text-[16.8px] [font-family:'Nunito_Sans',Helvetica] font-bold text-white tracking-[0] leading-[normal]">
                            Present
                          </span>
                        </ButtonUI>

                        <ButtonUI className="relative w-[118px] h-[39px] bg-[#e13367] rounded-[38.67px] shadow-[0px_6.45px_15.47px_#c92e5d4c] hover:bg-[#d02257]">
                          <PhoneIcon className="w-[13px] h-[13px] text-white mr-2" />
                          <span className="text-[16.8px] [font-family:'Nunito_Sans',Helvetica] font-bold text-white tracking-[0] leading-[normal]">
                            Call
                          </span>
                        </ButtonUI>
                      </div>
                    </div>

                    <div className="absolute top-0.5 left-px w-[658px] h-[363px] bg-[#87a6e31a] rounded-[18.83px] backdrop-blur-[4.71px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(4.71px)_brightness(100%)]" />
                  </CardContent>
                </Card>

                <Card className="absolute top-[131px] left-[122px] w-[595px] bg-white rounded-[18.83px] shadow-[0px_18.83px_47.08px_#2f327d1a] border-0">
                  <CardContent className="p-0">
                    <div className="bg-[#eaeaea] rounded-t-[18.83px] h-6 flex items-center gap-2 px-7">
                      <div className="w-[12.24px] h-[12.24px] bg-[#ee6666] rounded-[6.12px]" />
                      <div className="w-[12.24px] h-[12.24px] bg-[#f6c566] rounded-[6.12px]" />
                      <div className="w-[12.24px] h-[12.24px] bg-[#5bea7a] rounded-[6.12px]" />
                    </div>

                    <div className="relative p-8">
                      <div className="flex gap-4 mb-8">
                        {privateDiscussionParticipants.map(
                          (participant, index) => (
                            <div
                              key={index}
                              className={`w-[199px] ${index === 1 ? "h-48" : "h-[193px]"} bg-[url(${participant.image})] bg-[100%_100%] flex`}
                            >
                              {index === 1 && (
                                <div className="mt-[155.8px] w-[133.91px] h-[25.85px] ml-[10.6px] relative">
                                  <div className="w-[132px] h-[26px] rounded-[6.63px] backdrop-blur-[6.63px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(6.63px)_brightness(100%)] absolute top-0 left-0 bg-[#c9d3e666]" />
                                  <div className="top-1 left-[22px] w-[103px] text-white text-[13.3px] leading-[normal] absolute [font-family:'Nunito_Sans',Helvetica] font-semibold tracking-[0]">
                                    {participant.name}
                                  </div>
                                  <div className="top-[9px] left-[7px] w-[9px] h-[9px] gap-[1.3px] absolute flex">
                                    <div className="mt-[4.6px] w-[1.99px] h-[4.64px] bg-white rounded-[0.66px]" />
                                    <div className="mt-[2.3px] w-[1.99px] h-[6.96px] bg-white rounded-[0.66px]" />
                                    <div className="w-[1.99px] h-[9.28px] bg-white rounded-[0.66px]" />
                                  </div>
                                </div>
                              )}
                            </div>
                          ),
                        )}
                      </div>

                      <img
                        className="absolute top-[61px] left-[296px] w-px h-[198px]"
                        alt="Line"
                        src="https://c.animaapp.com/mkz223c55tsHtR/img/line-9.svg"
                      />

                      <div className="mt-8">
                        <h5 className="[font-family:'Nunito_Sans',Helvetica] font-bold text-[#696983] text-[22.6px] tracking-[0] leading-[36.2px] mb-2">
                          Private Discussion
                        </h5>
                        <p className="[font-family:'Nunito_Sans',Helvetica] font-semibold text-[#a7a7b5] text-[16.9px] tracking-[0] leading-[27.1px] mb-4">
                          Your video can't be seen by others
                        </p>

                        <ButtonUI className="w-[200px] h-[55px] rounded-[56.49px] bg-[linear-gradient(157deg,rgba(245,84,84,1)_0%,rgba(229,66,43,1)_100%)] hover:opacity-90">
                          <div className="absolute top-[23px] left-[11px] w-[172px] h-[27px] bg-[#eb493a] rounded-[56.49px] blur-[25.42px]" />
                          <span className="relative z-10 [font-family:'Poppins',Helvetica] font-medium text-white text-[20.7px] tracking-[0] leading-[normal]">
                            End Discussion
                          </span>
                        </ButtonUI>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <img
                  className="absolute top-32 left-6 w-[191px] h-[191px]"
                  alt="Group"
                  src="https://c.animaapp.com/mkz223c55tsHtR/img/group-105.png"
                />
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[40px] tracking-[0] leading-[64px]">
                <span className="text-[#2f327d]">One-on-One </span>
                <span className="text-[#00cbb8]">Discussions</span>
              </h3>
              <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-[22px] tracking-[0.44px] leading-[39.6px]">
                Teachers and teacher assistants can talk with students privately
                without leaving the Zoom environment.
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-20 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:1200ms]">
          <ButtonUI
            variant="outline"
            className="w-[282px] h-20 rounded-[80px] border border-solid border-[#49bbbd] bg-transparent hover:bg-[#49bbbd]/10"
          >
            <span className="[font-family:'Nunito_Sans',Helvetica] font-normal text-[#49bbbd] text-2xl tracking-[0.48px] leading-[43.2px]">
              See more features
            </span>
          </ButtonUI>
        </div>
      </div>
    </section>
  );
};

export default FeaturesOverviewSection;
