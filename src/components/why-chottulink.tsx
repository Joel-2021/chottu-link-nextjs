import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { motion } from "motion/react";
import Image from "next/image";

export default function WhyChottulink() {
    return (
        <section id="why-chottulink" className="mt-16 px-4 scroll-mt-30 overflow-hidden">
            <div className="max-w-1400 bg-primary sm:p-12 p-5 rounded-3xl shadow mx-auto scroll-mt-25"
            >
                <div className="flex flex-col md:flex-row sm:gap-12 gap-10 md:items-start items-center text-card-foreground">
                    <motion.div
                        initial={ { opacity: 0, x: -60 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        transition={ { duration: 0.8, ease: "easeOut" } }
                        viewport={ { once: true, amount: 0.3 } }
                    >
                        <Image
                            src="/images/home/section2.webp"
                            height="458"
                            width="489"
                            priority={ true }
                            alt="section2"
                            className="w-full max-w-full sm:w-auto h-auto"
                        />
                    </motion.div>

                    <motion.div
                        className="mt-2"
                        initial={ { opacity: 0, x: 60 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        transition={ { duration: 0.8, ease: "easeOut" } }
                        viewport={ { once: true, amount: 0.3 } }
                    >
                        <h2 className="font-semibold text-2xl sm:text-4xl mb-5">
                            Seamless Deep Linking for Universal Compatibility
                        </h2>

                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={ { once: true, amount: 0.3 } }
                            variants={ {
                                hidden: {},
                                visible: {
                                    transition: { staggerChildren: 0.2 }
                                }
                            } }
                        >
                            { [
                                {
                                    title: "Smart Redirection",
                                    text: "Automatically routes users to the right destination, whether it's an app, a web page, or an app store.",
                                },
                                {
                                    title: "Cross-Platform Consistency",
                                    text: "A single link that adapts to any device and operating system.",
                                },
                                {
                                    title: "Improved User Engagement",
                                    text: "Keep users connected with a smooth transition between mobile and web experiences.",
                                },
                            ].map(({ title, text }) => (
                                <motion.div
                                    key={ title }
                                    className="flex gap-2 items-start mb-3"
                                    variants={ {
                                        hidden: { opacity: 0, y: 20 },
                                        visible: { opacity: 1, y: 0 }
                                    } }
                                    transition={ { duration: 0.6 } }
                                >
                                    <Image
                                        src="/images/pointer.webp"
                                        height="20"
                                        width="20"
                                        alt="pointer"
                                        className="mt-1"
                                    />
                                    <div>
                                        <h4 className="font-bold text-lg sm:text-xl mb-1">{ title }</h4>
                                        <p className="font-quicksand text-base sm:text-lg">{ text }</p>
                                    </div>
                                </motion.div>
                            )) }
                        </motion.div>
                    </motion.div>
                </div>


                <motion.div
                    className="mt-8"
                    initial={ { opacity: 0, scale: 0.95 } }
                    whileInView={ { opacity: 1, scale: 1 } }
                    transition={ { duration: 0.8, ease: "easeOut" } }
                    viewport={ { once: true, amount: 0.2 } }
                >
                    <Marquee className="py-3">
                        <MarqueeFade side="left" className="bg-gradient-to-r from-primary to-transparent"/>
                        <MarqueeFade side="right" className="bg-gradient-to-l from-primary to-transparent"/>
                        <MarqueeContent className="bg-primary">
                            { [
                                "android",
                                "twitter",
                                "messenger",
                                "youtube",
                                "flutter",
                                "safari",
                                "facebook",
                                "apple",
                                "slack",
                            ].map((icon, i) => (
                                <MarqueeItem key={ i }
                                             className="size-[60px] rounded-full bg-[#011E2B] flex items-center justify-center">
                                    <Image
                                        src={ `/images/home/marquee/${ icon }.webp` }
                                        height="40"
                                        width="40"
                                        className="w-auto"
                                        alt={ icon }
                                    />
                                </MarqueeItem>
                            )) }
                        </MarqueeContent>
                    </Marquee>
                </motion.div>
            </div>
        </section>
    )
}
