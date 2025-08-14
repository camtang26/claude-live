import NavBar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen";
import Hero from "./components/Hero";
import GalleryStrip from "./components/GalleryStrip";
import Story from "./components/Story";
import Footer from "./components/Footer";

export default function Site() {
	return (
		<main>
			<LoadingScreen />
			<NavBar />
			<Hero />
			<GalleryStrip />
			<Story />
			<Footer />
		</main>
	);
}