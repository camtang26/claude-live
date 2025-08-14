"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
	const [ready, setReady] = useState(false);
	useEffect(() => {
		const t = setTimeout(() => setReady(true), 1200);
		return () => clearTimeout(t);
	}, []);
	return (
		<AnimatePresence>
			{!ready && (
				<motion.div
					className="fixed inset-0 z-50 grid place-items-center bg-[color:var(--deco-charcoal)] text-[color:var(--deco-cream)]"
					initial={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 0.8, ease: "easeInOut" }}
				>
					<div className="relative h-24 w-24">
						<div className="absolute inset-0 rounded-full border border-[color:var(--deco-gold)]/50" />
						<motion.div
							className="absolute inset-2 rounded-full border-2 border-[color:var(--deco-gold)]"
							animate={{ rotate: 360 }}
							transition={{ repeat: Infinity, duration: 2.8, ease: "linear" }}
						/>
						<motion.div
							className="absolute left-1/2 top-1/2 h-2 w-10 -translate-x-1/2 -translate-y-1/2 bg-[color:var(--deco-gold)]"
							animate={{ scaleX: [1, 0.6, 1] }}
							transition={{ repeat: Infinity, duration: 1.4, ease: "easeInOut" }}
						/>
					</div>
					<p className="mt-6 font-display tracking-[0.2em]">Loading</p>
				</motion.div>
			)}
		</AnimatePresence>
	);
}