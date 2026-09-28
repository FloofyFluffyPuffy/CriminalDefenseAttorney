import React from 'react'

const HomeHero = () => {
  return (
    <section className='HomeHero h-screen w-full relative overflow-hidden scale-x-[-1]'>
      {/* Un-flip the inner content container so text and images render normally */}
      <div className='scale-x-[-1] h-full w-full flex justify-end'>
        <div className='HeroContent flex justify-center h-screen items-center flex-col w-full lg:w-[50%]'>
          <img className='Logo w-lg h-64' src="/assets/mainLogoBLue.svg" alt="" />
          <h1 className='text-6xl text-[#001442] font-bold'>OKLAHOMA CITY</h1>
          <h2 className='text-4xl text-[#001442] font-semibold'>Criminal Defense Lawyer</h2>
          <a 
            href="" 
            className='mt-2 inline-flex min-h-11 items-center bg-[#D3222B] px-5 py-2.5 text-[17px] font-semibold text-white transition-colors hover:bg-white hover:text-black focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#001442]'
          >
            SCHEDULE YOUR FREE CONSULTATION
          </a>
        </div>
      </div>
    </section>
  )
}

export default HomeHero