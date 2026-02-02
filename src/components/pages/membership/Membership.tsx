import { PrimaryButton } from "../../atoms";
import { NavBar } from "../../molecules";
import { Footer } from "../../organisms";
import AffordablePricing from "./AffordablePricing";
import ApplyList from "./ApplyList";
import OnlineLessonList from "./OnlineLessonList";
import StudentSays from "./StudentSays";

const Membership = () => {
  return (
    <div>
      <NavBar />

      <div className="bg-white">
        <AffordablePricing />

        <section className="w-full flex justify-center my-12">
          <div
            className="bg-[#252641] rounded-[37px] 
            w-[90vw] max-w-[1682px] min-h-[200px] 
            flex flex-col items-center justify-center 
            py-12 px-4 text-center shadow-lg
            "
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold mb-4">
              Online coaching lessons for remote learning.
            </h2>
            <p className="text-white text-base md:text-lg max-w-2xl mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              Lorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusmod tempor
            </p>
            <button
              className="bg-[#49BBBD] text-white rounded-[12px] 
              w-[236px] h-[63px] flex items-center justify-center 
              font-poppins font-bold text-[16px] leading-6 
              hover:bg-[#3ea3a5] transition-colors shadow-md
              "
              style={{ fontFamily: 'Poppins, sans-serif' }}
            >
              Start learning now
            </button>
          </div>
        </section>

        <OnlineLessonList />
      </div>

      <StudentSays />

      <div>
        <section className="flex justify-center my-12 px-4">
          <div
            className="bg-[#252641] rounded-[37px] w-full max-w-[1682px] min-h-[200px]
               flex flex-col lg:flex-row items-center justify-between
               py-10 px-6 md:px-12 text-center lg:text-left shadow-lg gap-6"
          >
            <h2 className="text-white text-2xl md:text-3xl font-bold">
              APP is available for free
            </h2>

            <div className="flex flex-col sm:flex-row gap-4">
              <PrimaryButton
                w="254px"
                h="63px"
                borderRadius="12px"
                fontSize="16px"
                className="shadow-md bg-[#29B9E7] hover:bg-[#3ea3a5] text-white flex items-center justify-center"
              >
                <img
                  src="/src/assets/icons/android.png"
                  alt="Android"
                  className="w-5 h-5 mr-2"
                />
                Android APP
              </PrimaryButton>

              <PrimaryButton
                w="254px"
                h="63px"
                borderRadius="12px"
                fontSize="16px"
                className="shadow-md bg-[#29B9E7] hover:bg-[#3ea3a5] text-white flex items-center justify-center"
              >
                <img
                  src="/src/assets/icons/apple.png"
                  alt="iOS"
                  className="w-5 h-5 mr-2"
                />
                IOS APP
              </PrimaryButton>
            </div>
          </div>
        </section>
      </div>

      <ApplyList />

      <Footer />
    </div>
  )
}

export default Membership
