import React from 'react'
import Navbar from './navbar'
import Footer from './Footer'

function About() {
  return (
    <>
        <div >
            <Navbar />
            <div className="min-h-screen">
            <h1 className="text-5xl mt-32 justify-center text-center"> <span className="text-green-500">Aniket Gahiware</span></h1>
            </div>
            <Footer />
        </div>
    </>
  )
}

export default About