export default function GetStarted() {
    return (
        <section className="max-w-[1400px] mx-auto mt-15 sm:mt-20 px-4">
            <div className="bg-[#684FCE] p-6 md:p-10 rounded-xl grid grid-cols-1 md:grid-cols-2 items-center gap-8">

                {/* Left Column */ }
                <div className="text-center md:text-left">
                    <h2 className="text-xl sm:text-2xl font-semibold">
                        Get Started with ChottuLink Today
                    </h2>
                    <p className="mt-3 text-balance">
                        Unlock the full potential of user engagement and retention.
                        Request a demo and see how ChottuLink can help you drive better results.
                    </p>
                </div>

                {/* Right Column */ }
                <div className="flex ml-auto w-full sm:w-3/4">
                    <div
                        className="flex w-full items-center rounded-full p-[3px] bg-[linear-gradient(92.25deg,#F53B3B_8.38%,#FFFFFF_58.86%,#B929DD_86.85%,#FF9D00_108.34%)]">
                        <div className="flex w-full items-center rounded-full bg-[#684FCE] p-[5px]">
                            <input
                                type="email"
                                placeholder="Enter Your Email Address"
                                className="flex-1 bg-[#684FCE] text-white placeholder-white outline-none px-4 w-3/4"
                            />
                            <button className="ml-2 bg-black rounded-full py-2 px-5 font-medium text-sm text-white">
                                Request Demo
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
