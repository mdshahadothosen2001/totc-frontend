import React from 'react'
import { Card, ImageContainer} from '../../atoms'

const items = [
    {
        title: 'Become a Teacher',
        desc:
            'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        img: '/src/assets/laptop-meeting.png',
        btn: 'Apply a Teacher',
    },
    {
        title: 'Become a Coursector',
        desc:
            'Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...',
        img: '/src/assets/laptop-meeting.png',
        btn: 'Apply a Coursector',
    },
]

const ApplyList: React.FC = () => {
    return (
        <section className="w-full py-12">
            <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {items.map((it, idx) => (
                        <Card
                            key={idx}
                            className="rounded-[14px] shadow-lg bg-white overflow-hidden"
                        >
                            <div className="relative w-full 
                              h-[220px] 
                              sm:h-[260px] 
                              md:h-[220px] 
                              lg:h-[260px]
                              ">
                                <ImageContainer
                                    src={it.img}
                                    w="100%"
                                    h="100%"
                                    borderRadius="0"
                                    objectFit="cover"
                                />
                            </div>

                            <div className="p-4 sm:p-6 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                                <div className="sm:pr-6">
                                    <h3 className="
                                            font-semibold
                                            text-[26px]
                                            leading-[32px]
                                            mb-3
                                        ">
                                        {it.title}
                                    </h3>

                                    <p className="
                                            text-[20px]
                                            leading-[30px]
                                            text-[#6b7280]
                                        ">
                                        {it.desc}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ApplyList
