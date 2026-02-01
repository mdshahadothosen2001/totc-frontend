import type { JSX } from "react";

export interface StarRatingProps {
    rating?: number;
    maxRating?: number;
    className?: string;
}

export const StarRating = ({
    // rating = 5,
    maxRating = 5,
    className = "",
}: StarRatingProps): JSX.Element => {
    return (
        <div className={`flex gap-[5.5px] ${className}`}>
            {Array(maxRating)
                .fill(null)
                .map((_, index) => (
                    <img
                        key={`star-${index}`}
                        className="w-[22.8px] h-[21.69px]"
                        alt="Star rating"
                        src="/src/assets/star.png"
                    />
                ))}
        </div>
    );
};

export default StarRating;
