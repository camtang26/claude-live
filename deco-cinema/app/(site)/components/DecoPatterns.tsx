"use client";

import { memo } from "react";

export const FanPattern = memo(function FanPattern() {
	return (
		<svg aria-hidden viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.06]">
			<defs>
				<pattern id="fan" patternUnits="userSpaceOnUse" width="40" height="40">
					<path d="M0 40 Q20 0 40 40" fill="none" stroke="var(--deco-gold)" strokeWidth="1" />
					<path d="M0 40 Q20 10 40 40" fill="none" stroke="var(--deco-gold)" strokeWidth="0.5" />
					<path d="M0 40 Q20 20 40 40" fill="none" stroke="var(--deco-gold)" strokeWidth="0.5" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#fan)" />
		</svg>
	);
});

export const ChevronPattern = memo(function ChevronPattern() {
	return (
		<svg aria-hidden viewBox="0 0 100 100" className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.05]">
			<defs>
				<pattern id="chevron" width="20" height="20" patternUnits="userSpaceOnUse">
					<path d="M0 10 L10 0 L20 10 L10 20 Z" fill="none" stroke="var(--deco-gold)" strokeWidth="1" />
				</pattern>
			</defs>
			<rect width="100%" height="100%" fill="url(#chevron)" />
		</svg>
	);
});

export const Sunburst = memo(function Sunburst() {
	return (
		<svg aria-hidden viewBox="0 0 200 200" className="pointer-events-none absolute left-1/2 top-1/2 h-[120vmax] w-[120vmax] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]">
			<defs>
				<radialGradient id="sun" cx="50%" cy="50%">
					<stop offset="0%" stopColor="var(--deco-gold)" stopOpacity="0.25" />
					<stop offset="100%" stopColor="var(--deco-gold)" stopOpacity="0" />
				</radialGradient>
			</defs>
			<circle cx="100" cy="100" r="90" fill="url(#sun)" />
			{Array.from({ length: 24 }).map((_, i) => (
				<line
					key={i}
					x1="100"
					y1="100"
					x2={100 + 100 * Math.cos((i * Math.PI) / 12)}
					y2={100 + 100 * Math.sin((i * Math.PI) / 12)}
					stroke="var(--deco-gold)"
					strokeOpacity="0.08"
					strokeWidth="2"
				/>
			))}
		</svg>
	);
});

export default function DecoPatterns() {
	return (
		<div className="pointer-events-none absolute inset-0 -z-10">
			<FanPattern />
			<ChevronPattern />
			<Sunburst />
		</div>
	);
}