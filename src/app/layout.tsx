import type { Metadata } from "next";
import { Work_Sans } from "next/font/google";
import "./globals.css";
import { ReCaptchaProvider } from "next-recaptcha-v3";

const workSans = Work_Sans({
  variable: "--font-work-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bluehouseworld",
  description: "We are re-defining the way you shop online.",
  openGraph: {
    images: "/Bluehouseworld-og.jpg"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${workSans.variable} antialiased`}
      >
        <ReCaptchaProvider reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY} useEnterprise>

        {children}
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
