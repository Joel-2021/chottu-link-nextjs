import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en" className="scroll-smooth">
            <Head>
                <meta property="og:title" content="Deep Linking Done Right | Firebase Dynamic Links Alternative"/>
                <meta property="og:description"
                      content="Create seamless deep links with Chottulink, a Firebase Dynamic Links alternative for Android, iOS, and Flutter apps."/>
                <meta property="og:type" content="website"/>
                <meta property="og:url" content="https://chottulink.com"/>
                <meta property="og:image" content="https://chottulink.com/assets/og-image.jpg"/>
                <meta property="og:site_name" content="ChottuLink"/>
                <meta property="og:locale" content="en_US"/>
                <meta property="og:image:width" content="1598"/>
                <meta property="og:image:height" content="838"/>
                <meta property="og:image:alt" content="Deep Linking Done Right | Firebase Dynamic Links Alternative"/>
            </Head>
            <body className="antialiased">
            <Main/>
            <NextScript/>
            </body>
        </Html>
    );
}
