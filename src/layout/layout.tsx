import ChatwootWidget from "@/components/chatwoot-widget";
import Footer from "@/components/footer";
import Header from "@/components/header";
import { Toaster } from "@/components/ui/sonner";

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex flex-col items-center">
            <Header/>
            <main className="flex-1 w-full pt-20">{ children }</main>
            <Toaster position="top-right" richColors={ true }/>
            <ChatwootWidget/>
            <Footer/>
        </div>
    );
}
