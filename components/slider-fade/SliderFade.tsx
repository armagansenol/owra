import s from "./slider-fade.module.scss"

import cx from "clsx"

import { EmblaCarouselType } from "embla-carousel"
import Autoplay from "embla-carousel-autoplay"
import Fade from "embla-carousel-fade"
import useEmblaCarousel from "embla-carousel-react"
import { ReactNode, useCallback, useEffect, useState } from "react"
import { EmblaCarousel } from "@/components/utility/embla-carousel"
import { NextButton, PrevButton } from "@/components/utility/embla-carousel/buttons"

export interface SliderFadeProps {
  children: ReactNode[]
}

export default function SliderFade(props: SliderFadeProps) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, duration: 30 }, [
    Fade(),
    Autoplay({ playOnInit: true, delay: 5000, stopOnInteraction: false }),
  ])

  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi])
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi])
  const scrollTo = useCallback((index: number) => emblaApi && emblaApi.scrollTo(index), [emblaApi])

  const onInit = useCallback((emblaApi: EmblaCarouselType) => {
    setScrollSnaps(emblaApi.scrollSnapList())
  }, [])

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev())
    setNextBtnDisabled(!emblaApi.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return

    onInit(emblaApi)
    onSelect(emblaApi)
    emblaApi.on("reInit", onInit)
    emblaApi.on("reInit", onSelect)
    emblaApi.on("select", onSelect)
  }, [emblaApi, onInit, onSelect])

  return (
    <div className={s.slider}>
      <EmblaCarousel emblaRef={emblaRef} emblaApi={emblaApi}>
        {props.children}
      </EmblaCarousel>

      <div className={cx(s.buttons, "flex items-center justify-between")}>
        <PrevButton
          className={cx(s.prev, "flex items-center justify-center cursor-pointer")}
          onClick={scrollPrev}
          disabled={prevBtnDisabled}
        >
          {/* <IconArrow fill="var(--eye-patch)" rotate={180} /> */}
          prev
        </PrevButton>

        <NextButton
          className={cx(s.next, "flex items-center justify-center cursor-pointer")}
          onClick={scrollNext}
          disabled={nextBtnDisabled}
        >
          {/* <IconArrow fill="var(--eye-patch)" /> */}
          next
        </NextButton>
      </div>
    </div>
  )
}