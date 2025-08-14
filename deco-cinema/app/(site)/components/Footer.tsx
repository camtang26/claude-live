export default function Footer() {
	return (
		<footer id="contact" className="relative mt-24 border-t border-[color:var(--deco-gold)]/40 bg-[color:var(--deco-charcoal)]/20 py-12">
			<div className="mx-auto max-w-6xl px-6 text-center">
				<div className="mx-auto mb-6 h-10 w-40 bg-[repeating-conic-gradient(from_0deg,transparent_0deg,transparent_10deg,var(--deco-gold)_10deg,var(--deco-gold)_12deg)] [mask-image:radial-gradient(closest-side,black_60%,transparent_61%)]" />
				<p className="font-serif text-sm text-[color:var(--deco-cream)]/70">© {new Date().getFullYear()} Deco Cinema. Crafted with Art Deco precision.</p>
			</div>
		</footer>
	);
}