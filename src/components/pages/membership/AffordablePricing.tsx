import type { JSX } from "react";
import { OutlineButton, PrimaryButton } from "../../atoms";

const AffordablePricing = (): JSX.Element => {
    return (
        <section className="w-full max-w-[1300px] mx-auto px-6 sm:px-10 lg:px-32 py-16">
            <h2 className="text-center text-4xl md:text-5xl font-bold text-[#38b2ac] mb-8" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Affordable pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                <div className=" p-6 flex flex-col items-start">
                    <div className="flex items-center gap-2 text-[#38b2ac] text-2xl mb-2">
                        <span>Like a pussy</span>
                    </div>
                    <h3 className="font-extrabold text-5xl text-[#263238] mb-10">
                        Free <span className="text-base font-medium uppercase">/ Forever</span>
                    </h3>
                    <ul className="space-y-3 mb-6">
                        {['Components-driven system', 'Sales-boosting landing pages', 'Awesome Feather icons pack'].map((t) => (
                            <li key={t} className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="flex items-center justify-center w-6 h-6 bg-gray-200 rounded-full">
                                    <svg className="w-3 h-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                    <OutlineButton
                        w="180px"
                        h="44px"
                        borderRadius="10px"
                        className="border border-gray-200 text-[#29B9E7] bg-white hover:bg-gray-50"
                    >
                        Try for free
                    </OutlineButton>
                </div>

                <div className="bg-white rounded-2xl p-6 shadow-2xl transform -translate-y-4 border border-gray-100 flex flex-col items-center">
                    <div className="w-full flex justify-between items-center mb-4">
                        <div className="flex items-center gap-2 text-[#38b2ac] text-2xl">
                            <svg className="w-8 h-8 text-[#38b2ac]" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                            </svg>
                            <span>Individual</span>
                        </div>
                        <div className="text-1xl uppercase px-2 py-1 border border-[#38b2ac] rounded-full font-semibold">
                            Best!
                        </div>
                    </div>

                    <h3 className="self-start w-full text-left font-extrabold text-5xl text-[#111827] mb-10">
                        $24 <span className="text-base font-medium uppercase">/ Month</span>
                    </h3>

                    <ul className="w-full space-y-3 mb-6">
                        {[
                            'Components-driven system',
                            'Sales-boosting landing pages',
                            'Awesome Feather icons pack',
                            'Themed into 3 different styles',
                            'Will help to learn Figma',
                        ].map((t) => (
                            <li key={t} className="flex items-center gap-3 text-sm text-gray-700">
                                <span className="flex items-center justify-center w-6 h-6 bg-[#FDE68A] rounded-full">
                                    <svg className="w-3 h-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>

                    <PrimaryButton w="220px" h="48px" borderRadius="12px" className="bg-[#29B9E7] text-white shadow-md">
                        Regular license
                    </PrimaryButton>
                </div>

                <div className="p-6 flex flex-col items-start">
                    <div className="flex items-center gap-2 text-[#38b2ac] text-2xl mb-2">
                        <svg
                            className="w-8 h-8 text-[#38b2ac]"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            aria-hidden="true"
                        >
                            <path d="M16 11c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 3-1.34 3-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h7v-2.5c0-.83.67-1.5 1.5-1.5H14c.83 0 1.5.67 1.5 1.5V19h7v-2.5c0-2.33-4.67-3.5-7-3.5H8z" />
                        </svg>
                        <span>Corporate</span>
                    </div>
                    <h3 className="font-extrabold text-5xl mb-10">
                        $12 <span className="text-base font-medium uppercase">/ Editor</span>
                    </h3>
                    <ul className="space-y-3 mb-6">
                        {['Components-driven system', 'Sales-boosting landing pages', 'Awesome Feather icons pack', 'Themed into 3 different styles'].map((t) => (
                            <li key={t} className="flex items-center gap-3 text-sm text-gray-600">
                                <span className="flex items-center justify-center w-6 h-6 bg-green-100 rounded-full">
                                    <svg className="w-3 h-3 text-green-600" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 00-1.414-1.414L8 11.172 4.707 7.879a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span>{t}</span>
                            </li>
                        ))}
                    </ul>
                    <OutlineButton w="180px" h="44px" borderRadius="10px" className="border border-gray-200 bg-white text-[#29B9E7]">
                        Extended license
                    </OutlineButton>
                </div>
            </div>
        </section>
    );
};

export default AffordablePricing;
