import { BookOpenIcon, StarIcon, UsersIcon } from "lucide-react";
import { ButtonUI } from "../../ui";

const LiteratureBanner = () => (
    <div
        className="relative flex items-center justify-center my-12"
        style={{
            width: "100%",
            minHeight: 415,
            height: 415,
            marginTop: 40,
            marginBottom: 48,
        }}
    >
        <div
            className="absolute"
            style={{
                left: 120,
                right: 120,
                top: 0,
                bottom: 0,
                width: "calc(100% - 240px)",
                height: 415,
                borderRadius: 20,
                background: `linear-gradient(0deg, rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/src/assets/literature-banner.png') center/cover no-repeat`,
                zIndex: 1,
            }}
        />
        <div
            className="absolute"
            style={{
                left: 140,
                top: "50%",
                transform: "translateY(-50%)",
                zIndex: 2,
            }}
        >
            <img
                src="/src/assets/hena.png"
                alt="Hena"
                className="rounded-full border-4 border-white object-cover shadow-lg"
                style={{
                    width: 160,
                    height: 160,
                    minWidth: 160,
                    minHeight: 160,
                    background: "#fff",
                }}
            />
        </div>
        <div
            className="relative flex flex-col justify-between bg-white bg-opacity-90 rounded-2xl shadow-lg"
            style={{
                marginLeft: "calc(160px + 60px)",
                width: "70%",
                minHeight: 240,
                padding: "32px 40px",
                zIndex: 3,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
            }}
        >
            <div className="flex w-full justify-between items-start">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">John Anderson</h2>
                    <div className="text-base text-gray-500 mb-2">Assistant Professor at Mcmaster University</div>
                    <p className="text-gray-700 text-base max-w-2xl leading-snug mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt utlabore et dolore magna aliqua. Ut enum ad minim veniam, quis nostrud
                    </p>
                </div>
                <div className="flex flex-col items-end w-full">
                    <ButtonUI
                        className="!bg-[#49BBBD] hover:!bg-[#3fa3a5] !rounded-xl !w-[183.16px] !h-[63px] flex items-center justify-center !shadow-none !p-0 font-poppins font-bold text-[24px] leading-[36px] text-white"
                        style={{
                            borderRadius: 12,
                        }}
                    >
                        Enroll Now
                    </ButtonUI>
                </div>
            </div>
            <div className="flex items-center justify-between w-full mt-4">
                <div className="flex gap-8">
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <StarIcon className="w-4 h-4" />
                        4.9 instructor Rating
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <UsersIcon className="w-4 h-4" />
                        1,592 Students
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 text-sm">
                        <BookOpenIcon className="w-4 h-4" />
                        Courses
                    </div>
                </div>
                <div className="flex gap-4">
                    <img src="/src/assets/social/twitter.png" alt="Twitter" className="w-6 h-6" />
                    <img src="/src/assets/social/youtube.png" alt="Youtube" className="w-6 h-6" />
                    <img src="/src/assets/social/instagram.png" alt="Instagram" className="w-6 h-6" />
                </div>
            </div>
        </div>
    </div>
);

export default LiteratureBanner;
