"use client"
import React from 'react'
import ContactForm from '../util/ContactForm'

const Footer = () => {
  return (
    <footer className='FooterBG min-h-[80vh] flex flex-col justify-between'>
      <section className='ContentCon mt-6 grid gap-12 grid-cols-2'>
        <div className='footerContent flex flex-col justify-center items-center bg-amber-300'>
          <img className='w-100 h-64' src="assets/mainLogoWhite.svg" alt="" />
        </div>
        <ContactForm/>
      </section>
      
      <div className='disclaimers bg-[#D6232E] min-h-[5vh] flex items-center justify-center text-center text-white'>
        © 2026 The Jones Firm, PLLC. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer