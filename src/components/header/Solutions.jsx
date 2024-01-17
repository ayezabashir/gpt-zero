const Solutions = () => {
    return (
        <>
            <div className="grid grid-cols-2 max-w-[1200px]">
                <div className="mx-[75px] my-4">
                    <h1 className="text-blue font-medium uppercase">Solutions</h1>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./teachersIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">
                                For Teachers
                            </h2>
                            <p className="font-regular tracking-wide text-xs text-gray">
                                Build trust with your students.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./studentsIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">
                                For students
                            </h2>
                            <p className="font-regular tracking-wide text-xs text-gray">
                                Tools to improve your writing and avoid false accusations.
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./writersIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">For writers</h2>
                            <p className="font-regular tracking-wide text-xs text-gray">Sound intelligent, not artificial.</p>
                        </div>
                    </div>
                </div>
                <div className="px-3 py-4">
                    <h1 className="text-blue font-medium uppercase">
                        products
                    </h1>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./originIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">Origin-Chrome extension</h2>
                            <p className="font-regular tracking-wide text-xs text-gray">Scan for AI content as you browse the internet.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./writersIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">Human Writing Report</h2>
                            <p className="font-regular tracking-wide text-xs text-gray">Create a report of your Google Doc to prove you wrote it.</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./apiIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">API</h2>
                            <p className="font-regular tracking-wide text-xs text-gray">Integrate with our industry-leading AI detection model</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./canvasIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">Canvas Integration</h2>
                            <p className="font-regular tracking-wide text-xs text-gray">Helping institutions accurately identify AI generated content</p>
                        </div>
                    </div>
                    <div className="flex items-center mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 duration-300 cursor-pointer">
                        <div className="icon w-8">
                            <img src="./microsoftIcon.webp" alt="" />
                        </div>
                        <div className="text ml-4">
                            <h2 className="font-regular tracking-wide text-sm mb-1">Microsoft Word Add-on</h2>
                            <p className="font-regular tracking-wide text-xs text-gray">Tools to improve your writing and avoid false accusations</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Solutions
