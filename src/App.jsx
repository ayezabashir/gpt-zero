import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Prices from "./components/Price/Prices"
import Discover from "./components/discover/Discover"
import Faqs from "./components/faq/Faqs"
import Hero from "./components/hero/Hero"
import Leading from "./components/leadingResearch/Leading"
import NewsExclusive from "./components/newsexclusve/NewsExclusive"
import Organization from "./components/orgazanization/Organization"
import Plans from "./components/plans/Plans"
function App() {

  return (
    <>
      <Header />
      <img src="/bg.svg" alt="background image"
        className="absolute right-0 top-0 z-0 w-[100vw]" />
      <Hero />
      <Discover />
      <NewsExclusive />
      <Leading />
      <Prices />
      <Organization />
      <Plans />
      <Faqs />
      <Footer />
    </>
  )
}

export default App
