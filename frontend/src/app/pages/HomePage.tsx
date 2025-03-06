import FootwearCarousel from "../components/FootwearCarousel"
import Hero from "../components/Hero"
import MatchingSet from "../components/MatchingSet"
import NewArrivals from "../components/NewArrivals"
import Brands from "../components/Brands"
import Testimonial from "../components/Testimonial"

export default function HomePage () {
    return (
        <div>
            <Hero/>
            <NewArrivals/>
            <MatchingSet/>
            <div 
                className="parallax bg-fixed bg-center bg-no-repeat bg-cover h-[450] flex items-center justify-center relative" 
                style={{ backgroundImage: 'url(/parallax_image.jpg)' }}>
                <div className="absolute inset-0 bg-black bg-opacity-55"></div>
                <div className="relative text-center text-white p-6 max-w-2xl">
                    <p className="text-2xl md:text-5xl font-semibold italic font-satisfy">
                        "You can have anything you want in life if you dress for it."
                    </p>
                    <p className="text-lg mt-4">- Edith Head</p>
                </div>
            </div>
            <FootwearCarousel/>
            <Brands/>
            <Testimonial/>
        </div>
    )
}