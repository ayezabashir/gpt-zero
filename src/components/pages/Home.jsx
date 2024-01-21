import Hero from "../hero/Hero"

const Home = () => {
    return (
        <>
            <img src="/bg.svg" alt="background image"
                className="hidden lg:block absolute right-0 top-0 z-0 w-[100vw]" />
            <Hero />
        </>
    )
}

export default Home
