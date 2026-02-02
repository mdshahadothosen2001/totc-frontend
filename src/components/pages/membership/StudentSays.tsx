import React, { useRef } from 'react'
import { Card } from '../../atoms'

const testimonials = [
    {
        name: 'Bulkin Simons',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmodadipiscing elit, sed do eiusmod',
        img: '/src/assets/lina-think-bg.png',
    },
    {
        name: 'Bulkin Simons',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmodadipiscing elit, sed do eiusmod',
        img: '/src/assets/lina-think-bg.png',
    },
    {
        name: 'Bulkin Simons',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmodadipiscing elit, sed do eiusmod',
        img: '/src/assets/lina-think-bg.png',
    },
    {
        name: 'Bulkin Simons',
        text:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor eiusmodadipiscing elit, sed do eiusmod',
        img: '/src/assets/lina-think-bg.png',
    },
]

const StudentSays: React.FC = () => {
    const containerRef = useRef<HTMLDivElement | null>(null)

    const scroll = (dir: 'left' | 'right') => {
        const el = containerRef.current
        if (!el) return
        const delta = Math.round(el.clientWidth * 0.9)
        el.scrollBy({ left: dir === 'left' ? -delta : delta, behavior: 'smooth' })
    }

    return (
        <section className="w-full bg-[#eef8ff] py-12">
            <div className="relative max-w-[94%] left-[3%] mx-auto">
                <h2 className="text-[1px] md:text-4xl font-bold text-[#1f2b3a] mb-6">
                    What our students have to say
                </h2>

                <div className="relative">
                    <button
                        aria-label="previous"
                        onClick={() => scroll('left')}
                        className="hidden md:flex items-center justify-center 
                        absolute left-[0%] top-1/2 -translate-y-1/2 z-20 w-20 h-20 
                        rounded-full bg-[#3ec1bd] text-white shadow-lg
                        "
                    >
                        <span className="text-4xl font-bold">&lt;</span>
                    </button>

                    <div
                        ref={containerRef}
                        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-6 px-2 lg:px-6"
                        style={{ scrollbarWidth: 'none' as any }}
                    >
                        {testimonials.map((t, idx) => (
                            <div
                                key={idx}
                                className="snap-center flex-shrink-0 w-[84%] sm:w-[48%] md:w-[32%] lg:w-[22%]"
                            >
                                <Card className="p-[100px] rounded-[18px] shadow-md text-center">
                                    <div className="flex justify-center -mt-6 mb-4">
                                        <img
                                            src={t.img}
                                            alt={t.name}
                                            className="w-50 h-50 rounded-md object-cover"
                                        />
                                    </div>
                                    <h3 className="font-bold text-3xl mt-3 mb-3">{t.name}</h3>
                                    <p className="text-2xl text-[#6b7280] mt-3 leading-7">{t.text}</p>
                                </Card>
                            </div>
                        ))}
                    </div>

                    <button
                        aria-label="next"
                        onClick={() => scroll('right')}
                        className="hidden md:flex items-center justify-center 
                        absolute right-[10%] top-1/2 -translate-y-1/2 z-20 w-20 h-20 
                        rounded-full bg-[#3ec1bd] text-white shadow-lg
                        "
                    >
                        <span className="text-4xl font-bold">&gt;</span>
                    </button>
                </div>
            </div>
        </section>
    )
}

export default StudentSays
