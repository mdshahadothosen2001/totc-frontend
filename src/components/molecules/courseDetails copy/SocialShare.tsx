import React from "react";

interface SocialIcon {
  src: string;
  alt: string;
  href?: string;
}

interface SocialShareProps {
  icons: SocialIcon[];
  className?: string;
}

const SocialShare: React.FC<SocialShareProps> = ({
  icons,
  className = ""
}) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {icons.map((icon, index) => (
        <a
          key={index}
          href={icon.href || "#"}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity"
            alt={icon.alt}
            src={icon.src}
          />
        </a>
      ))}
    </div>
  );
};

export default SocialShare;
