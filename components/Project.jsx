import Image from 'next/image'
import React from 'react'

const Project = ({ img }) => {
    return (
        <div className='w-full max-h-[490px] max-w-[630px] rounded-[10px] overflow-hidden'>
            <header className='w-full h-[65vw] max-h-[400px] relative overflow-hidden'>
                <Image className='hover:scale-[1.1] duration-[0.3s] object-cover' src={img} fill={true} alt='' />
            </header>
            <div className='w-full h-[90px] bg-[#201f23] flex flex-col justify-center p-[20px]'>
                <h4 className='text-[17px] font-[700]'>Khora - Urban Thinkers Consulting Firm</h4>
                <p>Web Development</p>
            </div>
        </div>
    )
}

export default Project