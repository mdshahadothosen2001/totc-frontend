import { useState } from 'react'

const lessons = [
  {
    title: 'Lorem ipsum dolor sit amet',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit.'
  },
  {
    title: 'Consectetur adipiscing elit, sed do',
    body:
      'Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Phasellus non lorem id elit tincidunt.'
  },
  {
    title: 'Eiusmod tempos Lorem ipsum',
    body:
      'Eiusmod tempos Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nisl vitae urna dictum gravida.'
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor. Vestibulum ante ipsum primis in faucibus orci luctus et.'
  },
  {
    title: 'Lorem ipsum dolor sit amet',
    body:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan.'
  }
]

const ChevronDown = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9l6 6 6-6" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ChevronUp = ({ className = '' }: { className?: string }) => (
  <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18 15l-6-6-6 6" stroke="#4B5563" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const OnlineLessonList = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(3)

  return (
    <section className="w-full flex justify-center my-12 px-4">
      <div className="w-[90vw] max-w-[1200px]">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">
          Online coaching lessons for remote learning
        </h2>

        <div className="bg-white">
          {lessons.map((lesson, idx) => {
            const open = openIndex === idx
            return (
              <div key={idx} className="py-6">
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6">
                    <div className="w-4 h-4 rounded-full bg-[#CFF6EE] shrink-0 ml-2" />
                    <div className="text-4xl md:text-2xl text-[#2D3436">{lesson.title}</div>
                  </div>

                  <button
                    aria-expanded={open}
                    onClick={() => setOpenIndex(open ? null : idx)}
                    className="p-2 hover:opacity-90"
                  >
                    {open ? <ChevronUp /> : <ChevronDown />}
                  </button>
                </div>

                {open && (
                  <div className="text-2xl text-gray-500 mt-6 leading-relaxed px-10 md:px-16">
                    {lesson.body}
                  </div>
                )}

                <div className="border-t border-gray-200 mt-6" />
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default OnlineLessonList
