import { notFound } from 'next/navigation'
import { practiceAreas } from '@/app/context/practiceAreas'
import ArmedRobbery from '@/components/PracticeAreaComponents/ArmedRobbery'
import AssaultBattery from '@/components/PracticeAreaComponents/AssaultBattery'
import CivilRights from '@/components/PracticeAreaComponents/CivilRights'
import CriminalInvestigation from '@/components/PracticeAreaComponents/CriminalInvestigation'
import DrugTrafficking from '@/components/PracticeAreaComponents/DrugTrafficking'
import FederalOffenses from '@/components/PracticeAreaComponents/FederalOffenses'
import GunCrimes from '@/components/PracticeAreaComponents/GunCrimes'
import Manslaughter from '@/components/PracticeAreaComponents/Manslaughter'
import Murder from '@/components/PracticeAreaComponents/Murder'
import OtherCriminalMatters from '@/components/PracticeAreaComponents/OtherCriminalMatters'
import SexCrimes from '@/components/PracticeAreaComponents/SexCrimes'
import WhiteCollarCrimes from '@/components/PracticeAreaComponents/WhiteCollarCrimes'

const practiceAreaComponents = {
  'armed-robbery': ArmedRobbery,
  'assault-battery': AssaultBattery,
  'drug-trafficking': DrugTrafficking,
  'gun-crimes': GunCrimes,
  'federal-offenses': FederalOffenses,
  manslaughter: Manslaughter,
  murder: Murder,
  'sex-crimes': SexCrimes,
  'white-collar-crimes': WhiteCollarCrimes,
  'criminal-investigation': CriminalInvestigation,
  'civil-rights': CivilRights,
  'other-criminal-matters': OtherCriminalMatters,
}

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
  const PracticeAreaContent = practiceAreaComponents[practiceArea.slug]

  return (
    <main className=''>
      <div
        className="PAHeader flex h-[60vh] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat px-6 text-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}
      >
        <img src="/assets/mainLogoWhite.svg" alt="Bail Bonds" className="w-full -mt-18 h-54" />
        <h1 className="max-w-4xl text-2xl font-bold sm:text-4xl">Oklahoma {practiceArea.title} Lawyer</h1>
      </div>
      <div className='PAContent'>
        <div className='PAText'>
          <PracticeAreaContent />
        </div>
        <div className='PASide flex flex-col bg-red-200'>
          so put like a contact form here and some extra image
        </div>
      </div>
    </main>
  )
}