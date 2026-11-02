import React from 'react'

import Link from 'next/link'
import Image from 'next/image'

const HomeHero = () => {
  return (
    <section className='HomeHero relative h-screen w-full scale-x-[-1] overflow-hidden max-[767px]:h-[calc(100svh-6rem)] max-[767px]:min-h-[640px] max-[767px]:scale-x-100'>
      {/* Un-flip the inner content container so text and images render normally */}
      <div aria-hidden='true' className='HeroPatternFade checkBg' />
      <div className='relative z-10 flex h-full w-full scale-x-[-1] justify-end max-[767px]:scale-x-100'>
        <div className='HeroContent flex h-full w-full flex-col items-center justify-center max-[767px]:gap-2 max-[767px]:px-4 max-[767px]:text-center lg:w-[50%]'>
          <picture className='contents'>
            <source media='(max-width: 767px)' srcSet='/assets/mainLogoWhite.svg' />
            <Image
              className='Logo h-auto w-[min(80vw,24rem)] max-[767px]:w-[min(70vw,16rem)] sm:w-lg'
              src="/assets/mainLogoBlue.svg"
              alt="The Brilliant Brawler"
              width={636}
              height={275}
              priority
            />
          </picture>
          <h1 className='text-6xl font-bold text-[#001442] max-[767px]:text-[clamp(2rem,8vw,3rem)] max-[767px]:leading-tight max-[767px]:text-white'>OKLAHOMA CITY</h1>
          <h2 className='text-4xl font-semibold text-[#001442] max-[767px]:text-[clamp(1.25rem,5vw,1.75rem)] max-[767px]:leading-tight max-[767px]:text-white'>Criminal Defense Lawyer</h2>
          <Link
            href="/contact"
            className='mt-2 inline-flex min-h-11 max-w-full transform scale-90 items-center justify-center bg-[#D3222B] px-5 py-2.5 text-[17px] font-semibold text-white transition-all hover:scale-100 hover:bg-white hover:text-black focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#001442] max-[767px]:px-3 max-[767px]:text-xs'
          >
            SCHEDULE YOUR FREE CONSULTATION
          </Link>
        </div>
      </div>
    </section>
  )
}

export default HomeHero