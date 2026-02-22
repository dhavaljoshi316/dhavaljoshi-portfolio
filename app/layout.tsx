import dynamic from "next/dynamic"

import "./globals.css";
import { Inter, Orbitron, Sora } from "next/font/google"
import ThemeProvider from "@/components/layout/ThemeProvider";
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer";
import ScrollProgress from "@/components/ui/SmallProgress";
import FloatingCVButton from "@/components/ui/FloatingCVButton";
import VisitorCounter from "@/components/ui/VisitorCounter";
const Background = dynamic(
  () => import("@/components/layout/Background"),
  { ssr: true }
)

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
})

const orbitron = Orbitron({
  subsets: ["latin"],
  variable: "--font-heading",
})

export const metadata = {
  title: "Dhaval Joshi",
  description: "Fullstack and React Native Developer Portfolio"
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${orbitron.variable}`}>

      <body>
        <ThemeProvider>
          <Background />
          <ScrollProgress  />
          <Navbar />
          <div className="w-full">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
              {children}
            </div>
          </div>
          <Footer />
          <FloatingCVButton/>
        </ThemeProvider>
      </body>
    </html>
  )
}
