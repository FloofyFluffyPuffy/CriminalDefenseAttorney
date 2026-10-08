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
    <main className="">
      <div
        className="PAHeader flex h-[60vh] flex-col items-center justify-center gap-6 bg-cover bg-center bg-no-repeat px-6 text-center text-white"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${backgroundImage})` }}
      >
        <img src="/assets/mainLogoWhite.svg" alt="Bail Bonds" className="-mt-18 h-54 w-full" />
        <h1 className="max-w-4xl text-2xl font-bold sm:text-4xl">Oklahoma {practiceArea.title} Lawyer</h1>
      </div>

      <div className="PAContent flex flex-col items-start gap-8 lg:flex-row">
        <div className="PAText flex-1">
          <PracticeAreaContent />
        </div>

        <div className="PASide sticky top-28 h-fit flex-col">
          <div className="ContactRedirect flex flex-col items-center justify-center gap-5 rounded-2xl bg-[#001442] px-6 py-10 text-center shadow-xl sm:px-8">
            <img className="h-20 w-56 object-contain" src="/assets/swordRed.svg" alt="" />
            <h2 className="TextHeading text-2xl font-bold leading-tight text-white sm:text-3xl">
              Accused of {practiceArea.title} in Oklahoma?
            </h2>
            <p className="textDesc max-w-md text-sm leading-6 text-white/80">
              The stakes are high, but you don’t have to face the charges alone. Contact our team for a confidential review of your case.
            </p>
            <a
              href="#footer"
              className="inline-flex min-h-12 transform scale-90 items-center gap-3 rounded-sm bg-[#D6232E] px-6 py-3 text-sm font-bold uppercase tracking-wide text-white shadow-lg shadow-[#D6232E]/20 transition-all hover:scale-100 hover:bg-[#b91c26] focus-visible:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Consult Now!
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}