"use client";

import { motion } from "framer-motion";

export default function Story() {
	return (
		<section id="story" className="relative mx-auto max-w-6xl px-6 py-24">
			<div className="mx-auto max-w-3xl text-center">
				<div className="mx-auto mb-6 h-[1px] w-40 bg-[color:var(--deco-gold)]" />
				<h2 className="font-display text-3xl tracking-[0.18em] text-[color:var(--deco-gold)]">Our Story</h2>
				<div className="mx-auto mt-3 h-[1px] w-40 bg-[color:var(--deco-gold)]" />
				<motion.p
					className="mx-auto mt-6 max-w-2xl font-serif leading-relaxed text-[color:var(--deco-gray)]"
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true, amount: 0.4 }}
					transition={{ duration: 1.2, ease: "easeInOut" }}
				>
					Born from the opulence of the 1920s and the precision of modern cinema, our brand invites you into scenes curated with the symmetry of Wes Anderson and the lavish geometry of Art Deco. Every interaction is a frame, every frame a story.
				</motion.p>
			</div>
		</section>
	);
}