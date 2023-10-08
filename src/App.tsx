import Navbar from "./components/Navbar";
import AboutSection from "./sections/AboutSection";
import ContactUs from "./sections/ContactUs";
import FoodMenu from "./sections/FoodMenu";
import Gallery from "./sections/Gallery";
import HeroSection from "./sections/HeroSection";
import SpecialsSection from "./sections/SpecialsSection";

function App() {
	return (
		<div className="">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<SpecialsSection />
			<FoodMenu />
			<Gallery />
			<ContactUs />
		</div>
	);
}

export default App;
