import React from 'react'

const HomeHero = () => {
  return (
    <section className='HomeHero h-screen w-full'>
      <div className='HeroContent dark-navy-plaid-background flex justify-center h-screen items-center flex-col w-[50%]'>
        <img className='Logo w-lg h-64' src="/assets/mainLogoBLue.svg" alt="" />
        <h1 className='text-6xl text-[#001442] font-bold'>OKLAHOMA CITY</h1>
        <h2 className='text-4xl text-[#001442] font-semibold'>Criminal Defense Lawyer</h2>
        <a href="" className='text-[17px] text-white p-3 mt-2 bg-[#D3222B]'>SCHEDULE YOUR FREE CONSULTATION</a>
      </div>
    </section>
  )
}

export default HomeHero