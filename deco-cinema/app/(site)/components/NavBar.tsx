"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function NavBar() {
	return (
		<header className="fixed inset-x-0 top-0 z-30">
			<div className="mx-auto max-w-6xl px-6">
				<nav className={cn(
					"mt-6 flex items-center justify-between rounded-md border border-[var(--deco-gold)] bg-[color:var(--deco-charcoal)]/50 backdrop-blur",
					"deco-border"
				)}>
					<div className="px-4 py-3 text-sm tracking-[0.18em] uppercase text-[color:var(--deco-cream)]">
						<span className="gold-text">Deco</span> Cinema
					</div>
					<ul className="flex items-center gap-6 px-4 py-3">
						<li className="relative">
							<Link className="transition-colors hover:text-[color:var(--deco-gold)]" href="#gallery">Gallery</Link>
							<div className="pointer-events-none absolute -right-3 top-1/2 h-5 w-[1px] -translate-y-1/2 bg-[color:var(--deco-gold)]/30" />
						</li>
						<li className="relative">
							<Link className="transition-colors hover:text-[color:var(--deco-gold)]" href="#story">Story</Link>
							<div className="pointer-events-none absolute -right-3 top-1/2 h-5 w-[1px] -translate-y-1/2 bg-[color:var(--deco-gold)]/30" />
						</li>
						<li>
							<Link className="transition-colors hover:text-[color:var(--deco-gold)]" href="#contact">Contact</Link>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
}