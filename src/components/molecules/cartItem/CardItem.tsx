import React from "react";

export interface CartItemProps {
  image: string;
  title: string;
  description: string;
  price: string;
  className?: string;
}

const CartItem: React.FC<CartItemProps> = ({
  image,
  title,
  description,
  price,
  className = "",
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <div className="relative w-40 h-[107px] rounded-[20px] overflow-hidden flex-shrink-0">
        <img
          className="w-full h-full object-cover"
          alt="Course thumbnail"
          src={image}
        />
        <div className="absolute top-2 left-2 w-4 h-4 flex items-center justify-center bg-white rounded-[7.95px] shadow-[2px_20px_60px_#3d9bb81a]">
          <img
            className="w-[3.83px] h-[4.2px]"
            alt="Play"
            src="https://c.animaapp.com/mkzqe3tg9lRjEM/img/polygon-2.svg"
          />
        </div>
      </div>
      <div className="flex-1">
        <p className="[font-family:'Poppins',Helvetica] font-normal text-[#5b5b5b] text-lg tracking-[0.36px] leading-[32.4px]">
          {title}
        </p>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-lg tracking-[0.36px] leading-[32.4px]">
          {description}
        </p>
        <p className="[font-family:'Poppins',Helvetica] font-normal text-black text-2xl tracking-[0.48px] leading-[43.2px]">
          {price}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
