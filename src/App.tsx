import { CTA } from "./components/CTA";
import { FeaturesSection } from "./components/FeaturesSection";
import { Footer } from "./components/Footer";
import { HeroSection } from "./components/HeroSection";
import { Navbar } from "./components/Navbar";
import { ShortenCard } from "./components/ShortenCard";

function App() {
    return (
		<div>
			<header>
				<Navbar/>
				<HeroSection/>
			</header>

			<ShortenCard/>
			<FeaturesSection/>
			<CTA/>
			<Footer/>
		</div>
	);
}

export default App;
