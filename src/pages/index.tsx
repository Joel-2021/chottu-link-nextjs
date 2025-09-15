import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { motion } from "motion/react"
import { Suspense } from "react";

const JourneySection = dynamic(() => import("../components/journey-section"), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

const FeaturesSection = dynamic(() => import("../components/features-section"), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

const GetStarted = dynamic(() => import("../components/get-started"), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

const WhyChottulink = dynamic(() => import("../components/why-chottulink"), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

const HeroSection = dynamic(() => import("../components/hero-section"), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

const FaqSection = dynamic(() => import("../components/faq-section"), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

const StepsSection = dynamic(() => import("../components/steps-section"), {
    ssr: true,
    loading: () => <p>Loading...</p>,
})

export default function Home() {
    const title = 'Deep Linking Done Right | Firebase Dynamic Links Alternative';
    const metaDescription = 'Create seamless deep links with Chottulink, a Firebase Dynamic Links alternative for Android, iOS, and Flutter apps';

    return (
        <>
            <Head>
                <title>{ title }</title>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <meta name="description" content={ metaDescription }/>
                <meta name="author" content="ChottuLink"/>

                {/* Open Graph */ }
                <meta property="og:title" content={ title }/>
                <meta property="og:description" content={ metaDescription }/>
                <meta property="og:type" content="article"/>
                <meta property="og:site_name" content="ChottuLink"/>

                {/* Twitter */ }
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:title" content={ title }/>
                <meta name="twitter:description" content={ metaDescription }/>
            </Head>

            <Suspense>
                <HeroSection/>

                <WhyChottulink/>

                <JourneySection/>

                <FeaturesSection/>
            </Suspense>



            <section className="bg-[image:var(--gradient1)] py-16 scroll-mt-24 px-4">
                <div className="max-w-1400 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    <motion.div
                        className="w-full max-w-xl mx-auto text-center md:text-left"
                        initial={ { opacity: 0, x: -50 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true, amount: 0.3 } }
                        transition={ { duration: 0.7, ease: "easeOut" } }
                    >
                        <h3 className="font-poppins text-3xl md:text-5xl font-semibold leading-tight mb-4">
                            Discover Campaign Success with Powerful Analytics
                        </h3>
                        <p className="text-base md:text-lg font-medium font-quicksand">
                            ChottuLink gives you full control over your campaigns with smart tracking and actionable
                            insights. From the first click to the final in-app action, get the complete picture of how
                            your audience engages with your brand.
                        </p>

                        <div className="py-3 space-y-2">
                            { [ "Go Beyond Clicks", "Advanced Grouping & Filtering", "Web-to-App Performance Insights" ].map((item, i) => (
                                <motion.p
                                    key={ i }
                                    className="text-base md:text-lg flex gap-2 items-center"
                                    initial={ { opacity: 0, x: -20 } }
                                    whileInView={ { opacity: 1, x: 0 } }
                                    viewport={ { once: true, amount: 0.3 } }
                                    transition={ { duration: 0.5, delay: 0.1 * i } }
                                >
                                    <Image
                                        src="/images/pointer.webp"
                                        height="20"
                                        width="20"
                                        alt="pointer"
                                        className="h-[15px] w-[15px] dark:invert-0 invert"
                                    />
                                    { item }
                                </motion.p>
                            )) }
                        </div>
                    </motion.div>

                    <motion.div
                        className="w-full"
                        initial={ { opacity: 0, scale: 0.95 } }
                        whileInView={ { opacity: 1, scale: 1 } }
                        viewport={ { once: true, amount: 0.3 } }
                        transition={ { duration: 0.7, ease: "easeOut" } }
                    >
                        <Image src="/images/home/graph.webp" height={ 614 } width={ 714 } priority alt="graph"/>
                    </motion.div>
                </div>
            </section>

            <section className="bg-card scroll-mt-24 px-4 overflow-hidden">
                <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                    <motion.div
                        initial={ { opacity: 0, y: 50 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true, amount: 0.3 } }
                        transition={ { duration: 0.8, ease: "easeOut" } }
                    >
                        <Image
                            src="/images/home/laptop.webp"
                            alt="laptop"
                            height={ 442 }
                            width={ 732 }
                            className="w-full max-w-full h-auto"
                        />
                    </motion.div>

                    <motion.div
                        className="max-w-xl text-center md:text-left"
                        initial={ { opacity: 0, x: 50 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true, amount: 0.3 } }
                        transition={ { duration: 0.8, ease: "easeOut", delay: 0.2 } }
                    >
                        <h3 className="font-poppins text-3xl md:text-5xl font-semibold leading-tight mb-4">
                            Convert, Retain, and Grow with ChottuLink
                        </h3>
                        <p className="text-base md:text-lg font-medium font-quicksand sm:pb-0 pb-12">
                            Many users drop off after their first interaction. Our advanced engagement tools
                            help you bring them back with tailored messaging and intelligent retargeting
                            strategies—ensuring a higher return on your marketing investments.
                        </p>
                    </motion.div>
                </div>
            </section>

            <section
                className="bg-transparent text-center mx-auto px-4"
            >
                <div className="max-w-1400 mx-auto overflow-hidden">
                    <motion.h2
                        className="pt-12 sm:pt-20 mb-10 flex justify-center text-2xl sm:text-4xl font-semibold"
                        initial={ { opacity: 0, y: 30 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true } }
                        transition={ { duration: 0.6 } }
                    >
                        Optimize Every Link <br/> Amplify Every Campaign
                    </motion.h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                        { [
                            {
                                gradient: "bg-[linear-gradient(64deg,#BC2ED2_-126.24%,#001219_130.87%)]",
                                img: "/images/home/journey.webp",
                                title: "Create personalized journeys in real time",
                                desc: "Optimize how you connect with users, ensure a seamless brand experience, and unlock the power to scale campaigns with precision and confidence.",
                            },
                            {
                                gradient: "bg-[linear-gradient(330deg,#684FCE_-111.43%,#001219_107.11%)]",
                                img: "/images/home/cycle.webp",
                                title: "Make your brand consistent across every touchpoint",
                                desc: "From custom domains and titles to thumbnails, descriptions, short links, and QR codes—everything tailored to your brand, completely yours.",
                            },
                        ].map((card, i) => (
                            <motion.div
                                key={ i }
                                className={ `rounded-[18px] ${ card.gradient } text-start flex flex-col text-card-foreground justify-center items-center text-lg` }
                                initial={ { opacity: 0, y: 50 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true } }
                                transition={ { duration: 0.6, delay: i * 0.2 } }
                            >
                                <div className="px-8 py-8 sm:py-0">
                                    <div className="flex items-center gap-2 text-[28px] font-semibold leading-8 mb-4">
                                        <Image src={ card.img } alt="journey" height={ 60 } width={ 60 }
                                               className="sm:size-[60px] size-[40px]"/>
                                        <h4 className="sm:text-3xl text-2xl">{ card.title }</h4>
                                    </div>
                                    <p>{ card.desc }</p>
                                </div>
                            </motion.div>
                        )) }

                        <motion.div
                            className="rounded-[18px] bg-[linear-gradient(28deg,#684FCE_0%,#41317E_100%)] text-start md:col-start-2 md:row-start-1 md:row-span-2 text-card-foreground"
                            initial={ { opacity: 0, x: 50 } }
                            whileInView={ { opacity: 1, x: 0 } }
                            viewport={ { once: true } }
                            transition={ { duration: 0.6, delay: 0.4 } }
                        >
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-[28px] font-semibold leading-8 mb-4">
                                    <Image src="/images/home/link.webp" alt="bulk" height={ 60 } width={ 60 }
                                           className="sm:size-[60px] size-[40px] shrink-0"/>
                                    <h4 className="sm:text-3xl text-2xl">Bulk link generation made simple</h4>
                                </div>
                                <p>
                                    With just a few clicks, you can generate and customize thousands of links at
                                    once—saving time, reducing
                                    errors, and making it effortless to launch campaigns at scale.
                                </p>
                            </div>

                            <div
                                className="px-8 flex gap-4 text-lg font-medium sm:flex-row flex-col-reverse items-center justify-center">
                                <Image
                                    src="/images/home/bulk-generation.webp"
                                    alt="bulk"
                                    height={ 406 }
                                    width={ 287 }
                                    className="sm:max-h-auto max-h-[300px] w-auto"
                                />
                                <div>
                                    <h4 className="text-[26px] font-semibold mb-4 leading-8">Scalable Link
                                        Management</h4>
                                    <p>Generate thousands of branded links in seconds</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            <Suspense>
                <StepsSection/>
            </Suspense>

            <section className="max-w-1400 mx-auto scroll-mt-24 px-4">
                <motion.div
                    initial={ { opacity: 0, scale: 0.95 } }
                    whileInView={ { opacity: 1, scale: 1 } }
                    viewport={ { once: true, amount: 0.3 } }
                    transition={ { duration: 0.7 } }
                    className="text-center md:mt-30 mt-25"
                >
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10">ChottuLink vs Other Competitors
                    </h2>
                    <div className="table-wrapper p-0 sm:p-3">
                        <table
                            className="min-w-full border-separate border-spacing-0 dark:bg-card border-b border-table-outline rounded-b-2xl overflow-hidden">
                            <thead>
                            <tr className="bg-gradient-to-r from-[#3369C5] to-[#F318FF] rounded-t-2xl">
                                <th className="w-1/3 h-[60px] px-2 sm:px-4 text-center align-middle text-lg sm:text-xl font-bold text-white font-poppins rounded-tl-2xl">
                                    Platform
                                </th>
                                <th className="w-1/3 h-[60px] px-2 sm:px-4 text-center align-middle text-lg sm:text-xl font-bold text-white font-poppins">
                                    Pros
                                </th>
                                <th className="w-1/3 h-[60px] px-2 sm:px-4 text-center align-middle text-lg sm:text-xl font-bold text-white font-poppins rounded-tr-2xl">
                                    Cons
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            { [
                                [ "AppsFlyer", "Excellent attribution & fraud protection", "Expensive for deep linking alone" ],
                                [ "Adjust", "Rich analytics & automation", "Steep learning curve" ],
                                [ "Kochava", "Flexible attribution options", "Requires full ecosystem buy-in" ],
                                [ "Airbridge", "Strong omnichannel tracking", "Deep linking is secondary" ],
                            ].map(([ platform, pros, cons ], idx, arr) => (
                                <tr
                                    key={ platform }
                                    className={ `font-poppins font-medium ${
                                        idx === 0 && "font-bold" 
                                    } border-t border-blue-600` }
                                >
                                    <td
                                        className={ `h-[60px] px-3 py-3 text-center align-middle text-base sm:text-lg border-r border-l border-table-outline ${
                                            idx === arr.length - 1 ? "rounded-bl-2xl" : ""
                                        }` }
                                    >
                                        { platform }
                                    </td>
                                    <td className="h-[60px] px-3 py-3 text-center align-middle text-base sm:text-lg border-r border-table-outline">
                                        { pros }
                                    </td>
                                    <td
                                        className={ `h-[60px] px-3 py-3 text-center align-middle text-base  border-r sm:text-lg border-table-outline ${
                                            idx === arr.length - 1 ? "rounded-br-2xl" : ""
                                        }` }
                                    >
                                        { cons }
                                    </td>
                                </tr>
                            )) }
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </section>

            <Suspense>
                <FaqSection/>

                <GetStarted/>
            </Suspense>
        </>
    );
}
