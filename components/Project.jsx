import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = ({ type, img, title, technologies, codeLink, deployLink }) => {
  return (
    <div className='w-full max-h-[600px] max-w-[630px] rounded-[10px] overflow-hidden'>
      <header className='w-full h-[65vw] max-h-[400px] relative overflow-hidden'>
        <Image
          className='hover:scale-[1.1] duration-[0.3s]'
          style={{ objectFit: 'cover' }}
          src={img}
          fill={true}
          alt={`Image of my project ${title}`}
          loading='lazy'
        />
      </header>
      <div className='w-full h-auto min-h-[90px] bg-[#201f23] flex flex-col md:flex-row gap-[20px] justify-between p-[20px]'>
        <div>
          <h4 className='text-[17px] font-[700]'>{title}</h4>
          <p>{technologies}</p>
        </div>
        <div className='w-full h-full m-auto flex justify-center items-center gap-[20px] sm:w-auto'>
          {type === 'Front-End' && (
            <Link
              className='text-[1.1rem] border-[2px] border-white min-w-[100px] h-[40px] hover:bg-white hover:text-[#282828] duration-[0.3s] rounded-[10px] flex items-center justify-center'
              target='_blank'
              href={deployLink}
            >
              Deploy
            </Link>
          )}
          <Link
            className='text-[1.1rem] border-[2px] border-white min-w-[100px] h-[40px] hover:bg-white hover:text-[#282828] duration-[0.3s] rounded-[10px] flex items-center justify-center'
            target='_blank'
            href={codeLink}
          >
            Github
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Project
