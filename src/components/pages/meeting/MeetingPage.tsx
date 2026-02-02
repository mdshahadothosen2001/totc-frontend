import React from 'react'
import { Text } from '@chakra-ui/react'
import lina from '../../../assets/lina-round.png'
import meet from '../../../assets/meet.png'
import hena from '../../../assets/hena.png'

const Meeting: React.FC = () => {
	return (
		<div className="min-h-screen bg-white flex justify-center items-start py-12 px-8">
			<div className="w-[1920px] max-w-full flex gap-8">
				{/* Left: Video area */}
				<div className="relative" style={{ width: 1186, height: 1076 }}>
					<div
						className="rounded-[24px] overflow-hidden bg-center bg-cover"
						style={{
							width: 1186,
							height: 1076,
							backgroundImage: `url(${meet})`,
						}}
					/>

					{/* floating header */}
					<div
						className="absolute left-[117px] top-[-192px]"
						style={{ width: 1069, height: 153 }}
					>
						<div className="bg-white rounded-[26px] p-6 shadow-sm flex items-center justify-between">
							<div>
								<Text fontFamily="Poppins" fontSize="30px" fontWeight={600} color="#252641">
									UX/UI Design Confrence Meeting
								</Text>
								<div className="flex gap-4 mt-2">
									<Text fontFamily="Poppins" fontSize="18px" fontWeight={400} color="#252641">
										9 Lesson
									</Text>
									<Text fontFamily="Poppins" fontSize="18px" fontWeight={400} color="#252641">
										6h 30min
									</Text>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<div className="w-10 h-10 rounded-lg bg-[#49BBBD]" />
								<div className="w-10 h-10 rounded-lg bg-transparent border border-gray-200" />
							</div>
						</div>
					</div>

					{/* Right stacked participant thumbnails (3) + 3 more lower to make 6 total) */}
					<div className="absolute right-6 top-24 flex flex-col gap-4">
						{[0, 1, 2].map((i) => (
							<div
								key={i}
								className="w-[198px] h-[160px] bg-white rounded-[13px] shadow-sm flex items-center justify-center overflow-hidden"
							>
								<img src={meet} alt={`participant-${i}`} className="object-cover w-full h-full" />
							</div>
						))}
					</div>

					{/* Bottom controls */}
					<div
						className="absolute left-6 bottom-6 bg-[#E6F2FF] rounded-[30px] px-6 py-4 flex items-center justify-center gap-8 shadow-md"
						style={{ width: 1085, height: 142 }}
					>
						<div className="flex gap-6 items-center">
							<div className="w-[80px] h-[66.78px] bg-white rounded-[13px] flex items-center justify-center text-3xl text-[#EE645B]">▶</div>
							<div className="w-[80px] h-[66.78px] bg-white rounded-[13px] flex items-center justify-center text-3xl text-[#29B9E7]">⏺</div>
							<div className="w-[80px] h-[66.78px] bg-white rounded-[13px] flex items-center justify-center text-3xl text-[#EE5B90] rotate-[-134deg]">☎</div>
							<div className="w-[80px] h-[66.78px] bg-white rounded-[13px] flex items-center justify-center text-3xl text-[#00CBB8]">🖥️</div>
							<div className="w-[80px] h-[66.78px] bg-white rounded-[13px] flex items-center justify-center text-3xl text-[#49BBBD]">🔊</div>
						</div>
					</div>
				</div>

				{/* Right: Sidebar */}
				<div style={{ width: 498, height: 769 }} className="bg-white rounded-[15px] p-6">
					<div>
						<Text fontFamily="Poppins" fontSize="30px" fontWeight={600} color="#252641">
							Course Contents
						</Text>
						<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#49BBBD" mt={2}>
							2/5 COMPLETED
						</Text>

						<div className="mt-6">
							<div className="border border-[rgba(73,187,189,0.3)] rounded-[19px] p-4 mb-4">
								<div className="flex justify-between items-center">
									<Text fontFamily="Poppins" fontSize="18px" fontWeight={500} color="#252641">Get Started</Text>
									<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">5 Lessons</Text>
								</div>
								<div className="flex justify-between items-center mt-2 text-[14px] text-[rgba(37,38,65,0.8)]">
									<span>1 Hour</span>
								</div>
							</div>

							<div className="border border-[rgba(73,187,189,0.3)] rounded-[19px] p-4 mb-4 border-l-2 border-l-[#49BBBD]">
								<div className="flex justify-between items-center">
									<Text fontFamily="Poppins" fontSize="18px" fontWeight={500} color="#49BBBD">Illstarator Structuors</Text>
									<Text fontFamily="Poppins" fontSize="24px" fontWeight={900} color="#49BBBD">▴</Text>
								</div>
								<div className="mt-3 border-t border-[#D9D9D9] pt-3">
									<div className="flex justify-between items-center">
										<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#49BBBD">Lorem ipsum dolor sit amet</Text>
										<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#49BBBD">65:00</Text>
									</div>
									<div className="flex justify-between items-center mt-3">
										<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">2. Lorem ipsum dolor</Text>
										<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">25:00</Text>
									</div>
									<div className="flex justify-between items-center mt-3">
										<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">3. Lorem ipsum dolor sit amet</Text>
										<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">30:00</Text>
									</div>
								</div>
							</div>

							<div className="border border-[rgba(73,187,189,0.3)] rounded-[19px] p-4 mb-4">
								<div className="flex justify-between items-center">
									<Text fontFamily="Poppins" fontSize="18px" fontWeight={500} color="#252641">Using Illstarator</Text>
									<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">4 Lessons</Text>
								</div>
							</div>

							<div className="border border-[rgba(73,187,189,0.3)] rounded-[19px] p-4 mb-4">
								<div className="flex justify-between items-center">
									<Text fontFamily="Poppins" fontSize="18px" fontWeight={500} color="#252641">What is Pandas?</Text>
									<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">5 Lessons</Text>
								</div>
							</div>

							<div className="border border-[rgba(73,187,189,0.3)] rounded-[19px] p-4 mb-4">
								<div className="flex justify-between items-center">
									<Text fontFamily="Poppins" fontSize="18px" fontWeight={500} color="#252641">Work with Numpy</Text>
									<Text fontFamily="Poppins" fontSize="14px" fontWeight={500} color="#252641">3 Lessons</Text>
								</div>
							</div>
						</div>
					</div>

					{/* Book for you */}
					<div className="mt-8">
						<Text fontFamily="Poppins" fontSize="30px" fontWeight={600} color="#252641">Book for you</Text>
						<div className="mt-4 grid grid-cols-2 gap-4">
							<div className="bg-white rounded-[20px] shadow-lg p-4">
								<div className="w-full h-[163px] rounded-[16px] overflow-hidden mb-4">
									<img src={hena} alt="book1" className="w-full h-full object-cover" />
								</div>
								<Text fontFamily="Poppins" fontSize="24px" fontWeight={500} color="#252641" className="text-center">All Benefits of PLUS</Text>
								<Text fontFamily="Poppins" fontSize="30px" fontWeight={600} color="#49BBBD" className="mt-2">$24</Text>
							</div>

							<div className="bg-white rounded-[20px] shadow-lg p-4">
								<div className="w-full h-[163px] rounded-[16px] overflow-hidden mb-4">
									<img src={lina} alt="book2" className="w-full h-full object-cover" />
								</div>
								<Text fontFamily="Poppins" fontSize="24px" fontWeight={500} color="#252641" className="text-center">All Benefits of PLUS</Text>
								<Text fontFamily="Poppins" fontSize="30px" fontWeight={600} color="#49BBBD" className="mt-2">$24</Text>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Meeting
