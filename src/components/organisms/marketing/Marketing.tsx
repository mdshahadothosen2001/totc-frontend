import { ButtonUI } from "../../../components/ui";
import { BlogSectionTitle } from "../../../components/atoms";
import { BlogCourseCard } from "../../../components/organisms"
import type { JSX } from "react";

const articles = [
    {
        id: 1,
        image: "/src/assets/laptop-cat.png",
        overlayImage: "/src/assets/four-block.png",
        title: "AWS Certified solutions Architect",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        author: {
            name: "Lina",
            avatar: "/src/assets/lina-square.png",
        },
        category: "Design",
        duration: "3 Month",
        originalPrice: "$100",
        discountedPrice: "$80",
    },
    {
        id: 2,
        image: "/src/assets/laptop-cat.png",
        title: "AWS Certified solutions Architect",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        author: {
            name: "Lina",
            avatar: "/src/assets/lina-square.png",
        },
        category: "Design",
        duration: "3 Month",
        originalPrice: "$100",
        discountedPrice: "$80",
    },
    {
        id: 3,
        image: "/src/assets/laptop-cat.png",
        title: "AWS Certified solutions Architect",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        author: {
            name: "Lina",
            avatar: "/src/assets/lina-square.png",
        },
        category: "Design",
        duration: "3 Month",
        originalPrice: "$100",
        discountedPrice: "$80",
    },
    {
        id: 4,
        image: "/src/assets/laptop-cat.png",
        title: "AWS Certified solutions Architect",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipising elit, sed do eiusmod tempor",
        author: {
            name: "Lina",
            avatar: "/src/assets/lina-square.png",
        },
        category: "Design",
        duration: "3 Month",
        originalPrice: "$100",
        discountedPrice: "$80",
    },
];

const MarketingArticlesSection = (): JSX.Element => {
    return (
        <section className="relative w-full py-12 px-4 md:px-8 lg:px-[120px]">
            <div className="max-w-[1711px] mx-auto">
                <header className="flex items-center justify-between mb-12 translate-y-[-1rem] animate-fade-in opacity-0">
                    <BlogSectionTitle>Marketing Articles</BlogSectionTitle>
                    <ButtonUI
                        variant="link"
                        className="[font-family:'Poppins',Helvetica] font-bold text-[#49bbbd] text-xl tracking-[0] leading-normal h-auto p-0 hover:no-underline"
                    >
                        See all
                    </ButtonUI>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[50px]">
                    {articles.map((article, index) => (
                        <BlogCourseCard
                            key={article.id}
                            image={article.image}
                            overlayImage={article.overlayImage}
                            title={article.title}
                            description={article.description}
                            author={article.author}
                            category={article.category}
                            duration={article.duration}
                            originalPrice={article.originalPrice}
                            discountedPrice={article.discountedPrice}
                            animationDelay={`${(index + 1) * 200}ms`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MarketingArticlesSection;
