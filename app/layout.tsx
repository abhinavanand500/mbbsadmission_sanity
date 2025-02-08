import type { Metadata } from "next";
import Head from "next/head";
import { Inter } from "next/font/google";
import { getNavbarData, getHomePageData } from "@/lib/getHomePageData";
import "./globals.css";
import GoogleAnalytics from "./components/GoogleAnalytics";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MBBS Admission in Abroad",
  description:
    "MBBS Admission Abroad with New-Lyf Overseas Consultants. Study MBBS in Russia, Ukraine, or the Philippines at MCI-approved universities at low costs.",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const navBarData = await getNavbarData();
  return (
    <html lang="en">
      <Head>
        <title>MBBS Admissions Abroad - Top Universities</title>
        <meta
          name="description"
          content="Find the best MBBS admissions in top universities abroad."
        />
        <meta property="og:title" content="MBBS Admissions Abroad" />
        <meta
          property="og:description"
          content="Find the best MBBS admissions in top universities abroad."
        />
        <meta
          name="ahrefs-site-verification"
          content="22807d65778b510ff96fcf197a3b2e305768c3c37972f2ac7050e3c7dc571725"
        />
        <meta
          name="google-site-verification"
          content="yA8gYXl26PM93Ah-DTbs-lSmLhFolE91oq9mmWU6fvE"
        />
        <meta
          name="google-site-verification"
          content="q3PaxiZB_fbKGHiJuY6EKAd5Z2Egpt7ec4dkG5Hevrw"
        />
        <meta
          property="og:url"
          content="https://www.mbbsadmissionsinabroad.com"
        />
        <link rel="canonical" href="https://www.mbbsadmissionsinabroad.com" />
        <meta property="og:type" content="website" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "MBBS Admissions Abroad",
              url: "https://www.mbbsadmissionsinabroad.com",
              sameAs: [
                "https://www.facebook.com/mbbsadmissions",
                "https://twitter.com/mbbsadmissions",
              ],
            }),
          }}
        />
        <link rel="canonical" href="https://www.mbbsadmissionsinabroad.com/" />
        <meta name="robots" content="index, follow" />

        {/* Hreflang Tags */}
        <link
          rel="alternate"
          href="https://www.mbbsadmissionsinabroad.com/"
          hrefLang="en"
        />
        <link
          rel="alternate"
          href="https://www.mbbsadmissionsinabroad.com//es"
          hrefLang="es"
        />
        <link
          rel="alternate"
          href="https://www.mbbsadmissionsinabroad.com//fr"
          hrefLang="fr"
        />

        {/* Open Graph Meta Tags for Facebook and YouTube */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="MBBS Abroad - Admissions, Guidance, and Information"
        />
        <meta
          property="og:description"
          content="Discover valuable insights and tips for MBBS admissions abroad on our official channel."
        />
        <meta
          property="og:url"
          content="https://www.youtube.com/channel/UCGdRZ74SghrH9K8BE5U0zVw"
        />
        <meta
          property="og:image"
          content="https://www.mbbsadmissionsinabroad.com//path-to-your-thumbnail.jpg"
        />
        <meta
          property="og:image:alt"
          content="MBBS Abroad - Admissions and Guidance"
        />
        <meta property="og:site_name" content="MBBS Abroad" />

        {/* Twitter Cards Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@_mbbsabroad" />
        <meta
          name="twitter:title"
          content="MBBS Abroad - Admissions, Guidance, and Information"
        />
        <meta
          name="twitter:description"
          content="Explore our channel for MBBS admission guidance abroad, updates, and tips for aspiring medical students."
        />
        <meta
          name="twitter:image"
          content="https://www.mbbsadmissionsinabroad.com//path-to-your-thumbnail.jpg"
        />
        <meta
          name="twitter:image:alt"
          content="MBBS Abroad - Admissions and Guidance"
        />

        {/* Structured Data: Organization and Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "MBBS Abroad Admissions",
              url: "https://www.mbbsadmissionsinabroad.com/",
              logo: "https://www.mbbsadmissionsinabroad.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FNew-Lyf%20Logo.f153ed67.png&w=256&q=75",
              description:
                "Expert guidance on MBBS admissions abroad, including detailed information and updates for aspiring medical students.",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Main Street",
                addressLocality: "City Name",
                addressRegion: "State Name",
                postalCode: "123456",
                addressCountry: "Country Name",
              },
              telephone: "+1234567890",
              sameAs: [
                "https://twitter.com/_mbbsabroad",
                "https://www.facebook.com/pg/mbbsadmissionsinabroad/",
                "https://www.youtube.com/channel/UCGdRZ74SghrH9K8BE5U0zVw",
              ],
            }),
          }}
        />

        {/* Google Analytics */}
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-XXXXXXX-X"
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'UA-XXXXXXX-X');
            `,
          }}
        />

        {/* Facebook Pixel */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', 'YOUR_PIXEL_ID');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
          />
        </noscript>

        {/* YouTube Channel Activity (X Cards) */}
        <meta
          property="og:video"
          content="https://www.youtube.com/channel/UCGdRZ74SghrH9K8BE5U0zVw"
        />
        <meta property="og:video:type" content="text/html" />
        <meta property="og:video:width" content="1280" />
        <meta property="og:video:height" content="720" />
        <meta
          property="og:video:secure_url"
          content="https://www.youtube.com/channel/UCGdRZ74SghrH9K8BE5U0zVw"
        />
      </Head>
      <body className="dark:bg-[#1A1C29] bg-white">
        <Navbar navBarData={navBarData.result} />
        <GoogleAnalytics GA_TRACKING_ID="G-YR4Q895Z3R" />
        <div className="mt-20">{children}</div>
        <Footer navBarData={navBarData.result} />
      </body>
    </html>
  );
}
