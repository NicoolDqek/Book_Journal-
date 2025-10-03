import React from 'react'
import Hero from '../../layouts/homepage/Hero'
import SectionInfo from '../../layouts/homepage/SectionInfo'
import Footer from '../../components/Footer'

function HomePage() {
  return (
    <div className='container-fluid p-0 overflow-hidden'>
     <Hero/>
     <SectionInfo/>
     <Footer/>
    </div>
  )
}

export default HomePage
