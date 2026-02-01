import React from "react";

interface FeatureItemProps {
  icon: string;
  text: string;
  className?: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({
  icon,
  text,
  className = ""
}) => {
  const isImage = icon.match(/\.(png|jpg|jpeg|gif|svg)$/i);
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      {isImage ? (
        <img src={icon} alt={text} className="w-6 h-6 object-contain" />
      ) : (
        <span className="text-[#49bbbd] text-xl">{icon}</span>
      )}
      <span className="[font-family:'Poppins',Helvetica] font-semibold text-[#00000080] text-sm tracking-[0.28px] leading-[normal]">
        {text}
      </span>
    </div>
  );
};

export default FeatureItem;
