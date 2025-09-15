import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config/config";
import { motion } from "motion/react";
import Image from "next/image";

export default function HeroSection() {
    return (
        <section id="home" className="max-w-1400 mt-12 scroll-mt-30 mx-auto px-4">
            <div className="sm:columns-2 mt-8 mb-24 flex items-center flex-col sm:flex-row">
                <motion.div
                    className="sm:text-start text-center sm:mb-0 mb-10"
                    initial={ { opacity: 0, y: 40 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.7, ease: "easeOut" } }
                    viewport={ { once: true, amount: 0.3 } } // animates when 30% visible
                >
                    <motion.h1
                        className="text-2xl sm:text-5xl font-semibold"
                        initial={ { opacity: 0, y: 30 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.8, delay: 0.2 } }
                        viewport={ { once: true } }
                    >
                        A Seamless Drop-in <br/> Replacement for Firebase <br/> Dynamic Links
                    </motion.h1>

                    <motion.p
                        className="mt-4 mb-6 text-lg text-balance"
                        initial={ { opacity: 0, y: 20 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        transition={ { duration: 0.8, delay: 0.4 } }
                        viewport={ { once: true } }
                    >
                        Enjoy a powerful, scalable, and fully-featured deep linking experience with zero downtime
                        and minimal integration effort.
                    </motion.p>

                    <motion.div
                        className="btn-container"
                        initial={ { opacity: 0, scale: 0.9 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        transition={ { duration: 0.6, delay: 0.6 } }
                        viewport={ { once: true } }
                    >
                        <Button
                            variant="outline" className="text-foreground"
                            onClick={ () => window.open(CONFIG.links.dashboard, "_blank") }
                        >
                            Start Free
                        </Button>
                    </motion.div>
                </motion.div>

                <motion.div
                    initial={ { opacity: 0, x: 50 } }
                    whileInView={ { opacity: 1, x: 0 } }
                    transition={ { duration: 0.8, delay: 0.3 } }
                    viewport={ { once: true } }
                >
                    <Image
                        src="/images/home/hero-img.webp"
                        height="484"
                        width="768"
                        priority={true}
                        sizes="(min-width: 768px) 50vw, 100vw"
                        alt="hero-section"
                    />
                </motion.div>
            </div>

            {/* Trusted Brands */ }
            <section className="text-center my-24">
                <motion.h1
                    className="mt-12 sm:mt-24 mb-10 text-2xl sm:text-4xl font-semibold"
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    transition={ { duration: 0.8 } }
                    viewport={ { once: true } }
                >
                    Trusted By Leading Brands Worldwide
                </motion.h1>

                <motion.div
                    className="flex items-center justify-center gap-4 mb-10"
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    transition={ { duration: 1, delay: 0.2 } }
                    viewport={ { once: true } }
                >
                    <div className="brand">
                        <Image src="/images/home/atrangii.webp" height="101" width="101" alt="atrangii"
                               className="size-[80px]"/>
                    </div>
                    <div className="brand">
                        <Image src="/images/home/hariom.webp" height="101" width="101" alt="hariom"
                               className="size-[80px]"/>
                    </div>
                    <div className="brand">
                        <Image src="/images/home/ullu.webp" height="101" width="101" alt="ullu"
                               className="size-[80px]"/>
                    </div>
                </motion.div>
            </section>
        </section>
    )
}
