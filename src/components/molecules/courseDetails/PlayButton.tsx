import React from "react";
import { PlayIcon } from "lucide-react";

interface PlayButtonProps {
  size?: "small" | "medium" | "large";
  onClick?: () => void;
  className?: string;
}

const PlayButton: React.FC<PlayButtonProps> = ({
  size = "medium",
  onClick,
  className = ""
}) => {
  const sizeClasses = {
    small: "w-[50px] h-[50px]",
    medium: "w-[70px] h-[70px]",
    large: "w-[90px] h-[90px]"
  };

  const iconSizes = {
    small: "w-4 h-5",
    medium: "w-5 h-6",
    large: "w-6 h-7"
  };

  return (
    <button
      onClick={onClick}
      className={`${sizeClasses[size]} flex items-center justify-center bg-white rounded-full shadow-[2px_20px_60px_#3d9bb81a] cursor-pointer transition-transform hover:scale-110 ${className}`}
    >
      <PlayIcon className={`${iconSizes[size]} fill-current text-gray-700 ml-1`} />
    </button>
  );
};

export default PlayButton;
