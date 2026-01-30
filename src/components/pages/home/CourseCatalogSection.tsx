import type { JSX } from "react";
import { ChevronRightIcon } from "lucide-react";
import { ButtonUI } from "../../../components/ui";
import { Card, CardContent } from "../../../components/ui";

const courseCategoriesData = [
  {
    id: 1,
    title: "Lorem Ipsum",
    icon: "https://c.animaapp.com/mkz223c55tsHtR/img/android-color-palette.png",
    detailImage: "https://c.animaapp.com/mkz223c55tsHtR/img/detail.png",
    courses: [
      {
        title: "Ut Sed Eros",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle.png",
        bgColor: "bg-[#ff6f00]",
        left: "left-[43px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[119.74%]",
        textLeft: "left-[-9.87%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Curabitur Egestas",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-1.png",
        bgColor: "bg-[#ff8374]",
        left: "left-[178px]",
        topOffset: "top-[11.76%]",
        leftOffset: "left-[18.93%]",
        textWidth: "w-[182.96%]",
        textLeft: "left-[-41.48%]",
        textTop: "top-[calc(50.00%_-_19px)]",
      },
      {
        title: "Quisque Conseq…",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-2.png",
        bgColor: "bg-[#b45a1b]",
        left: "left-[317px]",
        topOffset: "top-[13.46%]",
        leftOffset: "left-[19.08%]",
        textWidth: "w-[184.88%]",
        textLeft: "left-[-42.51%]",
        textTop: "top-[calc(50.00%_-_14px)]",
      },
      {
        title: "Cras Convallis",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-3.png",
        bgColor: "bg-[#ffb300]",
        left: "left-[451px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[147.52%]",
        textLeft: "left-[-23.76%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Vestibulum fauci…",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-4.png",
        bgColor: "bg-[#c583ff]",
        left: "left-[586px]",
        topOffset: "top-[12.74%]",
        leftOffset: "left-[18.23%]",
        textWidth: "w-[190.62%]",
        textLeft: "left-[-44.73%]",
        textTop: "top-[calc(50.00%_-_14px)]",
      },
      {
        title: "Ut Sed Eros",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-5.png",
        bgColor: "bg-[#00a8ff]",
        left: "left-[725px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[119.74%]",
        textLeft: "left-[-9.87%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Vestibulum faucibu",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-6.png",
        bgColor: "bg-[#6db4a7]",
        left: "left-[859px]",
        topOffset: "top-[14.11%]",
        leftOffset: "left-[18.62%]",
        textWidth: "w-[199.24%]",
        textLeft: "left-[-49.27%]",
        textTop: "top-[calc(50.00%_-_13px)]",
      },
    ],
  },
  {
    id: 2,
    title: "Quisque a Consequat",
    icon: "https://c.animaapp.com/mkz223c55tsHtR/img/shape.svg",
    detailImage: "https://c.animaapp.com/mkz223c55tsHtR/img/---.png",
    courses: [
      {
        title: "Ut Sed Eros",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-7.png",
        bgColor: "bg-[#ff6f00]",
        left: "left-[43px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[119.74%]",
        textLeft: "left-[-9.87%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Curabitur Egestas",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-8.png",
        bgColor: "bg-[#ff8374]",
        left: "left-[178px]",
        topOffset: "top-[11.76%]",
        leftOffset: "left-[18.93%]",
        textWidth: "w-[183.92%]",
        textLeft: "left-[-41.96%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Quisque Consequat",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-9.png",
        bgColor: "bg-[#b45a1b]",
        left: "left-[317px]",
        topOffset: "top-[13.46%]",
        leftOffset: "left-[19.08%]",
        textWidth: "w-[201.16%]",
        textLeft: "left-[-50.66%]",
        textTop: "top-[calc(50.00%_-_14px)]",
      },
      {
        title: "Cras Convallis",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-10.png",
        bgColor: "bg-[#ffb300]",
        left: "left-[451px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[147.52%]",
        textLeft: "left-[-23.76%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Vestibulum faucibu",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-11.png",
        bgColor: "bg-[#308598]",
        left: "left-[1351px]",
        topOffset: "top-[12.74%]",
        leftOffset: "left-[18.23%]",
        textWidth: "w-[199.24%]",
        textLeft: "left-[-49.04%]",
        textTop: "top-[calc(50.00%_-_14px)]",
      },
      {
        title: "Ut Sed Eros",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-13.png",
        bgColor: "bg-[#00a8ff]",
        left: "left-[1491px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[119.74%]",
        textLeft: "left-[-9.87%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Vestibulum faucibu",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-13.png",
        bgColor: "bg-[#6db4a7]",
        left: "left-[1624px]",
        topOffset: "top-[14.11%]",
        leftOffset: "left-[18.62%]",
        textWidth: "w-[200.20%]",
        textLeft: "left-[-49.75%]",
        textTop: "top-[calc(50.00%_-_12px)]",
      },
    ],
  },
  {
    id: 3,
    title: "Aenean Facilisis",
    icon: "https://c.animaapp.com/mkz223c55tsHtR/img/ribbon-b.png",
    detailImage: "https://c.animaapp.com/mkz223c55tsHtR/img/detail-1.png",
    courses: [
      {
        title: "Ut Sed Eros",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-20.png",
        bgColor: "bg-[#ff6f00]",
        left: "left-[43px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[119.74%]",
        textLeft: "left-[-9.87%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Curabitur Egestas",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-20.png",
        bgColor: "bg-[#ff8374]",
        left: "left-[935px]",
        topOffset: "top-[11.76%]",
        leftOffset: "left-[18.93%]",
        textWidth: "w-[182.96%]",
        textLeft: "left-[-41.48%]",
        textTop: "top-[calc(50.00%_-_19px)]",
      },
      {
        title: "Quisque Consequat",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-20.png",
        bgColor: "bg-[#b45a1b]",
        left: "left-[1074px]",
        topOffset: "top-[13.46%]",
        leftOffset: "left-[19.08%]",
        textWidth: "w-[201.16%]",
        textLeft: "left-[-50.66%]",
        textTop: "top-[calc(50.00%_-_14px)]",
      },
      {
        title: "Cras Convallis",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-20.png",
        bgColor: "bg-[#ffb300]",
        left: "left-[1208px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[147.52%]",
        textLeft: "left-[-23.76%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Vestibulum faucibu",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-20.png",
        bgColor: "bg-[#308598]",
        left: "left-[1351px]",
        topOffset: "top-[12.74%]",
        leftOffset: "left-[18.23%]",
        textWidth: "w-[200.20%]",
        textLeft: "left-[-49.52%]",
        textTop: "top-[calc(50.00%_-_13px)]",
      },
      {
        title: "Ut Sed Eros",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-20.png",
        bgColor: "bg-[#00a8ff]",
        left: "left-[1491px]",
        topOffset: "top-[11.43%]",
        leftOffset: "left-[19.16%]",
        textWidth: "w-[119.74%]",
        textLeft: "left-[-9.87%]",
        textTop: "top-[calc(50.00%_-_20px)]",
      },
      {
        title: "Vestibulum faucibu",
        image: "https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-20.png",
        bgColor: "bg-[#6db4a7]",
        left: "left-[1624px]",
        topOffset: "top-[14.11%]",
        leftOffset: "left-[18.62%]",
        textWidth: "w-[199.24%]",
        textLeft: "left-[-49.27%]",
        textTop: "top-[calc(50.00%_-_13px)]",
      },
    ],
  },
];

