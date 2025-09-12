import ChatwootWidget from "@/components/chatwoot-widget";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/sonner";

import { Poppins, Quicksand } from 'next/font/google'

const poppins = Poppins({
    subsets: ['latin'],
    weight: [
        '100','200','300','400','500','600','700','800','900'
    ],
    style: ['normal','italic'],
    display: 'swap', // prevents render-blocking
})

const quicksand = Quicksand({
    subsets: ['latin'],
    weight: ['300','400','500','600','700'],
    display: 'swap',
})

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <div className={ `min-h-screen flex flex-col items-center ${ poppins.className }` } style={ {
                '--font-poppins': poppins.style.fontFamily,
                '--font-quicksand': quicksand.style.fontFamily,
            } as React.CSSProperties }>
                <Header/>
                <main className="flex-1 w-full pt-20">{ children }</main>
                <Toaster position="top-right" richColors={ true }/>
                <ChatwootWidget/>
                <Footer/>
            </div>
        </ThemeProvider>
    );
}
