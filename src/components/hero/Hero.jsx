import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
    return (
        <section className="container z-50 opacity-100 relative mt-4 flex items-center justify-evenly">
            <div className="w-1/2">
                <h2 className="text-4xl mb-4 font-bold text-txt-black">
                    More than an AI detector <br />
                    Preserve what&apos;s <span className="underline">human</span>.
                </h2>
                <p className="text-txt-black w-[80%] text-base mb-3 font-light">We bring transparency to humans navigating a world filled with AI content. GPTZero is the gold standard in AI detection, trained to detect ChatGPT, GPT4, Bard, LLaMa, and other AI models.</p>
                <a className="text-txt-black font-bold hover:underline underline-offset-1 flex items-center gap-2" href="#">Check out our products <FaLongArrowAltRight className="text-xl" /> </a>
            </div>
            {/* right */}
            <div className="w-1/2">
                <div className="rounded-3xl border-8 border-slate-200 bg-slate-200">
                    <div className="rounded-3xl border-8 border-slate-100 bg-slate-100">
                        <div className="box bg-white p-8 rounded-2xl">
                            <h3 className="text-txt-black mb-2">
                                Was this text written by a <span className="font-medium">human</span> or <span className="font-medium">AI</span>?
                            </h3>
                            <small className="text-txt-gray">Try detecting one of our sample texts:</small>
                            <ul className="text-sm mt-2 text-slate-600 flex gap-2 items-center">
                                <li className="border border-txt-gray px-2 py-1 rounded-2xl">ChatGPT</li>
                                <li className="border border-txt-gray px-2 py-1 rounded-2xl">GPT4</li>
                                <li className="border border-txt-gray px-2 py-1 rounded-2xl">Llama2</li>
                                <li className="border border-txt-gray px-2 py-1 rounded-2xl">Human</li>
                                <li className="border border-txt-gray px-2 py-1 rounded-2xl">AI + Human</li>
                            </ul>
                            <div className="textarea border border-txt-gray mt-3 rounded-md p-2">
                                <textarea className="border-0 outline-none font-regular text-sm resize-none" placeholder="Paste your text here..." name="" id="" cols="30" rows="10"></textarea>
                                <button className="border border-txt-gray px-3 py-1 rounded-3xl text-blue text-xs uppercase">Upgrade</button>
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
