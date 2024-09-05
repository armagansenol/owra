import s from "./home/home.module.scss"

import cx from "clsx"

import { DefaultLayout } from "@/layouts/default"
import { IconBgStar, IconOk, IconOwraLogo, IconStar } from "@/components/icons"
import { Img } from "@/components/utility/img"

import iceCubes from "@/public/img/ice-cubes.png"
import s1 from "@/public/img/s-1.svg"
import s2 from "@/public/img/s-2.svg"

import ice1 from "@/public/img/ice-1.png"
import ice2 from "@/public/img/ice-2.png"

import { Marquee } from "@/components/animations/marquee"
import { FormContact } from "@/components/form-contact"
import { Parallax } from "@/components/animations/parallax"
import { SliderFade } from "@/components/slider-fade"

export default function Home() {
  return (
    <DefaultLayout seo={{ title: "title", description: "description" }}>
      <section className={cx(s.intro, "flex items-center justify-center")}>
        <div className={s.logoC}>
          <IconOwraLogo />
        </div>

        <div className={s.iceC}>
          <Img src={iceCubes} alt="Ice Cubes" />
        </div>
      </section>

      <section className={cx(s.greetings, "flex flex-col items-center")}>
        <div className={s.text}>
          <h1>
            <span>Kalite</span>
            <span>ve Eğlencenin</span>
            <span>Buluşma</span>
            <span>Noktası!</span>
          </h1>

          <p>
            Owra olarak, hayatınıza kalite ve eğlence katmak için buradayız. İster serinletici bir buz, ister taze
            sıkılmış meyve suları, isterse de kahvenin eşsiz aroması olsun; her bir ürünümüzle size en iyi deneyimi
            sunmayı hedefliyoruz.
          </p>
        </div>

        <div className={cx(s.fullImg, "h-screen")}>
          <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />

          <div className={s.waveC}>
            <Img src={s1} alt="Ice Cubes" />
          </div>
        </div>

        <div className={cx(s.iceC, s.ice1)}>
          <Parallax speedY={-0.5}>
            <Img className="object-contain" src={ice1} alt="Ice Cube" />
          </Parallax>
        </div>

        <div className={cx(s.iceC, s.ice2)}>
          <Parallax speedY={-0.3}>
            <Img className="object-contain" src={ice2} alt="Ice Cube" />
          </Parallax>
        </div>
      </section>

      <section className="w-screen h-screen flex items-center justify-center">SLIDER</section>

      <section className={s.why}>
        <div className={s.marqueeC}>
          <Marquee repeat={5}>
            <div className="flex items-center">
              <h2>Neden Owra?</h2>
              <span className={s.iconC}>
                <IconStar fill="var(--algerian-colar)" />
              </span>
            </div>
          </Marquee>
        </div>

        <div className="grid grid-cols-12">
          <div className={cx(s.imgs, "col-span-7")}>
            <div className={cx(s.imgC, s.img1)}>
              <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
            </div>
            <div className={cx(s.imgC, s.img2)}>
              <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
            </div>

            <div className={cx(s.iconC, s.icon1)}>
              <Parallax speedY={-0.5}>
                <IconStar fill="var(--algerian-colar)" />
              </Parallax>
            </div>

            <div className={cx(s.iconC, s.icon2)}>
              <Parallax speedY={-1}>
                <IconStar fill="var(--algerian-colar)" />
              </Parallax>
            </div>
          </div>

          <div className={cx(s.text, "flex flex-col items-center justify-center col-span-5")}>
            <p>
              Owra ile kaliteyi ve eğlenceyi bir arada yaşayın. Hayatınıza biraz daha keyif ve neşe katmak için
              buradayız.
            </p>
            <ul>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Tazelik ve Lezzet
                </h5>
                <p>Ürünlerimiz her zaman taze ve lezzet doludur.</p>
              </li>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Güvenilirlik
                </h5>
                <p>Kalitemize ve hizmetimize güvenebilirsiniz.</p>
              </li>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Eğlenceli Deneyimler
                </h5>
                <p>Her anınıza neşe katmayı amaçlıyoruz.</p>
              </li>
              <li>
                <h5>
                  <span className={s.iconC}>
                    <IconOk />
                  </span>
                  Müşteri Memnuniyeti
                </h5>
                <p>Sizin memnuniyetiniz bizim için en büyük ödüldür.</p>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className={s.slider}>
        <div className={cx(s.sliderC, "flex items-center justify-center")}>
          <div className={s.bg}>
            <IconBgStar />
          </div>
          <SliderFade>
            <div className="flex flex-col items-center">
              <h3 className={s.title}>Owra ile Kalite</h3>
              <p className={s.description}>
                Owra olarak, her ürünümüzde kaliteyi ön planda tutuyoruz. Ürünlerimizin her bir aşamasında titizlikle
                çalışarak, en yüksek kalite standartlarını sağlıyoruz. Kullandığımız malzemelerden üretim sürecine kadar
                her detayda kaliteyi hissetmeniz için çalışıyoruz. Çünkü sizin memnuniyetiniz, bizim önceliğimiz.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className={s.title}>Owra ile Eğlence</h3>
              <p className={s.description}>
                Owra, sadece bir marka değil, aynı zamanda eğlenceli anların yaratıcısıdır. Ürünlerimizle, günlük
                rutininize biraz daha neşe ve keyif katmayı amaçlıyoruz. İster bir arkadaş buluşmasında, ister bir aile
                etkinliğinde, Owra ürünleri her anınıza renk katacak. Her yudumda eğlenceyi ve mutluluğu hissetmeniz
                için buradayız.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className={s.title}>Owra’nın Farkı</h3>
              <p className={s.description}>
                Owra, kalite ve eğlenceyi bir arada sunarak fark yaratır. Bizim için her anın özel ve değerli olduğunu
                biliyoruz. Bu yüzden, size en iyi ürünleri sunarken, aynı zamanda eğlenceli deneyimler yaşatmayı
                hedefliyoruz. Owra ürünleriyle, her anınızı unutulmaz kılın. 
              </p>
            </div>
          </SliderFade>
        </div>
      </section>

      <section className={cx(s.contact, "grid grid-cols-12")}>
        <div className={cx(s.formC, "col-span-6")}>
          <h2>Herhangi Bir Sorunuz mu Var? Yardımcı Olmaktan Mutluluk Duyarız!</h2>
          <FormContact theme="white" />
        </div>
        <div className="col-span-6">
          <div className={s.imgC}>
            <Img className="object-cover" src={"/img/sample.jpg"} alt="Sample" width={2000} height={2000} />
          </div>
        </div>
        {/* <div className={s.waveC}>
          <Img src={s2} alt="Ice Cubes" />
        </div> */}
      </section>
    </DefaultLayout>
  )
}
