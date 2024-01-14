const Header = () => {
    return (
        <>
            <div className="flex justify-between align-middle p-6">
                <div className="flex align-middle justify-center img">
                    <img src="/logo.svg" alt="" />
                    <h1 className="text-txt-black text-2xl ml-2 font-bold">GPTZero</h1>
                </div>
                <ul className="flex align-middle justify-center space-x-5">
                    <li className="text-txt-black uppercase text-sm font-medium ">solutions</li>
                    <li className="text-txt-black uppercase text-sm font-medium ">resources</li>
                    <li className="text-txt-black uppercase text-sm font-medium ">pricing</li>
                    <li className="text-txt-black uppercase text-sm font-medium ">team</li>
                </ul>
                <div className="buttons flex align-middle justify-center space-x-5">
                    <button className="text-txt-black uppercase text-sm font-medium ">login</button>
                    <button className="border border-txt-black uppercase font-light text-sm">Sales</button>
                    <button className="bg-btn-black hover:bg-btn-hover-black text-white uppercase font-light">get started</button>
                </div>
            </div>
        </>
    )
}

export default Header
