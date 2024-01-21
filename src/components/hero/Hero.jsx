import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
    return (
        <section className="container z-50 opacity-100 relative mt-4 flex items-center justify-evenly">
            <div className="left w-1/2">
                <h2 className="text-4xl mb-4 font-bold text-txt-black">
                    More than an AI detector <br />
                    Preserve what&apos;s <span className="underline">human</span>.
                </h2>
                <p className="text-txt-black w-[80%] text-base mb-3 font-light">We bring transparency to humans navigating a world filled with AI content. GPTZero is the gold standard in AI detection, trained to detect ChatGPT, GPT4, Bard, LLaMa, and other AI models.</p>
                <a className="text-txt-black font-bold hover:underline underline-offset-1 flex items-center gap-2" href="#">Check out our products <FaLongArrowAltRight className="text-xl" /> </a>
            </div>
            {/* right */}
            <div className="right w-1/2">
                <div className="boxshaodow">
                    <div className="box-shadow">
                        <div className="box">
                            <h3>
                                Was this text written by a human or AI?
                            </h3>
                            <small>Try detecting one of our sample texts:</small>
                            <ul className="tags">
                                <li>ChatGPT</li>
                                <li>GPT4</li>
                                <li>Llama2</li>
                                <li>Human</li>
                                <li>AI + Human</li>
                            </ul>
                            <div className="textarea">
                                <textarea name="" id="" cols="30" rows="10"></textarea>
                                <button>Upgrade</button>
                            </div>
                            <div>
                                <button>Check Origin</button>
                                <input type="file" name="" id="" />
                            </div>
                            <small>By continuing you agree to our <strong>Terms of service</strong></small>
                        </div>
                    </div>
                </div>
            </div >
        </section>
    )
}

export default Hero
