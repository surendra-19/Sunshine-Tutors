import React from 'react'
import Logo from '../../assets/Logo.png'

const Footer = () => {
  return (
    <div className='bg-slate-600 text-white pb-5'>
      <footer className='mx-auto max-w-screen-xl '>
        <div className='flex justify-between mb-5'>
          <div className='' >
            <img src={Logo} alt='Sunshine Tutors Logo' title='Sunshine Tutors' />
            <p className='mt-5'>Dwarakamayi Building,J.P Nagar,Ganganamma Pet,Tenali.</p>
          </div>
          <div className='flex flex-1 justify-around mt-5'>
            <div>
              <h5 className='font-semibold'>Timings</h5>
              <p>Mon - Sat</p>
              <p>8:00 AM - 9:00 PM</p>
            </div>
            <div >
              <h5 className='font-semibold'>Contact Us</h5>
              <p>+91 949087 0177</p>
              <p>info@sunshinetutors.in</p>
            </div>
          </div>
        </div>
        <div style={{borderTop:'1px solid #E3E3E3'}} className=''>
            <p className='mt-3'><strong>&copy; Sunshine Tutors. All rights reserved.</strong></p>
        </div>
      </footer>
    </div>
  )
}

export default Footer