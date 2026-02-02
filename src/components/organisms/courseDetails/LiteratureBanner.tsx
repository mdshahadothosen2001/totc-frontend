import { BookOpenIcon, StarIcon, UsersIcon } from "lucide-react";
import { ButtonUI } from "../../ui";

const LiteratureBanner = () => {
  return (
    <div className="relative w-full my-12 px-4 sm:px-6 lg:px-0">
      {/* Background */}
      <div
        className="
          relative mx-auto
          max-w-7xl
          rounded-2xl
          bg-[linear-gradient(0deg,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/src/assets/literature-banner.png')]
          bg-cover bg-center
          min-h-[300px] sm:min-h-[360px] lg:min-h-[415px]
          flex items-center
        "
      >
        {/* Content Wrapper */}
        <div className="relative w-full flex flex-col lg:flex-row items-center lg:items-stretch px-6 sm:px-10 lg:px-16">
          
          {/* Avatar */}
          <div className="relative lg:absolute lg:left-16 lg:top-1/2 lg:-translate-y-1/2 mb-6 lg:mb-0 z-10">
            <img
              src="/src/assets/hena.png"
              alt="Hena"
              className="
                w-28 h-28 sm:w-36 sm:h-36 lg:w-40 lg:h-40
                rounded-full
                border-4 border-white
                object-cover
                shadow-lg
                bg-white
              "
            />
          </div>

          {/* Info Card */}
          <div
            className="
              bg-white/90
              rounded-2xl
              shadow-lg
              w-full
              lg:ml-[220px]
              p-6 sm:p-8 lg:p-10
              flex flex-col gap-6
            "
          >
            {/* Top */}
            <div className="flex flex-col lg:flex-row justify-between gap-6">
              <div>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-1">
                  John Anderson
                </h2>
                <div className="text-sm sm:text-base text-gray-500 mb-3">
                  Assistant Professor at Mcmaster University
                </div>
                <p className="text-sm sm:text-base text-gray-700 max-w-2xl leading-snug">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>

              <ButtonUI
                className="
                  !bg-[#49BBBD]
                  hover:!bg-[#3fa3a5]
                  !rounded-xl
                  h-12 sm:h-14 lg:h-[63px]
                  px-8
                  font-bold
                  text-base sm:text-lg lg:text-2xl
                  text-white
                  !shadow-none
                  self-start lg:self-center
                "
              >
                Enroll Now
              </ButtonUI>
            </div>

            {/* Bottom */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-4 sm:gap-6 text-gray-600 text-sm">
                <div className="flex items-center gap-2">
                  <StarIcon className="w-4 h-4" />
                  4.9 Instructor Rating
                </div>
                <div className="flex items-center gap-2">
                  <UsersIcon className="w-4 h-4" />
                  1,592 Students
                </div>
                <div className="flex items-center gap-2">
                  <BookOpenIcon className="w-4 h-4" />
                  Courses
                </div>
              </div>

              <div className="flex gap-4">
                <img src="/src/assets/social/twitter.png" alt="Twitter" className="w-5 h-5" />
                <img src="/src/assets/social/youtube.png" alt="Youtube" className="w-5 h-5" />
                <img src="/src/assets/social/instagram.png" alt="Instagram" className="w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiteratureBanner;
