import { EyeIcon } from "lucide-react";
import { ButtonUI } from "../../ui";
import { Card, CardContent } from "../../ui";
import { AuthorInfo } from "../../molecules";
import { Text } from "../../atoms";
import type { JSX } from "react";

export interface BlogCardProps {
  image: string;
  title: string;
  excerpt: string;
  author: {
    name: string;
    avatar: string;
  };
  views: string;
  animationDelay?: string;
  className?: string;
}

const BlogCard = ({
  image,
  title,
  excerpt,
  author,
  views,
  animationDelay = "0ms",
  className = "",
}: BlogCardProps): JSX.Element => {
  const handleReadMore = () => {
    window.history.pushState({}, '', '/blog/detail');
    window.dispatchEvent(new PopStateEvent('popstate'));
  };
  return (
    <Card
      className={`bg-white rounded-[20px] shadow-[0px_18.83px_47.08px_#2f327d1a] border-0 overflow-hidden translate-y-[-1rem] animate-fade-in opacity-0 ${className}`}
      style={{ "--animation-delay": animationDelay } as React.CSSProperties}
    >
      <CardContent className="p-[34px]">
        <div className="relative mb-6 rounded-[20px] overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-[382px] object-cover"
          />
          <div className="absolute inset-0 bg-[#171b41] opacity-10" />
        </div>

        <h3 className="[font-family:'Poppins',Helvetica] font-medium text-[#252641] text-[26px] tracking-[0] leading-[46.8px] mb-6">
          {title}
        </h3>

        <Text variant="body" className="mb-8">
          {excerpt}
        </Text>

        <AuthorInfo
          name={author.name}
          avatarSrc={author.avatar}
          size="lg"
          className="mb-8"
        />

        <div className="flex items-center justify-between">
          <ButtonUI
            variant="link"
            className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-xl tracking-[0.40px] leading-9 underline p-0 h-auto"
            onClick={handleReadMore}
          >
            Read more
          </ButtonUI>
          <div className="flex items-center gap-2">
            <EyeIcon className="w-5 h-5 text-[#49bbbd]" />
            <span className="[font-family:'Poppins',Helvetica] text-[#696983] text-xl tracking-[0.40px] leading-9 font-normal">
              {views}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
