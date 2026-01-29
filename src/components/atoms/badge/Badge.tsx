import { BadgeUI as ShadcnBadge } from "../../ui"
import { type JSX } from "react";

export interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "secondary" | "destructive" | "outline";
  className?: string;
}

const Badge = ({
  children,
  variant = "default",
  className = "",
}: BadgeProps): JSX.Element => {
  return (
    <ShadcnBadge variant={variant} className={className}>
      {children}
    </ShadcnBadge>
  );
};

export default Badge;
