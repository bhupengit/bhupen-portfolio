import { Inter_Tight, Instrument_Serif } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const interTight = Inter_Tight({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-inter-tight",
});

const instrumentSerif = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument-serif",
});

export const metadata = {
  title: "Bhupen Joshi",
  description:
    "Hi, I'm Bhupen Joshi. I build high-performance, scalable mobile applications with React Native, Flutter, and Android. Available for freelance and full-time opportunities.",
  openGraph: {
    url: "https://bhupen.vercel.app/",
    siteName: "Bhupen Joshi Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/open-graph.png",
        width: 1200,
        height: 630,
        alt: "Bhupen Joshi",
      },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${interTight.variable} ${instrumentSerif.variable} antialiased font-sans`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {" "}
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
