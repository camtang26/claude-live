"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
	const [done, setDone] = useState(false);
	useEffect(() => {
		const t = setTimeout(() => setDone(true), 900);
		return () => clearTimeout(t);
	}, []);

	return (
		<div
			aria-hidden
			className={`fixed inset-0 z-[60] grid place-items-center bg-cream transition-opacity duration-700 ${
				done ? "opacity-0 pointer-events-none" : "opacity-100"
			}`}
		>
			<div className="relative w-20 h-20">
				<div className="absolute inset-0 rounded-none border-[1.5px] border-[color:var(--gold)] [clip-path:polygon(0%_10%,2%_10%,2%_2%,98%_2%,98%_10%,100%_10%,100%_90%,98%_90%,98%_98%,2%_98%,2%_90%,0%_90%)]" />
				<div className="absolute inset-2 border-[1.5px] border-[color:var(--burgundy)] [clip-path:polygon(0%_15%,3%_15%,3%_3%,97%_3%,97%_15%,100%_15%,100%_85%,97%_85%,97%_97%,3%_97%,3%_85%,0%_85%)] animate-[spin_6s_linear_infinite]" />
				<div className="absolute inset-5 border-[1.5px] border-[color:var(--sage)] [clip-path:polygon(50%_0,61%_35%,98%_35%,68%_57%,79%_91%,50%_70%,21%_91%,32%_57%,2%_35%,39%_35%)] animate-[spin_10s_linear_infinite_reverse]" />
			</div>
		</div>
	);
}