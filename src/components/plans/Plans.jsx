import { useState } from "react";
import { plansData } from "../../assets/data/data";

const Plans = () => {
  const [isYearly, setIsYearly] = useState(true);
  const togglePlanType = () => {
    setIsYearly((prevState) => !prevState);
  };

  return (
    <>
      <h2 className="text-txt-black md:text-2xl text-xl text-center my-10 font-bold">
        Choose Your Plan
      </h2>
      <div className="container flex justify-center gap-3">
        <button
          className={`text-txt-black font-medium ${
            isYearly ? "border-b-4 border-[#E5E7EB]" : "border-b-0"
          }`}
          onClick={togglePlanType}
        >
          Yearly <span className="text-blue">(Save 33%)</span>{" "}
        </button>
        <button
          className={`text-gray font-medium ${
            isYearly ? "border-b-0" : "border-b-4 border-[#E5E7EB]"
          }`}
          onClick={togglePlanType}
        >
          Monthly
        </button>
      </div>
      <div className="container pt-0 md:p-0 lg:p-20 lg:pt-0 md:flex justify-between items-center">
        {plansData.map((item) => {
          return (
            <div
              key={item.id}
              className="h-auto md:h-[600px] lg:p-10 p-5 lg:m-5 md:m-3 my-5 rounded-md shadow-lg bg-white hover:shadow-xl flex flex-col justify-between cursor-pointer hover:scale-105 ease-out delay-150 duration-300"
            >
              <div className="border-b-2 md:pb-10 pb-5 border-slate-200">
                <h2 className="text-txt-black uppercase font-bold md:text-lg text-base">
                  {item.plan}
                </h2>
                {item.price === "$16" && (
                  <button className="bg-[#60A5FA] my-2 text-white px-2 py-1 text-xs uppercase rounded-full">
                    Most popular
                  </button>
                )}
                {item.plan !== "basic" && (
                  <h3 className="text-txt-black md:text-2xl text-xl font-medium my-3">
                    {isYearly
                      ? item.price === "$10"
                        ? "$10"
                        : "$16"
                      : item.price === "$10"
                      ? "$15"
                      : "$24"}
                    /<span className="text-xs">month</span>
                  </h3>
                )}
                {item.plan === "basic" && (
                  <h3 className="text-txt-black md:text-2xl text-xl font-medium my-3">
                    {item.price}/<span className="text-xs">month</span>
                  </h3>
                )}
                <p className="card-text font-light text-xs">{item.text}</p>
              </div>
              <div className="md:py-5 py-3">
                {item.p.map((check, index) => {
                  return (
                    <p
                      key={index}
                      className="flex items-start tracking-wider gap-2 my-2 text-xs"
                    >
                      <img src="/bluecheck.svg" alt="" />
                      {check}
                    </p>
                  );
                })}
              </div>
              <button className="border rounded-md text-sm my-5 px-2 py-3 hover:bg-btn-hover-black hover:text-white">
                Get Started
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Plans;
