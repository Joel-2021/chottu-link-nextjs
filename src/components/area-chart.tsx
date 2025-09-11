"use client"

import {
    AreaChart as ReAreaChart,
    Area,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts"

import { ChartConfig, ChartContainer } from "@/components/ui/chart"

const chartData = [
    { day: "Mon", desktop: 120, mobile: 60 },
    { day: "Tue", desktop: 200, mobile: 110 },
    { day: "Wed", desktop: 150, mobile: 90 },
    { day: "Thu", desktop: 250, mobile: 160 },
    { day: "Fri", desktop: 300, mobile: 180 },
    { day: "Sat", desktop: 220, mobile: 140 },
    { day: "Sun", desktop: 270, mobile: 200 },
]

const chartConfig = {
    desktop: {
        label: "Desktop",
        color: "#2563eb",
    },
    mobile: {
        label: "Mobile",
        color: "#60a5fa",
    },
} satisfies ChartConfig

export function AreaChart() {
    return (
        <div className="w-full rounded-2xl bg-background shadow-lg p-3 border border-[#1e293b]">
            <div className="border border-[#1e293b] rounded-2xl">
                <div className="border-b border-[#1e293b] px-6 py-4">
                    <h2 className="text-lg font-semibold text-white">
                        Deep Link Performance
                    </h2>
                </div>

                <div className="p-6">
                    <ChartContainer config={ chartConfig } className="min-h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <ReAreaChart
                                data={ chartData }
                                margin={ { top: 0, right: 0, left: -30, bottom: 0 } }
                            >
                                <defs>
                                    <linearGradient id="colorDesktop" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2563eb" stopOpacity={ 0.8 }/>
                                        <stop offset="95%" stopColor="#2563eb" stopOpacity={ 0 }/>
                                    </linearGradient>
                                    <linearGradient id="colorMobile" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#60a5fa" stopOpacity={ 0.8 }/>
                                        <stop offset="95%" stopColor="#60a5fa" stopOpacity={ 0 }/>
                                    </linearGradient>
                                </defs>

                                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={ false }/>

                                <XAxis
                                    dataKey="day"
                                    tick={ { fill: "#cbd5e1" } }
                                    interval={ 0 }
                                    padding={ { left: 0, right: 0 } } // removes side gaps
                                />


                                <YAxis
                                    tick={ { fill: "#cbd5e1" } }
                                    domain={ [ "dataMin", "dataMax" ] } // tight fit
                                />


                                <Tooltip
                                    contentStyle={ {
                                        backgroundColor: "#1e293b",
                                        border: "none",
                                        color: "#f1f5f9",
                                    } }
                                    labelStyle={ { color: "#f1f5f9" } }
                                />


                                <Area
                                    type="monotone"
                                    dataKey="desktop"
                                    stroke="#2563eb"
                                    fill="url(#colorDesktop)"
                                    strokeWidth={ 2 }
                                    activeDot={ { r: 6 } }
                                />
                                <Area
                                    type="monotone"
                                    dataKey="mobile"
                                    stroke="#60a5fa"
                                    fill="url(#colorMobile)"
                                    strokeWidth={ 2 }
                                    activeDot={ { r: 6 } }
                                />
                            </ReAreaChart>
                        </ResponsiveContainer>
                    </ChartContainer>
                </div>
            </div>
        </div>
    )
}
