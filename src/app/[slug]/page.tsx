import { notFound } from 'next/navigation'
import { practiceAreas } from '@/app/context/practiceAreas'

type PracticeAreaPageProps = {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return practiceAreas.map(({ slug }) => ({ slug }))
}

export default async function PracticeAreaPage({ params }: PracticeAreaPageProps) {
  const { slug } = await params
  const practiceArea = practiceAreas.find((area) => area.slug === slug)

  if (!practiceArea) {
    notFound()
  }

  const backgroundImage = practiceArea.image

  return (
    <main className=''>
      <div
        className="PAHeader flex h-[60vh] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat px-6 text-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}
      >
        <img src="/assets/mainLogoWhite.svg" alt="Bail Bonds" className="w-full -mt-18 h-54" />
        <h1 className="max-w-4xl text-2xl font-bold sm:text-4xl">Oklahoma {practiceArea.title} Lawyer</h1>
      </div>
      <div className='PAContent grid grid-cols-3 grid-rows-2 mx-auto w-full'>
        <div className='PAText bg-amber-200 flex-col col-span-2 h-10'>
          put a bunch of h1 h2 h3 here and p, disect the paragraph into that
        </div>
        <div className='PASide flex flex-col bg-red-200'>
          so put like a contact form here and some extra image
        </div>
      </div>
    </main>
  )
}