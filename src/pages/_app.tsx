import "@/styles/globals.css";
import Layout from "@/layout/layout";
import type { AppProps } from "next/app";
import { initializeTavasAnalytics } from "@/lib/tavas-analytics";
import Head from "next/head";
import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {

    useEffect(() => {
        initializeTavasAnalytics()
    }, []);

    return <Layout>
        <Head>
            <title>Chottu Link</title>
        </Head>
        <Component { ...pageProps } /> </Layout>;
}
