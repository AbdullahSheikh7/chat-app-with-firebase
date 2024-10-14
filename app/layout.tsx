import type { Metadata } from "next";
import localFont from "next/font/local";
import '@/css/index.scss'
import favicon from '@/favicon.ico'

const outfitRegular = localFont({
  src: "./fonts/Outfit-Regular.ttf",
  variable: "--font-regular",
  weight: "100 900",
});

const outfitBold = localFont({
  src: "./fonts/Outfit-Bold.ttf",
  variable: "--font-bold",
  weight: "100 900",
});

const outfitSemiBold = localFont({
  src: "./fonts/Outfit-SemiBold.ttf",
  variable: "--font-semibold",
  weight: "100 900",
});

const outfitExtraBold = localFont({
  src: "./fonts/Outfit-ExtraBold.ttf",
  variable: "--font-extrabold",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "WellChat",
  description: "Next-level chat application",
  icons: [{ rel: "icon", url: favicon.src }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body style={{ height: "100vh", width: "100vw", overflow: "hidden" }} className={`${outfitRegular.variable} ${outfitBold.variable} ${outfitSemiBold.variable} ${outfitExtraBold.variable}`}>
        {children}
      </body>
    </html>
  );
}
