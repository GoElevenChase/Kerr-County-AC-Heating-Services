import type { Metadata, Viewport } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import ScrollFx from "@/components/ScrollFx";
import SwitchBar from "@/components/SwitchBar";

const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald", display: "swap" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata: Metadata = {
  title: { default: "Kerr County A/C & Heating Services | Kerrville, TX", template: "%s | Kerr County A/C & Heating" },
  description: "Family-owned HVAC company serving Kerrville and the Texas Hill Country since 2014. AC and furnace repair, installation, heat pumps, mini-splits and indoor air quality.",
  icons: { icon: "/img/logo.png" },
  openGraph: { title: "Kerr County A/C & Heating Services", description: "Family-owned, locally operated HVAC in Kerrville, TX.", type: "website", images: ["/img/team.webp"] },
};
export const viewport: Viewport = { themeColor: "#087F88", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
      </head>
      <body>
        <a href="#main" className="skip">Skip to content</a>
        <ScrollFx />
        {children}
        <SwitchBar />
      </body>
    </html>
  );
}
