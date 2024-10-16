import s from "./slider-products.module.scss"

import { OrthographicCamera } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"
import cx from "clsx"
import { useEffect, useRef, useState } from "react"

import Float from "@/components/animations/float"
import { SliderFade } from "@/components/slider-fade"
import { Img } from "@/components/utility/img"
import { Vortex } from "@/components/vortex"
import { IconArrow } from "../icons"
import { Link } from "../utility/link"

export interface SliderProductsProps {}

export default function SliderProducts(props: SliderProductsProps) {
  const seqs = {
    iceGlass: "ice-glass",
    boba: "boba",
    // coffee: "coffee",
  }

  const [currentSlide, setCurrentSlide] = useState(0)

  const handleSelectSlide = (index: number) => {
    setCurrentSlide(index)
    // Do something with the selected slide index here
  }

  return (
    <div className={cx(s.sliderProducts, "w-full h-full flex items-center justify-center")}>
      <div className={cx(s.sliderC, "z-20")}>
        <SliderFade onSelectSlide={handleSelectSlide} autoplay>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float amountY={[-5, 5]}>
              <div className={s.imgC}>{<Sequence type={seqs.iceGlass} />}</div>
            </Float>
            <div className={s.text}>
              <h3 className={s.title}>Chill Owra</h3>
              <p className={s.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam a obcaecati quidem delectus
                voluptatem.
              </p>
            </div>
          </div>
          <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float amountY={[-7, 7]}>
              <div className={s.imgC}>{<Sequence type={seqs.boba} />}</div>
            </Float>
            <div className={s.text}>
              <h3 className={s.title}>Owra Boba</h3>
              <p className={s.description}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illum magnam a obcaecati quidem delectus
                voluptatem voluptates.
              </p>
            </div>
          </div>
          {/* <div className={cx(s.slide, "flex flex-col items-center")}>
            <Float>
              <div className={s.imgC}>{<Sequence type={seqs.coffee} />}</div>
            </Float>
            <h3 className={s.title}>Owra’nın Farkı</h3>
          </div> */}
        </SliderFade>
      </div>
      <div className="absolute top-0 left-0 right-0 bottom-0 z-0">
        <Canvas dpr={2}>
          <Vortex currentItem={currentSlide} />
          <OrthographicCamera makeDefault zoom={50} near={0.1} far={1000} position={[0, 0, 100]} />
        </Canvas>
      </div>
      <Link className={cx(s.cta, "absolute bottom-5 right-5 flex items-center gap-2 cursor-pointer")} href="/showcase">
        <span>Experience in 3D</span>
        <span className={s.iconC}>
          <div className="w-full h-full">
            <IconArrow fill="var(--science-blue)" />
          </div>
        </span>
      </Link>
    </div>
  )
}

export function Sequence({ type }: { type: unknown }) {
  const PHASE = 22

  const [currentItem, setCurrentItem] = useState(0)

  const intervalRef = useRef<NodeJS.Timeout | null>(null) // Reference to store the interval ID

  const startLoop = () => {
    if (intervalRef.current) return

    intervalRef.current = setInterval(() => {
      setCurrentItem((prev) => (prev + 1) % PHASE)
    }, 100)
  }

  const stopLoop = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current)
      intervalRef.current = null
    }
  }

  useEffect(() => {
    return () => stopLoop()
  }, [])

  return (
    <div className="w-full h-full relative" onMouseEnter={startLoop} onMouseLeave={stopLoop}>
      {Array.from({ length: PHASE }).map((_, i) => {
        return (
          <div
            className={cx(s.item, "absolute top-0 left-0 bottom-0 right-0", {
              [s.active]: currentItem === i,
            })}
            key={i}
          >
            <Img
              priority={true}
              className="object-contain"
              alt="Product Visual"
              src={`/img/sequences/${type}/s_${i}.png`}
              height={800}
              width={800}
            />
          </div>
        )
      })}
    </div>
  )
}
