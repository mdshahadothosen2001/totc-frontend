import React from "react";
import { ImageContainer, OutlineButton } from "../../atoms";
import { ButtonUI } from "../../ui";

export interface BlogContentCardProps {
    title: string;
    content: string;
    userName?: string;
    userSrc?: string;
    className?: string;
}

const BlogContentCard: React.FC<BlogContentCardProps> = ({
    title,
    content,
    className = "",
}) => {
    return (
        <div className={`relative bg-white ${className}`}>
            <div style={{ padding: "40px 120px", maxWidth: 1681, margin: "0 auto" }}>
                <h2
                    style={{
                        position: "relative",
                        fontFamily: "Poppins, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 600,
                        fontSize: 44,
                        lineHeight: "180%",
                        textAlign: "center",
                        color: "#2F327D",
                        margin: 0,
                    }}
                >
                    {title}
                </h2>

                <p
                    style={{
                        margin: "24px auto 0",
                        fontFamily: "Poppins, sans-serif",
                        fontStyle: "normal",
                        fontWeight: 400,
                        fontSize: 24,
                        lineHeight: "180%",
                        letterSpacing: "0.02em",
                        color: "#696984",
                        maxWidth: 1200,
                        textAlign: "justify",
                    }}
                >
                    {content}
                </p>

                <div className="flex flex-wrap gap-4 justify-center mt-6">
                    {['affordable', 'Stunning', 'making', 'madbrawns'].map((tag) => (
                        <ButtonUI
                            key={tag}
                            variant="ghost"
                            size="default"
                            className="rounded-full h-12 px-6"
                            style={{ backgroundColor: 'rgba(73,187,189,0.1)', color: '#696984' }}
                        >
                            {tag}
                        </ButtonUI>
                    ))}
                </div>

                <hr className="border-t border-gray-200 mt-6" />

                <div className="flex items-center justify-between mt-6">
                    <div className="flex items-center gap-4">
                        <ImageContainer w="77px" h="77px" src="/src/assets/lina-square.png" />
                        <div>
                            <div className="text-sm text-gray-500">Written by</div>
                            <div className="font-medium">Lina</div>
                        </div>
                    </div>

                    <div className="absolute left-[1555px] font-bold">
                        <OutlineButton w="232px" h="49px" fontSize="16px" >
                            Follow
                        </OutlineButton>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default BlogContentCard;
