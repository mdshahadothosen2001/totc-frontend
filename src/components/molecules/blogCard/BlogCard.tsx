import type { JSX } from "react"
import { Card, CardContent } from "../../ui"
import { Badge } from "../../atoms"

export interface BlogCardProps {
  image: string;
  badge: string;
  title: string;
  description: string;
  link?: string;
  delay?: number;
  variant?: "featured" | "side";
}

const BlogCard = ({
  image,
  badge,
  title,
  description,
  link = "Read more",
  delay = 0,
  variant = "featured",
}: BlogCardProps): JSX.Element => {
  const isFeatured = variant === "featured";

  return (
    <Card
      className="border-0 shadow-none translate-y-[-1rem] animate-fade-in opacity-0"
      style={
        {
          "--animation-delay": `${delay}ms`,
        } as React.CSSProperties
      }
    >
      <CardContent
        className={`p-0 flex ${isFeatured ? "flex-col" : "flex-col sm:flex-row gap-6"}`}
      >
        <div
          className={`relative ${isFeatured ? "w-full aspect-[640/340] mb-10" : "w-full sm:w-[280px] aspect-[280/200] flex-shrink-0"}`}
        >
          <img
            className="w-full h-full rounded-[20px] object-cover"
            alt={title}
            src={image}
          />
          <div className="absolute inset-0 bg-[#171b41] rounded-[20px] opacity-10" />
        </div>

        <div
          className={`flex flex-col ${isFeatured ? "" : "justify-between flex-1 min-w-0"}`}
        >
          <div>
            {isFeatured && (
              <Badge className="w-fit bg-[#49bbbd] hover:bg-[#49bbbd] text-white rounded-[80px] px-9 py-2 text-xl font-medium tracking-[0.40px] mb-5">
                {badge}
              </Badge>
            )}

            <h3
              className={`[font-family:'Poppins',Helvetica] font-medium text-[#252641] ${isFeatured ? "text-2xl md:text-[26px]" : "text-xl md:text-[22px]"} tracking-[0] leading-[1.8] mb-${isFeatured ? "5" : "4"}`}
            >
              {title}
            </h3>

            <p
              className={`[font-family:'Poppins',Helvetica] font-normal text-[#696983] ${isFeatured ? "text-xl" : "text-lg md:text-xl"} tracking-[0.40px] leading-9`}
            >
              {description}
            </p>
          </div>

          {isFeatured ? (
            <a
              href="#"
              className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-xl tracking-[0.40px] leading-9 underline w-fit transition-colors hover:text-[#252641] mt-7"
            >
              {link}
            </a>
          ) : (
            <Badge className="w-fit bg-[#49bbbd] hover:bg-[#49bbbd] text-white rounded-[80px] px-6 py-1.5 text-lg font-normal tracking-[0.36px] mt-4">
              {badge}
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
