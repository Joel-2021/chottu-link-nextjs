import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Slider } from "@/components/ui/slider";
import Image from "next/image";
import { useState } from "react";

export default function PricingSlider() {
    const [ mau, setMau ] = useState<number>(50000);

    /**
     * Calculates Branch Pricing wrt MAU
     *
     * @returns {string}
     * ---------------------------------------------
     */
    const getPriceForBranch = (): string => {

        if ( mau <= 10000 ) {
            return '$0';
        } else if ( mau < 500000 ) {

            const total = Math.round((mau - 10000) / 1000) * 5;
            return `$${ total }`;
        } else {
            return '$2,450+';
        }
    }

    /**
     * Calculates Branch Pricing wrt MAU
     *
     * @returns {string}
     * ---------------------------------------------
     */
    const getPriceForChottuLink = (): string => {

        if ( mau <= 25000 ) {
            return '$0';
        } else if ( mau <= 75000 ) {
            return '$19';
        } else if ( mau <= 150000 ) {
            return '$39';
        } else if ( mau < 500000 ) {
            return '$99';
        } else {
            return '$99+';
        }
    }

    return (
        <div className="bg-card text-foreground p-4 rounded-2xl text-start sm:p-10 border-2 border-gray-400">
            <p className="sm:text-lg">How many monthly active users?
                <Popover>
                    <PopoverTrigger><Image src="/icons/question.svg" width="18" height="18" alt="info"
                                           className="inline-block ml-3"/></PopoverTrigger>
                    <PopoverContent side="right" sideOffset={ 8 }>ChottuLink calculates Monthly Active Users
                        (MAU) based on the number of unique
                        users who have opened the app at least once, from the 1st to the last day of
                        each month, based on UTC. The MAUs shown on chottuLink would be roughly similar
                        to the MAUs you get to see in your Google Analytics/Firebase..</PopoverContent>
                </Popover>
            </p>
            <div className="relative w-full px-3 md:px-0 pt-5">
                <div className="slider-container w-full">
                    <div id="thumb-label-container" className="thumb-label-container">
                        <div id="thumb-label" className="thumb-label"></div>
                    </div>

                    <Slider defaultValue={ [ 50000 ] } max={ 500000 } step={ 25000 } min={ 25000 }
                            onValueChange={ (value: number[]) => setMau(value[ 0 ]) }/>

                    <div
                        className="absolute left-0 right-0 md:left-3 md:right-4 mt-2 text-xs mx-3 md:mx-0"
                        style={ { bottom: "-15px" } }
                    >
                        <span className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[0%]">25k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[5.26%]">50k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[15.78%]">100k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[26.32%]">150k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[36.84%]">200k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[47.37%]">250k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[57.89%]">300k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[68.42%]">350k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[78.95%]">400k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[89.47%]">450k</span>
                        <span
                            className="absolute text-muted -translate-x-1/2 whitespace-nowrap left-[100%]">500k+</span>
                    </div>

                </div>
            </div>

            <div className="mt-14 flex justify-center items-center sm:flex-row flex-col sm:gap-10 gap-5">
                <div className="text-center flex-1">
                    <h3 className="text-xl">ChottuLink</h3><sub>(Transparent Pricing)</sub>
                    <h2 className="text-3xl sm:text-4xl mt-3">
                  <span className="font-medium">
                    <span id="chottulink-price">{ getPriceForChottuLink() }</span><span
                      className="text-lg">/month</span>
                  </span>
                    </h2>
                </div>

                <div
                    className="sm:mt-2 w-max py-3 px-4 flex flex-col justify-center items-center border border-gray-800 rounded-xl w-[150px] bg-[#001D29]">
                    <h6 className="text-lg font-medium text-card-foreground">vs</h6>
                </div>

                <div className="text-center flex-1">
                    <h3 className="text-xl">Branch.io</h3><sub>(Our Competitor)</sub>
                    <h2 className="text-3xl sm:text-4xl mt-3">
                  <span className="font-medium">
                    <span id="branch-price">{ getPriceForBranch() }</span><span className="text-lg">/month</span>
                  </span>
                    </h2>
                </div>
            </div>

            <h6 className="mt-10 font-quicksand text-muted">ChottuLink pricing doesn&#39;t
                multiply
                as your MAUs grow,
                We ensure you never get a surprise bill.</h6>
        </div>
    );
}
