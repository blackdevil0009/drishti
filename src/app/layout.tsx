import type { Metadata, Viewport } from 'next';
import { Inter, Orbitron } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import 'leaflet/dist/leaflet.css';

const inter = Inter({ subsets: ['latin'] });
const orbitron = Orbitron({ subsets: ['latin'], variable: '--font-orbitron' });

export const viewport: Viewport = {
    themeColor: '#ffffff',
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
};

export const metadata: Metadata = {
    metadataBase: new URL('https://drishti.org'), // Fallback base URL
    title: 'Track Mobile Number Location | Drishti',
    description: 'Find current location of any Indian mobile number. Check if your personal data, phone number, or email has been compromised in a data leak. Free, fast, and secure.',
    keywords: ['Track Mobile Number', 'Mobile Number Tracker', 'Drishti Checker', 'Call Bomber', 'Check data breach', 'Phone number location', 'Email leak checker'],

    icons: {
        icon: [
            { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
            { url: '/favicon.svg', type: 'image/svg+xml' },
            { url: '/favicon.ico' },
        ],
        shortcut: '/favicon.ico',
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180' },
        ],
    },
    manifest: '/site.webmanifest',

    openGraph: {
        title: 'Drishti - Free Mobile Number Tracker & Breach Checker',
        description: 'Track any Indian mobile number location and check for data leaks instantly. Protect your privacy with Drishti.',
        url: 'https://drishti.org',
        siteName: 'Drishti',
        images: [
            {
                url: '/yt-size-img.jpg',
                width: 1280,
                height: 720,
                alt: 'Drishti Mobile Tracker',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    twitter: {
        card: 'summary_large_image',
        title: 'Drishti - Mobile Tracker & Breach Checker',
        description: 'Track Indian mobile number locations and check for data breaches. Simple, fast, and free.',
        images: ['/yt-size-img.jpg'],
    },

    appleWebApp: {
        title: 'Drishti',
        statusBarStyle: 'default',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                {/* Preconnect to Map Tile Servers for Performance */}
                <link rel="preconnect" href="https://a.tile.openstreetmap.org" />
                <link rel="preconnect" href="https://b.tile.openstreetmap.org" />
                <link rel="preconnect" href="https://c.tile.openstreetmap.org" />

                {/* Manual favicon links as requested, though metadata handles most */}
                <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
                <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
                <link rel="shortcut icon" href="/favicon.ico" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="apple-mobile-web-app-title" content="Drishti" />
                <link rel="manifest" href="/site.webmanifest" />
            </head>
            <body className={`${inter.className} ${orbitron.variable}`}>
                {children}

                {/* Google Analytics */}
                <Script
                    src="https://www.googletagmanager.com/gtag/js?id=G-071CLQ0DJV"
                    strategy="afterInteractive"
                />
                <Script id="google-analytics" strategy="afterInteractive">
                    {`
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());

                        gtag('config', 'G-071CLQ0DJV');
                    `}
                </Script>

                {/* SEO Schema Markup */}
                <Script id="schema-org" strategy="beforeInteractive" type="application/ld+json">
                    {`
                        {
                            "@context": "https://schema.org",
                            "@graph": [
                                {
                                    "@type": "Organization",
                                    "name": "Drishti",
                                    "url": "https://drishti.org",
                                    "logo": "https://drishti.org/favicon-96x96.png",
                                    "sameAs": [
                                        "https://t.me/drishtiorg"
                                    ]
                                },
                                {
                                    "@type": "WebSite",
                                    "name": "Drishti",
                                    "url": "https://drishti.org",
                                    "potentialAction": {
                                        "@type": "SearchAction",
                                        "target": {
                                            "@type": "EntryPoint",
                                            "urlTemplate": "https://drishti.org/?q={search_term_string}"
                                        },
                                        "query-input": "required name=search_term_string"
                                    }
                                },
                                {
                                    "@type": "FAQPage",
                                    "mainEntity": [
                                        {
                                            "@type": "Question",
                                            "name": "How can I track a mobile number location?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Simply enter the 10-digit mobile number in the search box on Drishti. Our system scans public records to provide the current location, circle, and carrier details instantly."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "Is Drishti free to use?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "Yes, Drishti is a free tool to track mobile number locations and check for data breaches. We provide basic details at no cost."
                                            }
                                        },
                                        {
                                            "@type": "Question",
                                            "name": "How do I remove my personal data from Drishti?",
                                            "acceptedAnswer": {
                                                "@type": "Answer",
                                                "text": "We respect your privacy. You can use our 'Hide My Data' feature to instantly remove your mobile number or email from our search results anytime."
                                            }
                                        }
                                    ]
                                }
                            ]
                        }
                    `}
                </Script>
            </body>
        </html>
    );
}
