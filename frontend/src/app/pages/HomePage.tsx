import Hero from "../components/Hero"
import MatchingSet from "../components/MatchingSet"
import NewArrivals from "../components/NewArrivals"

export default function HomePage () {
    return (
        <div>
            <Hero/>
            <NewArrivals/>
            <MatchingSet/>
            Parallax<br/>
            Footwear Carousel<br/>
            Brands<br/>
            Testimonial<br/>
        </div>
    )
}