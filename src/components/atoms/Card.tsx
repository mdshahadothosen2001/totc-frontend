import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
	bgColor?: string;
	textColor?: string;
	width?: string | number;
	height?: string | number;
	borderRadius?: string | number;
	position?: React.CSSProperties["position"];
	top?: string | number;
	right?: string | number;
	bottom?: string | number;
	left?: string | number;
	m?: string | number;
	p?: string | number;
	children?: React.ReactNode;
}

const toCssSize = (v?: string | number) =>
	v === undefined ? undefined : typeof v === "number" ? `${v}px` : v;

const Card: React.FC<CardProps> = ({
	bgColor = "#ffffff",
	textColor = "#000000",
	width = "100%",
	height,
	borderRadius = 8,
	position,
	top,
	right,
	bottom,
	left,
	m,
	p,
	style,
	className,
	children,
	...rest
}) => {
	const composedStyle: React.CSSProperties = {
		backgroundColor: bgColor,
		color: textColor,
		width: toCssSize(width),
		height: toCssSize(height),
		borderRadius: toCssSize(borderRadius),
		position,
		top: toCssSize(top),
		right: toCssSize(right),
		bottom: toCssSize(bottom),
		left: toCssSize(left),
		margin: toCssSize(m),
		padding: toCssSize(p),
		boxSizing: "border-box",
		...style,
	};

	return (
		<div style={composedStyle} className={className} {...rest}>
			{children}
		</div>
	);
};

export default Card;

