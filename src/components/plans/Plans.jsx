import { plansData } from "../../assets/data/data"

const Plans = () => {
    return (
        <>
            <div className="container p-20 md:p-0 lg:p-20 md:flex justify-between items-center">
                {
                    plansData.map(item => {
                        return (
                            <div key={item.id} className="container h-[600px] p-10 m-5 rounded-md shadow-lg bg-white hover:shadow-xl flex flex-col justify-between cursor-pointer hover:scale-105 ease-out delay-150 duration-300">
                                <div className="border-b-2 pb-10 border-slate-200">
                                    <h2 className="text-txt-black uppercase font-bold text-lg">{item.plan}</h2>
                                    {
                                        item.price == '$16' ? <button className="bg-[#60A5FA] my-2 text-white px-2 py-1 text-xs uppercase rounded-full">Most popular</button> : ''
                                    }
                                    <h3 className="text-txt-black text-2xl font-medium my-3">{item.price}/<span className="text-xs">month</span></h3>
                                    <p className="card-text font-light text-xs">{item.text}</p>
                                </div>
                                <div className="py-5">
                                    {
                                        item.p.map((check, index) => {
                                            return (
                                                <p key={index} className="flex items-start tracking-wider gap-2 my-2 text-xs"><img src="/bluecheck.svg" alt="" />{check}</p>
                                            )
                                        })
                                    }
                                </div>
                                <button className="border rounded-md text-sm mt-5 px-2 py-3 hover:bg-btn-hover-black hover:text-white">Get Started</button>
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Plans
