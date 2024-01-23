/* eslint-disable react/prop-types */
const NavItems = ({ navItemOne, navItemTwo, itemsOne, itemsTwo }) => {
    return (
        <>
            <div className="grid lg:grid-cols-2 py-5 max-w-[1200px] bg-white">
                <div className="lg:ml-[75px] my-4 px-3 py-4 lg:px-0 lg:py-0">
                    <h1 className="text-blue font-medium uppercase">{navItemOne}</h1>
                    {
                        itemsOne.map((item) => {
                            return (
                                <div key={item.id} className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                                    <div className="icon w-8">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className="text ml-4">
                                        <h2 className="font-regular tracking-wide text-sm mb-1">
                                            {item.title}
                                        </h2>
                                        <p className="font-regular tracking-wide text-xs text-gray">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
                <div className="px-3 py-4">
                    <h1 className="text-blue font-medium uppercase">
                        {navItemTwo}
                    </h1>
                    {
                        itemsTwo.map((item) => {
                            return (
                                <div key={item.id} className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                                    <div className="icon w-8">
                                        <img src={item.icon} alt="" />
                                    </div>
                                    <div className="text ml-4">
                                        <h2 className="font-regular tracking-wide text-sm mb-1">
                                            {item.title}
                                        </h2>
                                        <p className="font-regular tracking-wide text-xs text-gray">
                                            {item.text}
                                        </p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


        </>
    )
}

export default NavItems
