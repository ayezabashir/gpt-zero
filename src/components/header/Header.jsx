const Header = () => {
    return (
        <>
            <div className="p-6">
                <div className="img">
                    <img src="/logo.svg" alt="" />
                    <h1 className="text-txt-black font-bold">GPTZero</h1>
                </div>
                <div className="header-links">
                    <ul>
                        <li className="text-txt-black">solutions</li>
                        <li className="text-txt-black">resources</li>
                        <li className="text-txt-black">pricing</li>
                        <li className="text-txt-black">team</li>
                        <li className="text-txt-black">login</li>
                    </ul>
                </div>
                <div className="buttons">
                    <button>Sales</button>
                    <button>get started</button>
                </div>
            </div>
        </>
    )
}

export default Header
