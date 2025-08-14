"use client";

import Link from "next/link";

export default function NavBar() {
	return (
		<header className="sticky top-0 z-50 backdrop-blur-md/2 bg-cream/70 border-b border-[color:var(--gold)]/30">
			<div className="max-w-6xl mx-auto px-6 sm:px-8">
				<nav className="grid grid-cols-3 items-center h-14 sm:h-16">
					<div className="justify-self-start text-xs sm:text-sm tracking-[0.3em] uppercase text-warm-gray/80">
						Studio
					</div>
					<div className="justify-self-center text-center">
						<Link href="/" className="font-serif text-gold text-lg sm:text-xl tracking-[0.12em] hover:text-[color:var(--burgundy)] cinematic-transition">
							Maison Lumière
						</Link>
						<div className="h-1 grid grid-cols-5 gap-1 mt-1 opacity-80">
							{Array.from({ length: 5 }).map((_, i) => (
								<div key={i} className="h-px bg-[color:var(--gold)]" />
							))}
						</div>
					</div>
					<div className="justify-self-end flex items-center gap-4 text-sm">
						<Link href="#gallery" className="hover:text-gold cinematic-transition">Gallery</Link>
						<Link href="#commissions" className="hover:text-gold cinematic-transition">Commissions</Link>
					</div>
				</nav>
			</div>
		</header>
	);
}