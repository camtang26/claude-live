"use client";

import { motion } from "framer-motion";

const images = [
	"https://images.unsplash.com/photo-1515344905723-babc01aac41c?q=80&w=2069&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1511765224389-37f0e77cf0eb?q=80&w=2070&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2069&auto=format&fit=crop",
	"https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2069&auto=format&fit=crop",
];

export default function GalleryStrip() {
	return (
		<section id="gallery" className="relative mx-auto max-w-6xl px-6 py-24">
			<div className="mb-10 text-center">
				<h2 className="font-display text-3xl tracking-[0.18em] text-[color:var(--deco-gold)]">Gallery</h2>
				<p className="mx-auto mt-3 max-w-xl font-serif text-[color:var(--deco-gray)]">Golden rectangles, vintage filters, and a whisper of film grain.</p>
			</div>
			<div className="relative overflow-hidden rounded-md border border-[color:var(--deco-gold)] bg-[color:var(--deco-cream)]/4 p-4">
				<div className="grid grid-cols-2 gap-4 md:grid-cols-4">
					{images.map((src, i) => (
						<motion.figure
							key={src}
							className="group relative aspect-[1.618/1] overflow-hidden rounded-sm border border-[color:var(--deco-gold)] bg-[color:var(--deco-charcoal)]/20"
							whileHover={{ scale: 1.02 }}
							transition={{ type: "spring", stiffness: 120, damping: 12 }}
						>
							<div
								className="absolute inset-0 bg-cover bg-center"
								style={{ backgroundImage: `url(${src})`, filter: "contrast(1.05) saturate(0.9) sepia(0.06)" }}
							/>
							<div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(ellipse at center, rgba(255,255,255,0.08), rgba(255,255,255,0) 70%)" }} />
							<div className="pointer-events-none absolute inset-0 bg-[linear-gradient(transparent_97%,rgba(0,0,0,0.3)_97%)] bg-[length:100%_24px] opacity-40 mix-blend-multiply" />
							<figcaption className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[color:var(--deco-charcoal)]/80 to-transparent p-2 text-center text-xs font-serif text-[color:var(--deco-cream)]/90">Scene {i + 1}</figcaption>
						</motion.figure>
					))}
				</div>
				{/* Film strip perforations */}
				<div className="pointer-events-none absolute inset-y-0 left-2 right-2 grid grid-cols-12 opacity-20">
					{Array.from({ length: 12 }).map((_, j) => (
						<div key={j} className="my-2 h-2 w-4 rounded-sm bg-[color:var(--deco-charcoal)]/60" />
					))}
				</div>
			</div>
		</section>
	);
}