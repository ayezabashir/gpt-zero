import Card from "./Card"

const Discover = () => {
    return (
        <div className="md:w-[85%] mx-auto bg-white z-50 opacity-100 relative my-10 flex flex-col ">
            <div className="md:w-[60%]">
                <div className="m-9 mt-11 mr-2">
                    <h2 className="text-blue font-bold text-base">WITH MILLIONS OF USERS</h2>
                    <h3 className="text-txt-black mt-3 mb-5 text-3xl font-bold">Discover our Detection Dashboard</h3>
                    <p className="font-light text-base">Our dashboard was developed specifically with educator&apos;s needs in mind.
                        Access a premium model with highest grade fidelity and interpretability.</p>
                </div>
                <img className="w-full md:w-[50%] p-5 md:p-0 md:absolute md:-right-20 md:top-5" src="/dashboard.svg" alt="" />
            </div>
            <div className="md:w-[60%] ml-9 mr-2 md:flex items-start">
                <Card />
            </div>
            <div>
                <button className="w-[200px] p-3 ml-9 mt-10 rounded-md text-sm bg-btn-black hover:bg-btn-hover-black text-white">Go to Dashboard</button>
            </div>
        </div>
    )
}

export default Discover
