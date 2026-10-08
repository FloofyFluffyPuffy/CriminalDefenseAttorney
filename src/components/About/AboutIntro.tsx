import React from 'react'

const AboutIntro = () => {
  return (
    <section className="AboutIntro checkBg">
      <div className="PAContent flex flex-col items-start gap-8 lg:flex-row">
        <div className="PASide sticky top-28 h-fit flex-col">
          <img src="assets/courtCrop.png" alt="" />
        </div>
        <div className='PortfolioCol flex flex-col'>
          <div className='Education'> </div>
          <div className='Experience'></div>
        </div>
        <div className="PAText">
        </div>
      </div>
    </section>
  )
}

export default AboutIntro