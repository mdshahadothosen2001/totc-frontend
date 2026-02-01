import React from "react";
import { AuthorInfo } from "../../molecules";
import { CourseDurationBadge as DurationBadge } from "../../molecules";

interface ArticlePreviewProps {
  author: {
    name: string;
    avatarUrl: string;
  };
  preview: string;
  duration: string;
  className?: string;
}

const ArticlePreview: React.FC<ArticlePreviewProps> = ({
  author,
  preview,
  duration,
  className = ""
}) => {
  return (
    <div className={`flex flex-col gap-6 ${className}`}>
      {/* Left-aligned header */}
      <div className="flex items-start justify-start gap-4">
        <AuthorInfo
          {...({
            name: author.name,
            avatarUrl: author.avatarUrl,
            avatarSize: "large",
            showName: true,
          } as any)}
        />
        <DurationBadge duration={duration} />
      </div>
      <p className="[font-family:'Poppins',Helvetica] font-normal text-[#696983] text-xl tracking-[0.40px] leading-9 text-left">
        {preview}
      </p>
    </div>
  );
};

export default ArticlePreview;