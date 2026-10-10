import Image from 'next/image'
import Link from 'next/link'
import ContactForm from '../util/ContactForm'

const socialLinks = [
  { name: 'X', href: 'https://x.com', icon: '/assets/x.png' },
  { name: 'Facebook', href: 'https://www.facebook.com', icon: '/assets/facebook.svg' },
  { name: 'LinkedIn', href: 'https://www.linkedin.com', icon: '/assets/linked.svg' },
  { name: 'YouTube', href: 'https://www.youtube.com', icon: '/assets/youtube.svg' },
]

const Footer = () => {
  return (
    <footer id='footer' className='FooterBG text-white'>
      <section className='mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:px-10 sm:py-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-16 lg:px-12 lg:py-7'>
        <div className='flex flex-col justify-center'>
          <Link href='/' aria-label='The Jones Firm home' className='mb-7 inline-block w-fit'>
            <Image
              src='/assets/mainLogoWhite.svg'
              alt='The Brilliant Brawler'
              width={420}
              height={182}
              priority
              className='h-auto w-[280px] sm:w-[340px]'
            />
          </Link>

          <p className='mb-6 w-fit border-l-4 border-[#D6232E] bg-[#D6232E]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.12em] text-white/85'>
            Fighting for you in Oklahoma City
          </p>
          <p className='max-w-lg text-sm leading-6 text-white/80'>
            Fierce trial advocacy and uncompromising defense. When the stakes are highest, you need relentless fighters who never back down from a brawl in court.
          </p>

          <div className='mt-8 grid gap-6 border-t border-white/10 pt-5 sm:grid-cols-2'>
            <div>
              <h2 className='mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]'>
                <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' className='h-4 w-4 text-[#D6232E]' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z' />
                  <circle cx='12' cy='10' r='2.5' />
                </svg>
                Address
              </h2>
              <address className='not-italic text-sm leading-5 text-white/80'>
                <a
                  href='https://www.google.com/maps/search/?api=1&query=512+NW+12th+St%2C+Oklahoma+City%2C+OK+73103'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='transform scale-90 flex h-16 w-full items-center rounded-md border border-white/10 bg-[#001442] px-3 py-2 text-white/90 shadow-sm transition-all hover:scale-100 hover:border-white/25 hover:text-white hover:underline focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
                >
                  512 NW 12th St,<br />
                  Oklahoma City, OK 73103
                </a>
              </address>
              <a
                href='https://www.google.com/maps/search/?api=1&query=512+NW+12th+St%2C+Oklahoma+City%2C+OK+73103'
                target='_blank'
                rel='noopener noreferrer'
                className='mt-2 inline-flex items-center gap-2 text-xs font-medium text-white/75 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                <Image src='/assets/google-maps.svg' alt='' width={16} height={16} className='h-4 w-4' />
                Open Google Map
              </a>
            </div>

            <div>
              <h2 className='mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em]'>
                <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' className='h-4 w-4 text-[#D6232E]' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.8 2 2 0 0 1 3.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z' />
                </svg>
                Direct Line
              </h2>
              <a
                href='tel:+14059304209'
                className='group transform scale-90 flex h-16 w-full items-center gap-2.5 rounded-md border border-[#D6232E]/60 bg-[#D6232E]/10 px-3 py-2 text-lg font-bold shadow-sm transition-all hover:scale-100 hover:border-[#D6232E] hover:bg-[#D6232E] focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white'
              >
                <svg aria-hidden='true' viewBox='0 0 24 24' fill='none' className='h-5 w-5 text-[#ef6970] transition-colors group-hover:text-white' stroke='currentColor' strokeWidth='2'>
                  <path strokeLinecap='round' strokeLinejoin='round' d='M21 16.5v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 1.1 3.8 2 2 0 0 1 3.1 1.6h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L7 9.6a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z' />
                </svg>
                (405) 930-4209
              </a>
              <p className='mt-2 inline-flex items-center gap-2 text-xs font-medium text-white/75'>
                <span className='h-2 w-2 rounded-full bg-emerald-400' />
                Available 24/7
              </p>
            </div>
          </div>

          <nav aria-label='Social media' className='mt-8 flex w-fit items-center gap-4 rounded-lg border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-sm'>
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={`Visit The Jones Firm on ${social.name}`}
                className='transform scale-90 transition-all hover:scale-100 hover:opacity-80 focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              >
                <Image src={social.icon} alt='' width={32} height={32} className='h-8 w-8 object-contain' />
              </a>
            ))}
          </nav>
        </div>

        <div className='rounded-xl border border-white/10 bg-[#0a1225]/90 p-5 shadow-2xl shadow-black/25 sm:p-8'>
          <h2 className='text-2xl font-bold leading-tight sm:text-[28px]'>Request Your Confidential Case Review</h2>
          <p className='mt-1 text-xs leading-5 text-white/65 sm:text-[13px]'>
            Speak immediately with our litigation team. Strict attorney-client privilege applies.
          </p>
          <ContactForm />
        </div>
      </section>

      <div className='border-t border-white/10 px-6 py-4 text-center text-xs text-white/55'>
        © 2026 The Jones Firm, PLLC. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
