import React from 'react'
import Navbar from './Navbar'
import Socials from './Socials'
import style from '../styles/index.module.css'

const Layout = ({ children }) => {
    return (
        <div className='relative md:flex items-center justify-center'>
            <Navbar />
            <Socials />
            <main className='w-[100%] md:mx-[100px] min-h-[100vh] bg-[#282828] md:w-[85%]'>
                <div className='max-w-[1280px] mx-auto'>
                    {children}
                </div>
            </main>
            <div className={`hidden fixed top-0 right-0 w-[100px] h-[100vh] bg-[#282828] md:grid grid-rows-[20%_40%_40%] ${style.animate}`}>
                <div className='w-[2px] h-[100%] bg-white order-1 ml-[48px]'></div>
                <div className='order-2 flex'>
                    <a href='mailto:garciacruzfabian23@gmail.com' className='rotate-[90deg] pt-[120px] m-auto text-center hover:translate-y-[-5px] duration-[0.3s]'>garciacruzfabian23@gmail.com</a>
                </div>
                <div className='w-[2px] h-[100%] bg-white order-3 ml-[48px]'></div>
            </div>
        </div>
    )
}

export default Layout