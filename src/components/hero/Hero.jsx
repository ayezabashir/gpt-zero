import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
const Hero = () => {
  const [text, setText] = useState("");
  const totalChars = (event) => {
    setText(event.target.value);
  };
  return (
    <section className="container z-50 opacity-100 relative my-5 lg:my-0 lg:min-h-[88vh] lg:flex items-center justify-evenly">
      <div className="lg:w-1/2">
        <h2 className="md:text-4xl text-2xl mb-4 font-bold text-txt-black">
          More than an AI detector <br />
          Preserve what&apos;s <span className="underline">human</span>.
        </h2>
        <p className="text-txt-black w-full lg:w-[80%] md:text-base text-sm mb-3 font-light">
          We bring transparency to humans navigating a world filled with AI
          content. GPTZero is the gold standard in AI detection, trained to
          detect ChatGPT, GPT4, Bard, LLaMa, and other AI models.
        </p>
        <a
          className="text-txt-black font-bold hover:underline underline-offset-1 flex items-center gap-2"
          href="#"
        >
          Check out our products <FaLongArrowAltRight className="text-xl" />{" "}
        </a>
      </div>
      {/* right */}
      <div className="lg:w-1/2 mt-5 lg:mt-0">
        <div className="rounded-3xl border-8 border-slate-200 bg-slate-200 ">
          <div className="rounded-3xl border-8 border-slate-100 bg-slate-100">
            <div className="box bg-white md:p-8 p-4 rounded-2xl">
              <h3 className="text-txt-black mb-2">
                Was this text written by a{" "}
                <span className="font-medium">human</span> or{" "}
                <span className="font-medium">AI</span>?
              </h3>
              <small className="text-txt-gray">
                Try detecting one of our sample texts:
              </small>
              <ul className="md:text-sm text-xs mt-2 text-slate-600 flex flex-wrap gap-2 items-center">
                <li className="border border-txt-gray hover:bg-btn-hover-black hover:text-white cursor-pointer px-2 py-1 rounded-2xl">
                  ChatGPT
                </li>
                <li className="border border-txt-gray hover:bg-btn-hover-black hover:text-white cursor-pointer px-2 py-1 rounded-2xl">
                  GPT4
                </li>
                <li className="border border-txt-gray hover:bg-btn-hover-black hover:text-white cursor-pointer px-2 py-1 rounded-2xl">
                  Llama2
                </li>
                <li className="border border-txt-gray hover:bg-btn-hover-black hover:text-white cursor-pointer px-2 py-1 rounded-2xl">
                  Human
                </li>
                <li className="border border-txt-gray hover:bg-btn-hover-black hover:text-white cursor-pointer px-2 py-1 rounded-2xl">
                  AI + Human
                </li>
              </ul>
              <div className="textarea border border-txt-gray mt-3 rounded-md p-2">
                <textarea
                  value={text}
                  onInput={totalChars}
                  className="border-0 outline-none w-full font-regular text-sm resize-none"
                  placeholder="Paste your text here..."
                  cols="30"
                  rows="9"
                ></textarea>
                <div>
                  <span className="text-txt-gray md:text-sm text-xs mr-2">
                    {text.length}/5000 characters
                  </span>
                  <button className="border border-txt-gray px-3 py-1 rounded-3xl text-blue text-xs uppercase">
                    Upgrade
                  </button>
                </div>
              </div>
              <div className="mt-3 mb-1 md:flex items-center text-center md:justify-between w-full">
                <button className="bg-black md:mb-0 mb-2 text-sm hover:bg-slate-700 text-white p-3 rounded-md w-[200px]">
                  Check Origin
                </button>
                <input type="file" id="actual-btn" hidden />
                <label
                  className="flex items-center m-auto md:m-0 justify-center gap-1 px-3 py-1 text-sm text-txt-black cursor-pointer border border-dashed w-[130px] border-gray rounded-md"
                  htmlFor="actual-btn"
                >
                  Upload File{" "}
                  <img src="/info.svg" className="w-5" alt="info icon" />{" "}
                </label>
              </div>
              <small className="text-txt-black">
                By continuing you agree to our{" "}
                <strong className="hover:underline">Terms of service</strong>
              </small>
            </div>
          </div>
        </div>
        <img src="/shadow.svg" className="mt-5" alt="" />
      </div>
    </section>
  );
};

export default Hero;
