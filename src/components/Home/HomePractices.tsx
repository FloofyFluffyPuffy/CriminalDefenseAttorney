import Link from 'next/link'
import { practiceAreas } from '@/app/context/practiceAreas'

const HomePractices = () => {
  return (
    <section className='HomePractices'>
      <div className='HomePracticesContent'>
        <h1 className='text-center'>We Specialized In</h1>
        <p>
          A felony conviction can ruin your life. Not only do some convictions lead to significant jail time, but they also burden those convicted with the effects of a criminal record, including the possibility of losing one’s license, seeing a dramatic increase in insurance premiums, and losing the ability to rent a home, take out a loan, or even get a job. Fortunately, if you’ve been charged with a crime, you are in the right place. The Brilliant Brawler is here to help.
        </p>
        <ul className='PracticeGrid'>
          {practiceAreas.map(({ slug, title }) => (
            <li key={slug}>
              <Link className='PracticeItem' href={`/${slug}`}>
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