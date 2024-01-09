const Header = () => {
    return (
        <>
            <div className="header p-2">
                <div className="img">
                    <img src="/logo.svg" alt="" />
                    GPTZero
                </div>
                <div className="header-links">
                    <ul>
                        <li>solutions</li>
                        <li>resources</li>
                        <li>pricing</li>
                        <li>team</li>
                        <li>login</li>
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
