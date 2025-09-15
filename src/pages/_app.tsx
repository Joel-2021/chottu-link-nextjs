import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { initializeTavasAnalytics } from "@/lib/tavas-analytics";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Suspense, useEffect } from "react";

const Layout = dynamic(() => import('../layout/layout'), {
    ssr: true,
});

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        initializeTavasAnalytics()
    }, []);

    return <Suspense fallback={null}>
        <Layout>
            <Head>
                <title>Chottu Link</title>
            </Head>
            <Component { ...pageProps } />
        </Layout>
    </Suspense>
}
