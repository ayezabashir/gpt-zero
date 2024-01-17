const Resources = () => {
    return (
        <>
            <div className="grid grid-cols-2 max-w-[1200px]">
                <div className="mx-[75px] my-4">
                    <h1 className="text-blue font-medium uppercase">Resources</h1>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./newsIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">
                                News
                            </h2>
                            <p className="font-regular tracking-wide text-xs text-gray">
                                Making headlines around the world.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./technologyIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">
                                Technology
                            </h2>
                            <p className="font-regular tracking-wide text-xs text-gray">
                                See what makes our AI detection # 1.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./teachersIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">
                                Education
                            </h2>
                            <p className="font-regular tracking-wide text-xs text-gray">
                                Build trust with your students.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-4">
                    <h1 className="text-blue font-medium uppercase">
                        support
                    </h1>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./customerSupportIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">
                                Help
                            </h2>
                            <p className="font-regular tracking-wide text-xs text-gray">Articles, troubleshooting and more.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./faqIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">
                                FAQ
                            </h2>
                            <p className="font-regular tracking-wide text-xs text-gray">
                                Answers to all your GPTZero questions.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Resources
