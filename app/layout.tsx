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

export const metadata: Metadata = {
  title: "Aarush Yusuf — Aerospace Engineer",
  description: "First-year Aerospace Engineering student at the University of Sheffield.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Aarush Yusuf — Aerospace Engineer",
    description: "First-year Aerospace Engineering student at the University of Sheffield.",
    url: "https://aarushyusuf.dev",
    siteName: "Aarush Yusuf",
    images: [{ url: "https://aarushyusuf.dev/og-image.png", width: 1425, height: 755 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aarush Yusuf — Aerospace Engineer",
    description: "First-year Aerospace Engineering student at the University of Sheffield.",
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
