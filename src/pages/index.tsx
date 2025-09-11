import FeaturesSection from "@/components/features-section";
import GetStarted from "@/components/get-started";
import JourneySection from "@/components/journey-section";
import { AreaChart } from "@/components/area-chart";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Marquee, MarqueeContent, MarqueeFade, MarqueeItem } from "@/components/ui/shadcn-io/marquee";
import { CONFIG } from "@/config/config";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

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
                    <div className="sm:text-start text-center sm:mb-0 mb-10">
                        <h1 className="text-2xl sm:text-5xl font-semibold">
                            A Seamless Drop-in <br/> Replacement for Firebase <br/> Dynamic Links
                        </h1>

                        <p className="mt-4 mb-6 text-lg">
                            Enjoy a powerful, scalable, and fully-featured deep linking experience with zero downtime
                            and
                            minimal
                            integration effort.
                        </p>

                        <div className="btn-container">
                            <Button
                                variant="outline"
                                onClick={() => window.open(CONFIG.links.dashboard, "_blank")}>
                                Start Free
                            </Button>
                        </div>
                    </div>
                    <div>
                        <Image src="/images/home/section1.webp" height="506" width="743" priority={true}
                               alt="hero-section"/>
                    </div>
                </div>

                <section className="text-center my-24">
                    <h1 className="mt-12 sm:mt-24 mb-10 text-2xl sm:text-4xl font-semibold">Trusted By Leading Brands
                        Worldwide</h1>

                    <div className="flex items-center justify-center gap-4 mb-10">
                        <div className="brand">
                            <Image src="/images/home/atrangii.webp" height="101" width="101"
                                   alt="atrangii" className="size-[80px]"/>
                        </div>
                        <div className="brand">
                            <Image src="/images/home/hariom.webp" height="101" width="101"
                                   alt="hariom" className="size-[80px]"/>
                        </div>
                        <div className="brand">
                            <Image src="/images/home/ullu.webp" height="101" width="101"
                                   alt="ullu" className="size-[80px]"/>
                        </div>
                    </div>
                </section>
            </section>

            <section id="why-chottulink"
                className="mt-16 max-w-1400 bg-[#002635] sm:p-12 p-5 rounded-3xl shadow mx-auto scroll-mt-25">
                <div className="flex flex-col md:flex-row sm:gap-12 gap-10 md:items-start items-center">
                    <Image
                        src="/images/home/section2.webp"
                        height="458"
                        width="489"
                        priority={true}
                        alt="section2"
                        className="w-full sm:w-auto h-auto"
                    />
                    <div className="mt-2">
                        <h2 className="font-semibold text-2xl sm:text-4xl mb-5">
                            Seamless Deep Linking for Universal Compatibility
                        </h2>

                        {/* bullet points */ }
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
                            <div key={ title } className="flex gap-2 items-start mb-3">
                                <Image
                                    src="/images/pointer.webp"
                                    height="20"
                                    width="20"
                                    alt="pointer"
                                    className="mt-1"
                                />
                                <div>
                                    <h4 className="font-bold text-lg sm:text-xl mb-1">{ title }</h4>
                                    <p className="font-secondary text-base sm:text-lg">{ text }</p>
                                </div>
                            </div>
                        )) }
                    </div>
                </div>

                {/* marquee section */ }
                <div className="mt-8">
                    <Marquee className="py-3">
                        <MarqueeFade side="left" className="bg-gradient-to-r from-[#002635] to-transparent"/>
                        <MarqueeFade side="right" className="bg-gradient-to-l from-[#002635] to-transparent"/>
                        <MarqueeContent className="bg-[#002635]">
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
                            ].map((icon) => (
                                <MarqueeItem
                                    key={ icon }
                                    className="size-[60px] rounded-full bg-[#011E2B] flex items-center justify-center"
                                >
                                    <Image
                                        src={ `/images/home/marquee/${ icon }.webp` }
                                        height="40"
                                        width="40" className="w-auto"
                                        alt={ icon }
                                    />
                                </MarqueeItem>
                            )) }
                        </MarqueeContent>
                    </Marquee>
                </div>
            </section>


            <JourneySection/>
            <FeaturesSection/>

            <section className="bg-[linear-gradient(180deg,#002635_0%,#010F15_100%)] py-16 scroll-mt-24 px-4">
                <div className="max-w-1400 mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Left Column */ }
                    <div className="w-full max-w-xl mx-auto text-center md:text-left">
                        <h3 className="font-poppins text-3xl md:text-5xl font-semibold leading-tight mb-4">
                            Discover Campaign Success with Powerful Analytics
                        </h3>
                        <p className="text-base md:text-lg font-medium font-secondary">
                            ChottuLink gives you full control over your campaigns with smart tracking and actionable
                            insights. From the first click to the final in-app action, get the complete picture of how
                            your audience engages with your brand.
                        </p>

                        <div className="py-3 space-y-2">
                            <p className="text-base md:text-lg flex gap-2 items-center">
                                <Image
                                    src="/images/pointer.webp"
                                    height="20"
                                    width="20"
                                    alt="pointer"
                                    className="h-[15px] w-[15px]"
                                />
                                Go Beyond Clicks
                            </p>
                            <p className="text-base md:text-lg flex gap-2 items-center">
                                <Image
                                    src="/images/pointer.webp"
                                    height="20"
                                    width="20"
                                    alt="pointer"
                                    className="h-[15px] w-[15px]"
                                />
                                Advanced Grouping & Filtering
                            </p>
                            <p className="text-base md:text-lg flex gap-2 items-center">
                                <Image
                                    src="/images/pointer.webp"
                                    height="20"
                                    width="20"
                                    alt="pointer"
                                    className="h-[15px] w-[15px]"
                                />
                                Web-to-App Performance Insights
                            </p>
                        </div>
                    </div>

                    {/* Right Column */ }
                    <div className="w-full">
                        <AreaChart/>
                    </div>
                </div>

            </section>

            <section className="bg-black py-16 scroll-mt-24 px-4">
                <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-12">
                    <Image
                        src="/images/home/laptop.webp"
                        alt="laptop" height={ 442 } width={ 732 }
                        className="w-full max-w-[744px] h-auto"
                    />
                    <div className="max-w-xl text-center md:text-left">
                        <h3 className="font-poppins text-3xl md:text-5xl font-semibold leading-tight mb-4">
                            Convert, Retain, and Grow with ChottuLink
                        </h3>
                        <p className="text-base md:text-lg font-medium font-secondary">
                            Many users drop off after their first interaction. Our advanced engagement tools
                            help you bring them back with tailored messaging and intelligent retargeting
                            strategies—ensuring a higher
                            return
                            on your marketing investments.
                        </p>
                    </div>
                </div>
            </section>

            <section
                className="bg-[linear-gradient(180deg,transparent_0%,#010F15_50%,#002635_100%)] text-center mx-auto px-4">
                <div className="max-w-1400 mx-auto">
                    <h2 className="pt-12 sm:pt-20 mb-10 flex justify-center text-2xl sm:text-4xl font-semibold">
                        Optimize Every Link <br/> Amplify Every Campaign</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div
                            className="bg-[linear-gradient(64deg,#BC2ED2_-126.24%,#001219_130.87%)] rounded-[18px] text-start flex flex-col justify-center items-center text-lg">
                            <div className="px-8 py-8 sm:py-0">
                                <div className="flex items-center gap-2 text-[28px] font-semibold leading-8 mb-4">
                                    <Image src="/images/home/journey.webp" alt="journey" height={ 60 }
                                           width={ 60 }
                                           className="sm:size-[60px] size-[40px]"/>
                                    <h4 className="sm:text-3xl text-2xl">Create personalized journeys in real time</h4>
                                </div>
                                <p>
                                    Optimize how you connect with users, ensure a seamless brand experience, and unlock
                                    the power
                                    to scale campaigns with precision and confidence.
                                </p>
                            </div>
                        </div>

                        <div
                            className="bg-[linear-gradient(330deg,#684FCE_-111.43%,#001219_107.11%)] rounded-[18px] text-start flex flex-col justify-center items-center text-lg">
                            <div className="px-8 py-8 sm:py-0">
                                <div className="flex items-center gap-2 text-[28px] font-semibold leading-8 mb-4">
                                    <Image src="/images/home/cycle.webp" alt="cycle" height={ 60 } width={ 60 }
                                           className="sm:size-[60px] size-[40px]"/>
                                    <h4 className="sm:text-3xl text-2xl">Make your brand consistent across every
                                        touchpoint</h4>
                                </div>
                                <p>
                                    From custom domains and titles to thumbnails, descriptions, short links, and QR
                                    codes—
                                    everything tailored to your brand, completely yours.
                                </p>
                            </div>
                        </div>

                        <div
                            className="rounded-[18px] bg-[linear-gradient(28deg,#684FCE_0%,#41317E_100%)] text-start md:col-start-2 md:row-start-1 md:row-span-2">
                            <div className="p-8">
                                <div className="flex items-center gap-2 text-[28px] font-semibold leading-8 mb-4">
                                    <Image src="/images/home/link.webp" alt="bulk" height={ 60 } width={ 60 }
                                           className="sm:size-[60px] size-[40px]"/>
                                    <h4 className="sm:text-3xl text-2xl">Bulk link generation made simple</h4>
                                </div>
                                <p>
                                    With just a few clicks, you can generate and customize thousands of links at once—
                                    saving time, reducing errors, and making it effortless to launch campaigns at scale.
                                </p>
                            </div>

                            <div
                                className="px-8 flex gap-4 text-lg font-medium sm:flex-row flex-col-reverse items-center justify-center">
                                <Image src="/images/home/bulk-generation.webp" alt="bulk" height={ 406 }
                                       width={ 287 }
                                       className="sm:max-h-auto max-h-[300px] w-auto"/>
                                <div>
                                    <h4 className="text-[26px] font-semibold mb-4 leading-8">Scalable Link
                                        Management</h4>
                                    <p>Generate thousands of branded links in seconds</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="max-w-1400 mx-auto">
                    <h2 className="mt-12 sm:mt-20 mb-4 flex justify-center text-2xl sm:text-4xl font-semibold">Switch
                        Seamlessly,
                        Without <br/> A Single Line Of Code</h2>
                    <p className="text-[20px] my-4 mb-8 [text-wrap:balance]">ChottuLink makes migration effortless. Move
                        your campaigns, data, and tracking setup in
                        just a few clicks—no
                        technical expertise required. Get started instantly and focus on growth instead of integration
                        hassles.</p>
                    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-12 pb-10">
                        <div className="flex flex-col items-center text-center">
                            <Image src="/images/home/steps/step1.webp" alt="step1" className="mb-3 w-20 h-20"
                                   height={ 91 } width={ 91 }/>
                            <h6 className="text-lg font-semibold">Step 1</h6>
                            <p className="text-base">Connect Your <br/> Existing Setup</p>
                        </div>
                        <Image src="/images/home/arrow.webp" alt="arrow" className="hidden sm:block w-20"
                               height={ 12 } width={ 87 }/>

                        <div className="flex flex-col items-center text-center">
                            <Image src="/images/home/steps/step2.webp" alt="step2" className="mb-3 w-20 h-20"
                                   height={ 91 } width={ 91 }/>
                            <h6 className="text-lg font-semibold">Step 2</h6>
                            <p className="text-base">Import Existing <br/> Links & Campaigns</p>
                        </div>
                        <Image src="/images/home/arrow.webp" alt="arrow" className="hidden sm:block w-20"
                               height={ 12 } width={ 87 }/>

                        <div className="flex flex-col items-center text-center">
                            <Image src="/images/home/steps/step3.webp" alt="step3" className="mb-3 w-20 h-20"
                                   height={ 91 } width={ 91 }/>
                            <h6 className="text-lg font-semibold">Step 3</h6>
                            <p className="text-base">Customize <br/> Branding & Rules</p>
                        </div>
                        <Image src="/images/home/arrow.webp" alt="arrow" className="hidden sm:block w-20"
                               height={ 12 } width={ 87 }/>

                        <div className="flex flex-col items-center text-center">
                            <Image src="/images/home/steps/step4.webp" alt="step4" className="mb-3 w-20 h-20"
                                   height={ 91 } width={ 91 }/>
                            <h6 className="text-lg font-semibold">Step 4</h6>
                            <p className="text-base">Validate & Test</p>
                        </div>
                        <Image src="/images/home/arrow.webp" alt="arrow" className="hidden sm:block w-20"
                               height={ 12 } width={ 87 }/>
                        <div className="flex flex-col items-center text-center">
                            <Image src="/images/home/steps/step5.webp" alt="step5" className="mb-3 w-20 h-20"
                                   height={ 91 } width={ 91 }/>
                            <h6 className="text-lg font-semibold">Step 5</h6>
                            <p className="text-base">Go Live Instantly</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="max-w-1400 mx-auto scroll-mt-24 px-4">
                <div className="text-center md:mt-30 mt-25">
                    <h2 className="text-3xl sm:text-4xl font-bold mb-10">ChottuLink vs Other Competitors
                    </h2>
                    <div className="table-wrapper p-0 sm:p-3">
                        <table
                            className="min-w-full border-separate border-spacing-0 bg-card border-b border-white/30 rounded-b-2xl overflow-hidden">
                            <thead>
                            <tr className="bg-gradient-to-r from-[#3369C5] to-[#F318FF] rounded-t-2xl">
                                <th className="w-1/3 h-[60px] px-2 sm:px-4 text-center align-middle text-lg sm:text-xl font-bold text-white font-primary rounded-tl-2xl">
                                    Platform
                                </th>
                                <th className="w-1/3 h-[60px] px-2 sm:px-4 text-center align-middle text-lg sm:text-xl font-bold text-white font-primary">
                                    Pros
                                </th>
                                <th className="w-1/3 h-[60px] px-2 sm:px-4 text-center align-middle text-lg sm:text-xl font-bold text-white font-primary rounded-tr-2xl">
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
                                        idx === 0 ? "font-bold bg-[var(--card-bg-primary)]" : "bg-[var(--app-bg-primary)]"
                                    } border-t border-blue-600` }
                                >
                                    <td
                                        className={ `h-[60px] px-3 py-3 text-center align-middle text-base sm:text-lg border-r border-l border-l-white/30  border-[#003950] ${
                                            idx === arr.length - 1 ? "rounded-bl-2xl" : ""
                                        }` }
                                    >
                                        { platform }
                                    </td>
                                    <td className="h-[60px] px-3 py-3 text-center align-middle text-base sm:text-lg border-r border-[#003950]">
                                        { pros }
                                    </td>
                                    <td
                                        className={ `h-[60px] px-3 py-3 text-center align-middle text-base  border-r border-white sm:text-lg border-white/30 ${
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
                </div>
            </section>

            <section className="max-w-1400 mx-auto scroll-mt-24 px-4">
                <h2 className="md:mt-25 mt-12 text-3xl sm:text-4xl font-bold text-start mb-5">FAQ</h2>
                <div className="w-full mx-auto my-8">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1" className="border-b border-[#4F4F4F]">
                            <AccordionTrigger className="text-lg font-semibold font-secondary">
                                What is your return policy?
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-quicksand text-tertiary">
                                We offer a 30-day return policy with a full refund, provided the product is in its
                                original condition.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-2" className="border-b border-[#4F4F4F]">
                            <AccordionTrigger className="text-lg font-semibold font-secondary">
                                How long does shipping take?
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-secondary text-tertiary">
                                Shipping usually takes 5–7 business days depending on your location.
                            </AccordionContent>
                        </AccordionItem>

                        <AccordionItem value="item-3" className="border-b border-[#4F4F4F]">
                            <AccordionTrigger className="text-lg font-semibold font-secondary">
                                Do you offer international shipping?
                            </AccordionTrigger>
                            <AccordionContent className="text-base font-quicksand text-tertiary">
                                Yes! We ship internationally, and delivery times vary depending on the destination
                                country.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </section>

            <GetStarted/>
        </>
    );
}
