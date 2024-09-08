const NewsExclusive = () => {
  return (
    <div className="md:w-[85%] mx-auto shadow-md rounded-sm bg-white z-50 opacity-100 relative my-10 pb-10 md:flex items-center justify-between ">
      <div className="md:w-[65%] md:m-9 ml-6 mt-11 mr-2">
        <h2 className="text-blue font-bold text-base  pt-5">
          NEW AND EXCLUSIVE
        </h2>
        <h3 className="text-txt-black mt-3 mb-5 md:text-3xl text-2xl font-bold">
          Deep Analysis View
        </h3>
        <ul className="mt-10">
          <li className="flex gap-2 mb-3 text-txt-black items-center">
            <img src="/check.svg" alt="" />
            Leverages the latest breakthrough in AI detection research.
          </li>
          <li className="flex gap-2 mb-3 text-txt-black items-center">
            <img src="/check.svg" alt="" />
            Unprecedented granular view and understanding of results.
          </li>
          <li className="flex gap-2 mb-3 text-txt-black items-center">
            <img src="/check.svg" alt="" />
            Color-coded highlights for most AI and Human sections of writing.
          </li>
          <li className="flex gap-2 mb-3 text-txt-black items-center">
            <img src="/check.svg" alt="" />
            Statistical analysis for exactly how each sentence affects AI
            probabilities.
          </li>
        </ul>
        <button className="w-[200px] p-3 mt-10 rounded-md text-sm bg-btn-black hover:bg-btn-hover-black text-white">
          Try Now
        </button>
      </div>
      <img
        className="w-full md:w-[35%] p-5 md:p-0"
        src="/deepanalysis.svg"
        alt=""
      />
    </div>
  );
};

export default NewsExclusive;
