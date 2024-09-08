import { FaArrowRight } from "react-icons/fa6";

const Leading = () => {
  return (
    <>
      <div className="bg-gradient-to-b from-black to-indigo-950 relative z-50 py-20 md:px-[4%] lg:px-[15%] 2xl:px-[18%] flex flex-wrap md:justify-between align-center items-center shadow-inner">
        <div className="container md:flex items-center justify-between">
          <img className="mx-auto mb-16 md:m-0" src="/tech.svg" alt="" />
          <div className="text-white md:text-right md:pl-[10%] md:flex flex-col justify-between items-end">
            <h1 className="text-base font-bold mb-5"> OUR TECHNOLOGY</h1>
            <h2 className="md:text-3xl text-2xl mb-5">
              {" "}
              Leading research in AI content detection modeling
            </h2>
            <p className="md:text-lg text-base font-light">
              {" "}
              Our AI detection model contains 7 components that process text to
              determine if it was written by AI. We utilize a multi-step
              approach that aims to produce predictions that reach maximum
              accuracy, with the least false positives. Our model specializes in
              detecting content from Chat GPT, GPT 3, GPT 4, Bard, and LLaMa
              models.
            </p>
            <button className="md:text-xl text-lg border-4 gap-2 mt-5 px-5 md:py-3 py-2 rounded-md flex items-center justify-between">
              See how it works <FaArrowRight />{" "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Leading;
