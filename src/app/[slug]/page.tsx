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
        className="PAHeader h-[50vh] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Content */}
      </div>
      <div className='mx-auto w-full'>
        <h1 className='mt-8 mb-6 text-5xl font-extrabold uppercase leading-[1.05] text-[#001541] sm:text-[3rem]'>{practiceArea.title}</h1>
        <p className='text-base leading-7 text-[#001541]'>
          Every criminal case depends on its specific allegations, evidence, and circumstances. If you are facing a charge involving {practiceArea.title.toLowerCase()}, get in touch with a defense attorney to discuss your situation and potential next steps.
        </p>
      </div>
    </main>
  )
}