import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsContents, TabsList, TabsTrigger } from "@/components/ui/shadcn-io/tabs";
import Image from "next/image";

export default function FeaturesSection() {
    // flex flex-wrap md:flex-nowrap
    return (
        <section id="features" className="sm:max-w-1400 my-24 text-center mx-auto px-4 scroll-mt-25">
            <h2 className="text-5xl font-bold mb-3">
                Powerful Features
            </h2>
            <p className="text-xl max-w-[80%] mx-auto mb-12">
                From effortless migration and real-time tracking to customizable branding and automation, every tool
                is built to give you control without complexity. With enterprise-grade reliability and seamless
                scalability, you get everything you need in one powerful platform.
            </p>
            <Tabs defaultValue={ String(0) } className="">
                <ScrollArea className="w-full whitespace-nowrap">
                    <TabsList activeClassName="rounded-3xl"
                              className="md:w-[95%] w-full mx-auto  bg-card inline-flex gap-2 md:p-4 p-3 rounded-4xl relative h-20 md:h-25">

                        { features.map((feature, i) => (
                            <TabsTrigger key={ i } aria-label={feature.title}
                                         value={ String(i) }
                                         className="grow w-fit rounded-3xl font-secondary text-foreground px-5 text-sm md:text-base sm:text-lg lg:text-xl
               data-[state=active]:text-[#8F73FF] data-[state=active]:font-bold data-[state=active]:font-primary">
                                { feature.title }
                            </TabsTrigger>
                        )) }
                    </TabsList>
                    <ScrollBar orientation="horizontal" />
                </ScrollArea>


                <TabsContents className="mx-1 mb-1 mt-2 rounded-sm h-full bg-background">
                    { features.map((feature, i) => (
                        <TabsContent value={ String(i) } className="bg-[#684FCE] rounded-3xl p-2 md:p-8" key={ i }>
                            <div className="flex gap-6 md:flex-row  flex-col-reverse items-center justify-between text-start p-8">
                                <div className="md:w-1/2 w-full">
                                    <h6 className="text-3xl font-semibold mb-3">
                                        { feature.heading }
                                    </h6>
                                    <p className="font-secondary text-lg">
                                        { feature.description }
                                    </p>
                                </div>
                                <Image src={feature.image} alt="features" height={ 361 }
                                       width={ 449 } className="sm:w-auto w-[300px]"/>
                            </div>
                        </TabsContent>
                    )) }
                </TabsContents>
            </Tabs>
        </section>
    );
}


type Feature = {
    title: string
    heading: string
    description: string
    image: string
}

const features: Feature[] = [
    {
        title: "Effortless Switch",
        heading: "Effortless Switch from Firebase Dynamic Links to Our Solution",
        description:
            "Switching from Firebase Dynamic Links to our solution is quick, seamless, and hassle-free. No complex setup, no disruptions—just a better, more flexible deep linking experience.",
        image: "/images/home/features/feature1.webp",
    },
    {
        title: "Custom domain Support",
        heading: "Custom domain support",
        description:
            "Custom domain support allows you to use your own branded domain (e.g., links.yourbrand.com) instead of a generic third-party URL for deep linking. This enhances brand recognition, trust, and user engagement while ensuring a seamless linking experience.",
        image: "/images/home/features/feature2.webp",
    },
    {
        title: "Rest APIs Support",
        heading: "Rest APIs Support",
        description:
            "Easily integrate and automate deep linking with REST API support for a seamless, scalable experience. Our APIs allow you to create, manage, and track deep links programmatically with full flexibility.",
        image: "/images/home/features/feature3.webp",
    },
    {
        title: "Advanced Analytics for Deep Linking",
        heading: "Advanced Analytics for Deep Linking",
        description:
            "Gain deep insights into user behavior and optimize your marketing strategies with Advanced Analytics. Track, measure, and improve your deep linking performance in real-time.",
        image: "/images/home/features/feature4.webp",
    },
]
