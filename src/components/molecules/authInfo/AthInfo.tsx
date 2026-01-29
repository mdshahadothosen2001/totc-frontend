import { UserAvatar } from "../../atoms";
import { type JSX } from "react";

export interface AuthorInfoProps {
    name: string;
    avatarSrc: string;
    size?: "sm" | "md" | "lg" | "xl";
    className?: string;
}

const AuthorInfo = ({
    name,
    avatarSrc,
    size = "sm",
    className = "",
}: AuthorInfoProps): JSX.Element => {
    return (
        <div className={`flex items-center gap-[18px] ${className}`}>
            <UserAvatar
                src={avatarSrc}
                alt={name}
                fallback={name.charAt(0)}
                size={size}
            />
            <span className="[font-family:'Poppins',Helvetica] font-medium text-black text-lg tracking-[0.36px] leading-normal whitespace-nowrap">
                {name}
            </span>
        </div>
    );
};

export default AuthorInfo;
