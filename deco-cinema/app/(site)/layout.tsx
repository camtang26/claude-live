import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
	title: "Deco Cinema",
	description: "Art Deco cinematic experience",
};

export default function SiteLayout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative letterbox">
			{children}
		</div>
	);
}