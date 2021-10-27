import { useRef } from 'react'
import Layout from '@/components/layout'
import Footer from '@/components/footer'
import Container from '@/components/container'
import ButtonLink from '@/components/buttonLink'
import { fade, reveal } from '@/helpers/transitions'
import { LocomotiveScrollProvider } from 'react-locomotive-scroll'
import { LazyMotion, domAnimation, m } from 'framer-motion'
import { NextSeo } from 'next-seo'
import NavSection from '@/components/nav-section'
import Header from '@/components/header'

export default function Home() {
  const containerRef = useRef(null)

  return (
    <Layout>
      <NextSeo title="Home" />
      
      <LocomotiveScrollProvider
        options={{ smooth: true, lerp: 0.05 }}
        containerRef={containerRef}
        watch={[]}
      >
        <div data-scroll-container ref={containerRef} id="scroll-container">
          <div data-scroll-section>            
            <Header />

            <LazyMotion features={domAnimation}>
              <m.div
                initial="initial"
                animate="enter"
                exit="exit"
              >
                {/* pt-[108px] md:pt-[136px] xl:pt-[156px] */}
                <m.main variants={fade} className="mb-12 md:mb-16 xl:mb-24 md:pt-0">
                  <section className="md:min-h-screen flex flex-wrap md:items-center mb-12 md:mb-24 xl:mb-32 relative">
                    <div className="md:absolute md:inset-0 flex flex-wrap items-center order-2 md:order-1">
                      <div className="w-full" data-scroll data-scroll-speed={0.45}>
                        <div className="px-6 md:pl-10 md:pr-0 xl:pl-12 xl:pr-0">
                          <m.h1 
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={{
                              enter: { transition: { staggerChildren: 0.5 } }
                            }}
                            className="text-5xl md:text-6xl xl:text-7xl 3xl:text-8xl leading-[1.2] md:leading-[1.1] xl:leading-[1.1] 3xl:leading-[1.12] font-normal"
                          >
                            <span className="block overflow-hidden">
                              <m.span variants={reveal} className="block text-black">Statesman.</m.span>
                            </span>
                            <span className="block overflow-hidden">
                              <m.span variants={reveal} className="block text-green">Entrepreneur.</m.span>
                            </span>
                            <span className="block overflow-hidden">
                              <m.span variants={reveal} className="block text-red">Humanitarian.</m.span>
                            </span>
                          </m.h1>
                          
                          <m.div
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            variants={{
                              enter: { transition: { delayChildren: 1.75 } }
                            }}
                            className="content md:max-w-[330px] xl:max-w-[490px]"
                          >
                            <m.p variants={fade} className="text-lg xl:text-xl">Nicholas Biwott dedicated his life to Kenya and her people. For over 50 years, as a public servant, philanthropist, and entrepreneur, he strove to build a strong, fair and bright future for his country.</m.p>
                          </m.div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-1/2 xl:w-7/12 ml-auto h-[50vh] md:h-full md:min-h-screen relative  order-1 md:order-2 mb-8 md:mb-0">
                      <div className="w-full h-full absolute inset-0 bg-grey">
                        <img className="w-full h-full object-cover" src="/images/home/1.jpg" alt="Placeholder" />
                      </div>
                    </div>
                  </section>

                  <Container>
                    <section className="flex flex-wrap items-center mb-12 md:mb-24 xl:mb-32">
                      <div className="w-full md:w-1/2 relative content order-2 md:order-1">
                        <figure>
                          <img className="w-full" src="/images/home/2.jpg" alt="Placeholder" />
                          <figcaption>An image caption</figcaption>
                        </figure>
                      </div>
                      <div className="w-full md:w-1/2 content md:px-12 xl:px-16 order-1 md:order-2 mb-6 md:mb-0 max-w-2xl" data-scroll data-scroll-speed={0.25}>
                        <p>Working in the governments of the Fathers of Kenyan Independence, Jomo Kenyatta and Daniel arap Moi, he held eight senior civil servant and ministerial posts.</p>
                        
                        <p>Widely regarded as the most competent and effective minister of the arap Moi government, he helped shape the largest economy in Eastern Africa and was at the forefront of efforts to deepen regional cooperation.</p>

                        <div className="mt-5">
                          <ButtonLink destination="/" a11yText="Find Out More" label="Find Out More" />
                        </div>
                      </div>
                    </section>
                  </Container>

                  <Container thin>
                    <section className="content relative py-10 md:py-24 xl:py-32">
                      <figure className="w-11/12 relative z-10 mb-5 md:mb-0">
                        <blockquote data-scroll data-scroll-speed={0.55}>
                          <p>“When the history of this country is written, it will include men and women who quietly, but firmly and with confidence, are responsible for what Kenya is today – a sound country, a stable country, with a growing economy. Nicholas Biwott is one of those people.”</p>
                          <figcaption>Uhuru Kenyatta<cite>President of Kenya (2013 - )</cite></figcaption>
                        </blockquote>
                      </figure>

                      <figure className="md:absolute md:top-0 md:right-0 md:bottom-0 z-0 opacity-60">
                        <img className="w-full h-full object-cover object-center" src="/images/home/3.jpg" alt="Placeholder" />
                      </figure>
                    </section>
                  </Container>

                  <section className="relative pt-12 pb-6 md:pt-24 md:pb-8 xl:pt-40 2xl:pb-24">
                    <NavSection />
                  </section>
                </m.main>
                
                <m.div variants={fade}>
                  <Footer />
                </m.div>
              </m.div>
            </LazyMotion>
          </div>
        </div>
      </LocomotiveScrollProvider>
    </Layout>
  )
}
