import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/providers/ThemeProvider";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ricardo Olarte | Software Engineer",
  description:
    "Professional Software Engineer specializing in modern web development, blockchain, and innovative solutions. View my portfolio of projects and skills.",
  metadataBase: new URL("https://raop.dev"),
  openGraph: {
    title: "Ricardo Olarte | Software Engineer",
    description:
      "Professional Software Engineer specializing in modern web development, blockchain, and innovative solutions. View my portfolio of projects and skills.",
    url: "https://raop.dev",
    siteName: "Ricardo Olarte Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Ricardo Olarte - Software Engineer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ricardo Olarte | Software Engineer",
    description:
      "Professional Software Engineer specializing in modern web development, blockchain, and innovative solutions. View my portfolio of projects and skills.",
    images: ["/og-image.png"],
    creator: "@raop155",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/public/favicon.ico",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
          forcedTheme="dark"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
