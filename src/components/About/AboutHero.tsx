import Image from 'next/image'

const AboutHero = () => {
  return (
    <section className='AboutHero relative flex h-[90vh] items-center justify-center px-6 text-center text-white'>
      <div className='hero-copy relative z-10 mx-auto max-w-4xl'>
        <div className='hero-eyebrow flex flex-wrap items-center justify-center gap-3 text-sm font-bold uppercase tracking-[0.24em] text-[#D6232E]'>
          <span className='hero-location text-white -mb-10'>Oklahoma City</span>
          <Image
            className='sword-logo h-24 w-36 -mx-14 object-contain'
            src='/assets/swordRed.svg'
            alt='The Brilliant Brawler sword logo'
            width={224}
            height={80}
            priority
          />
          <span className='hero-practice-area text-white -mb-10'>Criminal Defense</span>
        </div>
        <h1 className='hero-title text-4xl font-black leading-tight sm:text-6xl'>
          Meet Ron Jones, <br /><span className='hero-name text-[#D6232E]'>The Brilliant Brawler</span>
        </h1>
        <p className='hero-description italic mx-auto mt-6 text-lg leading-relaxed text-white/90 sm:text-xl'>
          &ldquo;We don&apos;t just defend a case, we defend a human being&apos;s future and freedom.&rdquo;
        </p>
      </div>
    </section>
  )
}

export default AboutHero