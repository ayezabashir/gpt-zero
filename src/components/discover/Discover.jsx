import Card from "./Card";

const Discover = () => {
  return (
    <div className="lg:w-[85%] mx-auto shadow-md rounded-sm bg-white z-50 opacity-100 relative my-10 pb-10 flex flex-col ">
      <div className="lg:w-[60%]">
        <div className="container md:mt-11 md:mr-2">
          <h2 className="text-blue font-bold md:text-base text-sm pt-5">
            WITH MILLIONS OF USERS
          </h2>
          <h3 className="text-txt-black mt-3 mb-5 md:text-3xl text-2xl font-bold">
            Discover our Detection Dashboard
          </h3>
          <p className="font-light md:text-base text-sm">
            Our dashboard was developed specifically with educator&apos;s needs
            in mind. Access a premium model with highest grade fidelity and
            interpretability.
          </p>
        </div>
        <img
          className="container lg:w-[50%] p-5 md:p-0 lg:absolute lg:-right-20 lg:top-5"
          src="/dashboard.svg"
          alt=""
        />
      </div>
      <div className="lg:w-[62%] lg:h-[200px] md:ml-9 ml-2 mr-2 lg:flex items-start">
        <Card />
      </div>
      <button className="w-[200px] p-3 md:ml-9 m-6 mt-10 rounded-md text-sm bg-btn-black hover:bg-btn-hover-black text-white">
        Go to Dashboard
      </button>
    </div>
  );
};

export default Discover;
