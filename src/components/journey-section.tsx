import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "@/components/ui/shadcn-io/tabs";
import Image from "next/image";

export default function JourneySection() {
    return (
        <section id="journey" className="sm:max-w-1400 mt-12 mb-12 text-center mx-auto px-4 scroll-mt-25">
            <h2 className="text-5xl font-bold mb-3">
                One smart link for every journey
            </h2>
            <Tabs defaultValue={ String(0) } className="">
                <ScrollArea className="w-full whitespace-nowrap">
                    <TabsList activeClassName="border-white border-b-3 rounded-none"
                              className="w-full inline-flex gap-2 p-4 rounded-4xl bg-transparent relative h-auto md:h-25">
                        <div className="absolute h-[1px] bg-tertiary w-full bottom-[17px] left-0 right-0"></div>
                        { journeys.map((journey, i) => (
                            <TabsTrigger
                                key={ i } aria-label={journey.title}
                                value={ String(i) }
                                className="shrink-0 min-w-[140px] font-secondary text-tertiary text-sm md:text-base sm:text-lg lg:text-xl"
                            >
                                { journey.title }
                            </TabsTrigger>
                        )) }
                    </TabsList>
                    <ScrollBar orientation="horizontal"/>
                </ScrollArea>
                <TabsContents className="mx-1 mb-1 mt-2 h-full bg-transparent">
                    { journeys.map((feature, i) => (
                        <TabsContent value={ String(i) }
                                     className="bg-gradient-to-b from-[#001219] to-[#002635] shadow px-2 md:px-8 md:pb-0 rounded-3xl"
                                     key={ i }>
                            <div className="flex gap-6 md:flex-row flex-col items-start justify-between text-start p-0">
                                <div className="w-[80%] p-8">
                                    <h6 className="text-3xl font-semibold mb-3">
                                        { feature.heading }
                                    </h6>
                                    <p className="font-secondary text-lg"
                                       dangerouslySetInnerHTML={ { __html: feature.description } }></p>
                                </div>
                                <Image src={ `/images/home/journey/tab${ i + 1 }.webp` } alt="features" height={ 646 }
                                       width={ 588 } className="w-[300px] md:w-[500px] mx-auto"/>
                            </div>
                        </TabsContent>
                    )) }
                </TabsContents>
            </Tabs>
        </section>
    );
}


type Journey = {
    title: string
    heading: string
    description: string
}

const journeys: Journey[] = [
    {
        title: "Deferred deep linking",
        heading: "Deferred deep linking",
        description: `Land users directly on in-app content after app installation, not the home page.<br/>
No more losing customers due to unnecessary steps.`,
    },
    {
        title: "Web to App",
        heading: "Web to App",
        description: `Convert web traffic to app users, seamlessly landing them on specific pages within the app with web-to-app CTA buttons like “Open in app”.`,
    },
    {
        title: "CRM to App",
        heading: "CRM to App",
        description: `Embed DeepLinks in your email, SMS, and push notifications, and direct users straight to the specific app page.<br/>
Whether it’s a personalized offer or a follow-up message, your users will land directly where you want them.`,
    },
    {
        title: "Offline to app",
        heading: "Offline to App",
        description: `Embed DeepLinks in your email, SMS, and push notifications, and direct users straight to the specific app page.<br/>
Whether it’s a personalized offer or a follow-up message, your users will land directly where you want them.`,
    },
    {
        title: "Social to App",
        heading: "Social to App",
        description: `With ChottuLinks Deferred Deep Linking, users are sent directly to in-app content after installation—not the home page.<br/>
No more losing customers due to unnecessary steps.`,
    },
    {
        title: "Influencer & affiliate",
        heading: "Influencer & affiliate",
        description: `Distribute short links and QR codes to each influencer so that you can analyze which performs the best.`,
    },
    {
        title: "Referral",
        heading: "Referral",
        description: `Land users directly on in-app content after app installation, not the home page.<br/>
No more losing customers due to unnecessary steps.`,
    },
]


