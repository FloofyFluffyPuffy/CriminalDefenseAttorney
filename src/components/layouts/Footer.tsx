"use client"
import React from 'react'
import ContactForm from '../util/ContactForm'
const Footer = () => {
  return (
    <footer className='bg-blue-400'>
        <section className='ContentCon mt-6 grid grid-cols-2'>
            <div className='footerContent'>
            </div>
            <ContactForm></ContactForm>
        </section>
        <div className='RealFooter h-[10vh] mt-6 text-center'>
            © 2026 The Jones Firm, PLLC. All rights reserved.
        </div>
    </footer>
  )
}

export default Footer