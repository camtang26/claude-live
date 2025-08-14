"use client";

import { useEffect, useRef } from "react";

export default function CursorTrail() {
	const ref = useRef<HTMLDivElement | null>(null);
	useEffect(() => {
		const el = ref.current!;
		const dots: HTMLDivElement[] = [];
		for (let i = 0; i < 12; i++) {
			const d = document.createElement("div");
			d.className = "pointer-events-none absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-[0] border border-[color:var(--deco-gold)] opacity-0";
			el.appendChild(d);
			dots.push(d);
		}
		let idx = 0;
		const onMove = (e: MouseEvent) => {
			const d = dots[idx % dots.length];
			d.style.left = e.clientX + "px";
			d.style.top = e.clientY + "px";
			d.animate([
				{ transform: "translate(-50%, -50%) scale(1)", opacity: 0.8 },
				{ transform: "translate(-50%, -50%) scale(0.2)", opacity: 0 }
			], { duration: 1200, easing: "ease-in-out" });
			idx++;
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, []);
	return <div ref={ref} className="pointer-events-none fixed inset-0 z-40" />;
}