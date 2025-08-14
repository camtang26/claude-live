"use client";

import { useEffect } from "react";

export default function CustomCursor() {
	useEffect(() => {
		function handleMove(e: PointerEvent) {
			const x = e.clientX;
			const y = e.clientY;
			document.documentElement.style.setProperty("--mx", `${x}px`);
			document.documentElement.style.setProperty("--my", `${y}px`);
		}
		document.addEventListener("pointermove", handleMove);
		return () => document.removeEventListener("pointermove", handleMove);
	}, []);

	return (
		<div aria-hidden className="pointer-events-none fixed inset-0 z-[55] mix-blend-screen">
			<div className="absolute w-6 h-6 rounded-full border border-[color:var(--gold)]/70 translate-x-[-50%] translate-y-[-50%]" style={{ left: "var(--mx)", top: "var(--my)" }} />
			<div className="absolute w-3 h-3 rounded-full bg-[color:var(--gold)]/50 translate-x-[-50%] translate-y-[-50%]" style={{ left: "var(--mx)", top: "var(--my)" }} />
		</div>
	);
}