import s from "./default-layout.module.scss"

import cx from "clsx"
import { useRouter } from "next/router"
import { ReactNode } from "react"

import { CustomHead } from "@/components/utility/custom-head"

import { baseUrl } from "@/lib/constants"
import { Seo } from "@/types"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

type Props = {
  children: ReactNode
  seo: Seo
  theme?: "dark" | "light"
}

const DefaultLayout = ({ children, seo, theme = "light" }: Props) => {
  const router = useRouter()

  return (
    <div className={cx(s.defaultLayout, `theme-${theme}`, [s[theme]])}>
      <CustomHead
        {...(seo &&
          Object.assign(seo, {
            canonical: `${baseUrl}${router.pathname}`,
            keywords: ["ice"],
          }))}
      />
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export { DefaultLayout }
