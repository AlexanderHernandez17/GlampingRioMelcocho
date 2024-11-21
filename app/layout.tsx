import "@/styles/globals.css";
import { Metadata, Viewport } from "next";
import clsx from "clsx";
import { Providers } from "./providers";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import { FaWhatsapp, FaInstagram, FaFacebook } from 'react-icons/fa';

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/logoRioMelcocho.png",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col h-screen">
            <Navbar />
            <main className="flex-grow">
              {children}
            </main>


            <footer className="w-full flex items-center justify-between py-3 px-6 bg-green-400 mt-14">
              <div className="flex items-center">
                <img src="/logoRioMelcocho.png" alt="Logo" className="h-20" />
              </div>

              <div className="flex space-x-6">
                <a
                  href="https://wa.me/573146428400"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-green-500"
                >
                  <FaWhatsapp size={28} />
                </a>

                <a
                  href="https://www.instagram.com/glampingriomelcocho?igsh=MXNhazVheGo2ZGs1Mg=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-pink-500"
                >
                  <FaInstagram size={28} />
                </a>

                <a
                  href="https://web.facebook.com/people/Glamping-Rio-Melcocho/100083087871317/?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-blue-500"
                >
                  <FaFacebook size={28} />
                </a>
              </div>
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}