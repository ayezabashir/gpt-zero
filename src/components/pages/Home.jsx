import Prices from "../Price/Prices"
import Discover from "../discover/Discover"
import Faqs from "../faq/Faqs"
import Hero from "../hero/Hero"
import Leading from "../leadingResearch/Leading"
import NewsExclusive from "../newsexclusve/NewsExclusive"
import Organization from "../orgazanization/Organization"

const Home = () => {
    return (
        <>
            <Hero />
            <Discover />
            <NewsExclusive />
            <Leading />
            <Prices />
            <Organization />
            <Faqs />
        </>
    )
}

export default Home
