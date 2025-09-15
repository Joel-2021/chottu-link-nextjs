import { CONFIG } from "@/config/config";

declare global {
    interface Window {
        posthog?: {
            init: (
                apiKey: string ,
                options: {
                    api_host: string;
                    autocapture: boolean;
                    loaded?: (instance: PosthogInstance) => void;
                }
            ) => void;
        };
        tavas?: PosthogInstance;
    }
}

// Define a minimal interface for Posthog instance
interface PosthogInstance {
    capture: (eventName: string, properties?: Record<string, unknown>) => void;
}

export function initializeTavasAnalytics() {
    if (typeof window === "undefined" || typeof document === "undefined") return;

    const loadScript = () => {
        if (!CONFIG.analytics.tavas.enabled) return;

        const script = document.createElement("script");
        script.src = `${CONFIG.analytics.tavas.host}/static/array.js`;
        script.async = true;
        script.defer = true;

        script.onload = () => {
            if (window.posthog) {
                window.posthog.init(CONFIG.analytics.tavas.apiKey!, {
                    api_host: CONFIG.analytics.tavas.host!,
                    autocapture: false,
                    loaded: (posthogInstance: PosthogInstance) => {
                        console.log("Tavas Analytics initialized");
                        window.tavas = posthogInstance;
                    },
                });
            }
        };

        document.head.appendChild(script);
    };

    if ("requestIdleCallback" in window) {
        window.requestIdleCallback(() => loadScript());
    } else {
        setTimeout(loadScript, 2000);
    }
}

export function trackEvent(eventName: string, properties: Record<string, never> = {}) {
    if ( typeof window === 'undefined' ) return; // Ensure client-side

    // Track with Tavas Analytics
    if ( window.tavas ) {
        window.tavas.capture(eventName, {
            page: 'pricing',
            ...properties
        });
        console.log(`Tavas event tracked: ${ eventName }`, properties);
    }
}
