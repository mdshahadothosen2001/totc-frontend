import { type JSX } from "react";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "../../ui/UserAvatar";

export interface UserAvatarProps {
    src: string;
    alt: string;
    fallback: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

const sizeClasses = {
    sm: "w-11 h-11",
    md: "w-[63px] h-[63px]",
    lg: "w-[71px] h-[71px]",
    xl: "w-20 h-20",
};

const UserAvatar = ({
    src,
    alt,
    fallback,
    size = "md",
    className = "",
}: UserAvatarProps): JSX.Element => {
    return (
        <Avatar className={`${sizeClasses[size]} ${className}`}>
            <AvatarImage src={src} alt={alt} />
            <AvatarFallback className="bg-[#d9d9d9]">
                {fallback}
            </AvatarFallback>
        </Avatar>
    );
};

export default UserAvatar;
