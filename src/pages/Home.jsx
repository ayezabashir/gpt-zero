import Prices from "../components/Price/Prices"
import Discover from "../components/discover/Discover"
import Faqs from "../components/faq/Faqs"
import Hero from "../components/hero/Hero"
import Leading from "../components/leadingResearch/Leading"
import NewsExclusive from "../components/newsexclusve/NewsExclusive"
import Organization from "../components/orgazanization/Organization"
import Plans from "../components/plans/Plans"

const Home = () => {
    return (
        <>
            <Hero />
            <Discover />
            <NewsExclusive />
            <Leading />
            <Prices />
            <Organization />
            <Plans />
            <Faqs />
        </>
    )
}

export default Home
