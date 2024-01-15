const Header = () => {
    return (
        <div className="header">
            <div className="nav-bar flex justify-between items-center py-3 px-8">
                <div className="nav-bar-items flex items-center justify-center img">
                    <div className="gpt-zero flex items-center justify-between mr-8">
                        <img src="/logo.svg" alt="" />
                        <h1 className="text-txt-black text-2xl ml-2 font-bold">GPTZero</h1>
                    </div>
                    <ul className="navbar-items-item flex items-center justify-center space-x-1">
                        <li className="item px-4 py-3 rounded-md text-txt-black uppercase text-sm font-regular hover:font-medium ">solutions</li>
                        <li className="item px-4 py-3 rounded-md text-txt-black uppercase text-sm font-regular hover:font-medium">resources</li>
                        <li className="item px-4 py-3 rounded-md text-txt-black uppercase text-sm font-regular hover:font-medium">pricing</li>
                        <li className="item px-4 py-3 rounded-md text-txt-black uppercase text-sm font-regular hover:font-medium">team</li>
                    </ul>
                </div>

                <div className="buttons flex items-center justify-center space-x-5">
                    <button className="px-4 py-3 text-txt-black uppercase text-sm font-regular hover:font-medium">log in</button>
                    <button className="px-4 py-3 rounded-md border border-txt-black hover:bg-btn-hover-black hover:transition-all hover:text-white uppercase font-light text-sm">Sales</button>
                    <button className="px-4 py-3 rounded-md bg-btn-black hover:bg-btn-hover-black text-white uppercase font-light">get started</button>
                </div>
            </div>
        </div>
    )
}

export default Header
