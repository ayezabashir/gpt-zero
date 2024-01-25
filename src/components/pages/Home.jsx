import Discover from "../discover/Discover"
import Hero from "../hero/Hero"
import Leading from "../leadingResearch/Leading"
import NewsExclusive from "../newsexclusve/NewsExclusive"

const Home = () => {
    return (
        <>
            <Hero />
            <Discover />
            <NewsExclusive />
            <Leading />
        </>
    )
}

export default Home
