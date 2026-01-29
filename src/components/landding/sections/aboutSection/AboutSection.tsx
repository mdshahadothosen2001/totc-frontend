import { Button } from "../../../../components/ui/Button";

export const AboutTotcSection = (): JSX.Element => {
  return (
    <section className="w-full max-w-[1308px] mx-auto px-4 py-20">
      <div className="flex flex-col items-center gap-12">
        <h2 className="[font-family:'Poppins',Helvetica] font-semibold text-[44px] text-center tracking-[0] leading-[79.2px] whitespace-nowrap translate-y-[-1rem] animate-fade-in opacity-0">
          <span className="text-[#2f327d]">What is </span>
          <span className="text-[#00cbb8]">TOTC?</span>
        </h2>

        <p className="max-w-[1101px] [font-family:'Poppins',Helvetica] font-normal text-[#696983] text-2xl text-center tracking-[0.48px] leading-[43.2px] translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms]">
          TOTC is a platform that allows educators to create online classes
          whereby they can store the course materials online; manage
          assignments, quizzes and exams; monitor due dates; grade results and
          provide students with feedback all in one place.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-full mt-8">
          <div className="flex flex-col items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms]">
            <img
              className="w-full max-w-[600px] h-auto"
              alt="For Instructors"
              src="https://c.animaapp.com/mkz223c55tsHtR/img/group-22.png"
            />
            <div className="flex flex-col items-center gap-4">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-[#2f327d] text-[32px] text-center tracking-[0] leading-[normal]">
                FOR INSTRUCTORS
              </h3>
              <Button
                variant="outline"
                className="h-20 px-10 rounded-[80px] border-2 border-[#2f327d] bg-transparent hover:bg-[#2f327d] hover:text-white transition-colors"
              >
                <span className="[font-family:'Poppins',Helvetica] font-medium text-[22px]">
                  Start a class today
                </span>
              </Button>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
            <div className="relative w-full max-w-[600px] h-[400px] rounded-[20px] overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                alt="For Students"
                src="https://c.animaapp.com/mkz223c55tsHtR/img/rectangle-21.png"
              />
              <div className="absolute inset-0 bg-[#171b4073] opacity-60" />
            </div>
            <div className="flex flex-col items-center gap-4">
              <h3 className="[font-family:'Poppins',Helvetica] font-semibold text-white text-[32px] text-center tracking-[0] leading-[normal]">
                FOR STUDENTS
              </h3>
              <Button className="h-20 px-10 rounded-[80px] bg-[#23bdeee6] hover:bg-[#23bdee] transition-colors">
                <span className="[font-family:'Poppins',Helvetica] font-medium text-white text-[22px]">
                  Enter access code
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
