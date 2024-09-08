import Question from "./Question";
const Faqs = () => {
  return (
    <div className="container my-10 lg:flex">
      <div className="lg:w-1/3 lg:mx-10">
        <h2 className="font-bold md:text-xl text-lg text-txt-black">
          General FAQs about our AI Detector
        </h2>
        <p className="text-txt-black md:text-base text-sm mt-5">
          Everything you need to know about GPTZero and our chat gpt detector.
          Can’t find an answer? You can talk to our{" "}
          <span className="underline cursor-pointer">
            customer service team.
          </span>
        </p>
      </div>
      <div className="lg:w-2/3 my-5 lg:my-0 lg:mx-10">
        <Question />
      </div>
    </div>
  );
};

export default Faqs;
