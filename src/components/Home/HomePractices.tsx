import Link from 'next/link'
import { practiceAreas } from '@/app/context/practiceAreas'

const HomePractices = () => {
  return (
    <section className='HomePractices'>
      <div className='w-full max-w-[660px]'>
        <h1 className='mb-7 text-center text-5xl font-extrabold uppercase leading-[1.05] text-[#001541] sm:text-[3rem]'>We Specialized In</h1>
        <p className='mb-7 text-base leading-6 text-[#001541]'>
          A felony conviction can ruin your life. Not only do some convictions lead to significant jail time, but they also burden those convicted with the effects of a criminal record, including the possibility of losing one’s license, seeing a dramatic increase in insurance premiums, and losing the ability to rent a home, take out a loan, or even get a job. Fortunately, if you’ve been charged with a crime, you are in the right place. The Brilliant Brawler is here to help.
        </p>
        <ul className='grid list-none grid-cols-1 gap-3 p-0 sm:grid-cols-2 sm:gap-5'>
          {practiceAreas.map(({ slug, title }) => (
            <li key={slug}>
              <Link className='transform scale-90 flex min-h-[2.625rem] items-center justify-center bg-[#d6232e] px-3 py-2 text-center text-base text-white no-underline transition-all duration-200 hover:scale-100 hover:bg-[#001541] focus-visible:scale-100 focus-visible:outline-3 focus-visible:outline-[#001541] focus-visible:outline-offset-3' href={`/${slug}`}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

export default HomePractices