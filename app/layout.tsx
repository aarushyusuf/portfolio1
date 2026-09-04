import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  weight: ["300", "400", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const dmSans = DM_Sans({
  weight: ["300", "400", "500", "700", "800"],
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

const DESCRIPTION =
  "Aerospace Engineering student at the University of Sheffield. Liquid rocket propulsion at AVROS, solar race car design at Sheffield EcoMotorsport, and a 1,700 ft competition rocket launch.";

export const metadata: Metadata = {
  metadataBase: new URL("https://aarushyusuf.dev"),
  title: {
    default: "Aarush Yusuf | Aerospace Engineer",
    template: "%s",
  },
  description: DESCRIPTION,
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Aarush Yusuf | Aerospace Engineer",
    description: DESCRIPTION,
    url: "https://aarushyusuf.dev",
    siteName: "Aarush Yusuf",
    images: [{ url: "https://aarushyusuf.dev/og-image.png", width: 1425, height: 755 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarush Yusuf | Aerospace Engineer",
    description: DESCRIPTION,
    images: ["https://aarushyusuf.dev/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${dmSans.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var cl=document.documentElement.classList;cl.add('no-transition');var saved=localStorage.getItem('theme');var prefersDark=window.matchMedia('(prefers-color-scheme: dark)').matches;if(saved==='dark'||(saved===null&&prefersDark))cl.add('dark');requestAnimationFrame(function(){requestAnimationFrame(function(){cl.remove('no-transition')})})}catch(e){}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
