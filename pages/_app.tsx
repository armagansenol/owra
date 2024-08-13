import "@/styles/global.scss"
import "@/styles/globals.css"
import type { AppProps } from "next/app"

import { Dela_Gothic_One } from "next/font/google"

const delaGothicOne = Dela_Gothic_One({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-dela-gothic-one",
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between ${delaGothicOne.variable}`}>
      <Component {...pageProps} />
    </div>
  )
}