const CourseCatalogSection = (): JSX.Element => {
  return (
    <section className="relative w-full mt-14 py-16 overflow-hidden">
      <div className="absolute -top-px -left-px w-[81.3%] h-full bg-[#9ccbff] rounded-br-[100px] opacity-20" />

      <div className="container mx-auto px-8 relative z-10">
        <header className="mb-16 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:0ms]">
          <h2 className="[font-family:'Roboto',Helvetica] font-bold text-[#000000de] text-[40px] tracking-[0] leading-normal mb-2">
            Explore Course
          </h2>
          <p className="[font-family:'Roboto',Helvetica] font-medium text-[#0000008a] text-2xl tracking-[0] leading-normal">
            Ut sed eros finibus, placerat orci id, dapibus.
          </p>
        </header>

        <div className="space-y-24">
          {courseCategoriesData.map((category, categoryIndex) => (
            <div
              key={category.id}
              className="relative translate-y-[-1rem] animate-fade-in opacity-0"
              style={
                {
                  "--animation-delay": `${(categoryIndex + 1) * 200}ms`,
                } as React.CSSProperties
              }
            >
              <div className="flex items-center justify-between mb-12">
                <div className="flex items-center gap-4">
                  <img
                    src={category.icon}
                    alt={`${category.title} icon`}
                    className="w-7 h-7 object-contain"
                  />
                  <h3 className="[font-family:'Roboto',Helvetica] font-bold text-[#000000de] text-[28px] tracking-[0] leading-normal">
                    {category.title}
                  </h3>
                </div>

                <ButtonUI
                  variant="ghost"
                  className="h-auto p-0 text-[#00bcd4] hover:text-[#00bcd4] hover:bg-transparent [font-family:'Roboto',Helvetica] font-medium text-2xl"
                >
                  SEE ALL
                  <ChevronRightIcon className="ml-2 w-8 h-8" />
                </ButtonUI>
              </div>

              <div className="relative h-[541px]">
                <div className="absolute top-[458px] left-[7px] w-[88%] h-[84px] bg-black rounded-[29.5px] opacity-5" />

                <div className="relative h-full">
                  {category.courses.map((course, courseIndex) => (
                    <Card
                      key={courseIndex}
                      className={`absolute ${course.left} top-[93px] w-[104px] h-[418px] overflow-hidden rotate-[-10.02deg] border-0 shadow-none bg-transparent`}
                    >
                      <CardContent className="p-0 relative w-full h-full">
                        <div className="absolute w-full h-full top-0 left-0">
                          <div className="absolute w-[101.92%] h-[100.48%] top-0 left-0 bg-white rounded-3xl shadow-[0px_3px_49px_9px_#0000000f]" />

                          <img
                            className="absolute w-[139.59%] h-[93.31%] top-[4.26%] left-[-16.83%] rounded-3xl rotate-[10.02deg] object-cover"
                            alt={course.title}
                            src={course.image}
                          />
                        </div>

                        <div
                          className={`absolute w-[61.92%] h-[76.81%] ${course.topOffset} ${course.leftOffset} ${course.bgColor} rounded-3xl`}
                        />

                        <div
                          className={`absolute ${course.textWidth} ${course.textTop} ${course.textLeft} rotate-90 [font-family:'Roboto',Helvetica] font-medium text-white text-2xl text-center tracking-[0] leading-normal`}
                        >
                          {course.title}
                        </div>
                      </CardContent>
                    </Card>
                  ))}

                  <div
                    className={`absolute top-[88px] ${
                      category.id === 1
                        ? "left-[1006px]"
                        : category.id === 2
                          ? "left-[612px]"
                          : "left-[199px]"
                    } w-[685px] h-[430px] bg-cover bg-center bg-no-repeat rounded-lg`}
                    style={{ backgroundImage: `url(${category.detailImage})` }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCatalogSection;
