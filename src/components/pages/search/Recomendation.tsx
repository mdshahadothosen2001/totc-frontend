import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "./Avatar";

import type { JSX } from "react";
import { Card, CardContent } from "../../ui";

const testimonialData = {
  name: "Savannah Nguyen",
  email: "tanya.hill@example.com",
  testimonial: [
    "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
    "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
  ],
  profileImage: "/src/assets/search-round-hena.svg",
  socialMedia: [
    {
      name: "Twitter",
      icon: "/src/assets/social/twitter.png",
    },
    {
      name: "Facebook",
      icon: "/src/assets/social/facebook.png",
    },
    {
      name: "Instagram",
      icon: "/src/assets/social/instagram.png",
    },
  ],
};

const sideAvatars = [
  {
    src: "/src/assets/student1.svg",
    alt: "Student 1",
  },
  {
    src: "/src/assets/student2.svg",
    alt: "Student 2",
  },
  {
    src: "/src/assets/student3.svg",
    alt: "Student 3",
  },
  {
    src: "/src/assets/student4.svg",
    alt: "Student 4",
  },
];

export const RecommendedCoursesSection = (): JSX.Element => {
  return (
    <section className="relative w-full py-20 mt-20">
      <div className="absolute inset-0 bg-[#9dccff] opacity-20" />

      <div className="relative max-w-[1644px] mx-auto px-4">
        <div className="translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="[font-family:'Poppins',Helvetica] font-medium text-[#000000] text-3xl tracking-[0.60px] leading-normal mb-[70px]">
            What our students have to say
          </h2>
        </div>

        <Card className="rounded-[40px] border-0 shadow-none translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          <CardContent className="p-12">
            <div className="flex flex-col lg:flex-row gap-12 items-start">
              <div className="relative flex-shrink-0 w-full lg:w-[522px]">
                <div className="relative w-full h-[515px]">
                  <div className="absolute top-0 right-[59px] w-[106px] h-[106px] bg-[#efff91b0] rounded-full" />
                  <div className="absolute top-[322px] right-[44px] w-[150px] h-[150px] bg-[#fabb819e] rounded-full" />
                  <div className="absolute top-[275px] left-0 w-60 h-60 bg-[#87ffd478] rounded-[120px]" />

                  <Avatar className="absolute top-[22px] left-[72px] w-[450px] h-[450px]">
                    <AvatarImage
                      src={testimonialData.profileImage}
                      alt={testimonialData.name}
                      className="object-cover"
                    />
                    <AvatarFallback className="text-6xl">
                      {testimonialData.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              </div>

              <div className="flex-1 flex flex-col lg:flex-row gap-8">
                <div className="flex-1 space-y-6">
                  <div>
                    <h3 className="[font-family:'Poppins',Helvetica] font-bold text-[#252641] text-3xl tracking-[0] leading-normal">
                      {testimonialData.name}
                    </h3>
                    <p className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-2xl tracking-[0] leading-normal mt-4">
                      {testimonialData.email}
                    </p>
                  </div>

                  <div className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-lg tracking-[0.36px] leading-[32.4px]">
                    {testimonialData.testimonial.map((line, index) => (
                      <p key={index}>{line}</p>
                    ))}
                  </div>

                  <div className="flex gap-4 items-center">
                    {testimonialData.socialMedia.map((social, index) => (
                      <a
                        key={index}
                        href="#"
                        className="w-8 h-8 transition-transform hover:scale-110"
                        aria-label={social.name}
                      >
                        <img
                          src={social.icon}
                          alt={social.name}
                          className="w-full h-full object-contain"
                        />
                      </a>
                    ))}
                  </div>
                </div>

                <div className="flex lg:flex-col gap-6 justify-center lg:justify-start">
                  {sideAvatars.map((avatar, index) => (
                    <Avatar
                      key={index}
                      className="w-[79px] h-[79px] cursor-pointer transition-transform hover:scale-110"
                    >
                      <AvatarImage
                        src={avatar.src}
                        alt={avatar.alt}
                        className="object-cover"
                      />
                      <AvatarFallback>{avatar.alt}</AvatarFallback>
                    </Avatar>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
