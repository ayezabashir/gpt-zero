import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"
import Home from "../src/pages/Home"

function App() {

  return (
    <>
      <Header />
      <img src="/bg.svg" alt="background image"
        className="absolute right-0 top-0 z-0 w-[100vw]" />
      <Home />
      <Footer />
    </>
  )
}

export default App
