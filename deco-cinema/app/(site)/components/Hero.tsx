"use client";

import { motion, useMotionValue, useSpring, MotionValue } from "framer-motion";
import { useEffect } from "react";
import DecoPatterns from "./DecoPatterns";

type CSSVariableStyle = React.CSSProperties & { [key in `--${string}`]?: string | number };

export default function Hero() {
	const x = useMotionValue(0);
	const y = useMotionValue(0);
	const smoothX = useSpring(x, { stiffness: 200, damping: 30 });
	const smoothY = useSpring(y, { stiffness: 200, damping: 30 });
	const varStyle: CSSVariableStyle = {
		"--x": (smoothX as unknown as MotionValue<number>).get(),
		"--y": (smoothY as unknown as MotionValue<number>).get(),
	};

	useEffect(() => {
		const onMove = (e: MouseEvent) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};
		window.addEventListener("mousemove", onMove);
		return () => window.removeEventListener("mousemove", onMove);
	}, [x, y]);

	return (
		<section className="relative letterbox spotlight">
			{/* Background Ken Burns layer */}
			<motion.div
				aria-hidden
				className="absolute inset-0 -z-20"
				style={{ filter: "saturate(0.85) contrast(1.05) sepia(0.06)" }}
				initial={{ scale: 1.1 }}
				animate={{ scale: 1.2 }}
				transition={{ duration: 30, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
			>
				<div
					className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center"
				/>
				<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0.4)_0%,rgba(0,0,0,0.75)_100%)]" />
			</motion.div>

			{/* Decorative patterns */}
			<DecoPatterns />

			{/* Framed 2.35:1 stage */}
			<div className="relative mx-auto max-w-[1400px] px-6 pt-28 pb-16">
				<div className="relative mx-auto aspect-[2.35/1] w-full deco-border bg-[color:var(--deco-charcoal)]/30">
					<div className="absolute inset-0 flex items-center justify-center text-center">
						<div className="px-6">
							<motion.h1
								className="font-display tracking-[0.14em] text-4xl sm:text-6xl md:text-7xl gold-text"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1.2, ease: "easeInOut" }}
							>
								<span className="inline-block">A</span>
								<motion.span
									className="mx-2 inline-block"
									animate={{ opacity: [0.8, 1, 0.8] }}
									transition={{ duration: 1.2, repeat: Infinity }}
								>
									·
								</motion.span>
								<span className="inline-block">Deco</span>
								<motion.span className="mx-2 inline-block" animate={{ opacity: [0.8, 1, 0.8] }} transition={{ duration: 1.2, repeat: Infinity }}>
									·
								</motion.span>
								<span className="inline-block">Opera</span>
							</motion.h1>
							<motion.p
								className="mx-auto mt-6 max-w-2xl font-serif text-[color:var(--deco-cream)]/90"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 1.2, ease: "easeInOut", delay: 0.2 }}
							>
								Step into a 1920s speakeasy—reborn as modern cinema.
							</motion.p>
							<div className="mt-10 flex items-center justify-center gap-4">
								<a
									href="#gallery"
									className="rounded-none bg-transparent px-6 py-3 font-display tracking-[0.18em] uppercase text-[color:var(--deco-cream)] outline outline-1 outline-[color:var(--deco-gold)] transition-colors hover:bg-[color:var(--deco-gold)] hover:text-[color:var(--deco-charcoal)]"
								>
									View Gallery
								</a>
								<a
									href="#story"
									className="rounded-none bg-[color:var(--deco-gold)] px-6 py-3 font-display tracking-[0.18em] uppercase text-[color:var(--deco-charcoal)] transition hover:brightness-110"
								>
									Our Story
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Spotlight cursor */}
			<motion.div className="absolute inset-0 -z-10" style={varStyle} />
		</section>
	);
}