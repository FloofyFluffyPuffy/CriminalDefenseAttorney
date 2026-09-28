import Link from 'next/link'
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

  return (
    <main className='PracticeAreaPage'>
      <div className='PracticeAreaPageContent'>
        <Link href='/'>Back to home</Link>
        <h1>{practiceArea.title}</h1>
        <p>
          Every criminal case depends on its specific allegations, evidence, and circumstances. If you are facing a charge involving {practiceArea.title.toLowerCase()}, get in touch with a defense attorney to discuss your situation and potential next steps.
        </p>
      </div>
    </main>
  )
}