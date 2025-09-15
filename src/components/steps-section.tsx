import { motion } from "motion/react";
import Image from "next/image";

export default function StepsSection() {
    return (
        <section className="bg-[image:var(--gradient2)]">
            <div className="max-w-1400 mx-auto text-center py-20">
                <motion.h2
                    className="pb-4 flex justify-center text-2xl sm:text-5xl font-semibold"
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.6, delay: 0.6 } }
                >
                    Switch Seamlessly, Without <br/> A Single Line Of Code
                </motion.h2>
                <motion.p
                    className="text-[20px] my-4 mb-10 max-w-[65%] mx-auto"
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.6, delay: 0.8 } }
                >
                    ChottuLink makes migration effortless. Move your campaigns, data, and tracking setup in just a
                    few clicks—no
                    technical expertise required. Get started instantly and focus on growth instead of integration
                    hassles.
                </motion.p>

                <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12">
                    { [
                        {
                            img: "/images/home/steps/step1.webp",
                            title: "Step 1",
                            desc: "Connect Your <br/> Existing Setup"
                        },
                        {
                            img: "/images/home/steps/step2.webp",
                            title: "Step 2",
                            desc: "Import Existing <br/> Links & Campaigns"
                        },
                        {
                            img: "/images/home/steps/step3.webp",
                            title: "Step 3",
                            desc: "Customize <br/> Branding & Rules"
                        },
                        { img: "/images/home/steps/step4.webp", title: "Step 4", desc: "Validate & Test" },
                        { img: "/images/home/steps/step5.webp", title: "Step 5", desc: "Go Live Instantly" },
                    ].map((step, i, arr) => (
                        <div key={ i } className="flex items-center">
                            <motion.div
                                className="flex flex-col items-center text-center"
                                initial={ { opacity: 0, y: 40 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: 0.2 * i } }
                            >
                                <Image
                                    src={ step.img }
                                    alt={ step.title }
                                    className="mb-3 w-20 h-20"
                                    height={ 91 }
                                    width={ 91 }
                                />
                                <h3 className="text-lg font-semibold">{ step.title }</h3>
                                <p
                                    className="text-base"
                                    dangerouslySetInnerHTML={ { __html: step.desc } }
                                />
                            </motion.div>

                            { i < arr.length - 1 && (
                                <motion.div
                                    className="hidden sm:block"
                                    initial={ { opacity: 0, x: -20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true } }
                                    transition={ { duration: 0.6, delay: 0.2 * i + 0.1 } }
                                >
                                    <Image
                                        src="/images/home/arrow.webp"
                                        alt="arrow" className="invert dark:invert-0"
                                        height={ 12 }
                                        width={ 87 }
                                    />
                                </motion.div>
                            ) }
                        </div>
                    )) }
                </div>
            </div>
        </section>)
}
