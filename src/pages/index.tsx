import dynamic from "next/dynamic";
import Head from "next/head";
import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CONFIG } from "@/config/config";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { motion } from "motion/react"

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
                        className="w-full h-full relative"
                    >
                        <Image
                            src="/images/home/hero-img.webp"
                            fill
                            priority
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

            <section id="why-chottulink" className="mt-16 px-4 scroll-mt-30">
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
                                className="w-full sm:w-auto h-auto"
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

            <JourneySection/>
            <FeaturesSection/>

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

            <section className="bg-card scroll-mt-24 px-4">
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
                            className="w-full max-w-[744px] h-auto"
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
                <div className="max-w-1400 mx-auto">
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
                                           className="sm:size-[60px] size-[40px]"/>
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

            <section className="bg-[image:var(--gradient2)]">
                <div className="max-w-1400 mx-auto text-center py-20">
                    <motion.h2
                        className="pb-4 flex justify-center text-2xl sm:text-4xl font-semibold"
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
                                    <h6 className="text-lg font-semibold">{ step.title }</h6>
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
            </section>

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

            <section className="max-w-1400 mx-auto scroll-mt-24 px-4">
                <motion.h2
                    className="md:mt-25 mt-12 text-3xl sm:text-4xl font-bold text-start mb-5"
                    initial={ { opacity: 0, y: 30 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.6 } }
                >
                    FAQ
                </motion.h2>

                <motion.div
                    className="w-full mx-auto my-8"
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    viewport={ { once: true } }
                    transition={ { duration: 0.6, delay: 0.2 } }
                >
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-b border-[#4F4F4F]">
                            <AccordionTrigger className="text-lg font-semibold font-quicksand">
                                What is your return policy?
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-quicksand text-gray-400">
                                We offer a 30-day return policy with a full refund, provided the product is in its
                                original condition.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b border-[#4F4F4F]">
                            <AccordionTrigger className="text-lg font-semibold font-quicksand">
                                How long does shipping take?
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-quicksand text-gray-400">
                                Shipping usually takes 5–7 business days depending on your location.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-b border-[#4F4F4F]">
                            <AccordionTrigger className="text-lg font-semibold font-quicksand">
                                Do you offer international shipping?
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-quicksand text-gray-400">
                                Yes! We ship internationally, and delivery times vary depending on the destination
                                country.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </motion.div>
            </section>

            <GetStarted/>
        </>
    );
}
