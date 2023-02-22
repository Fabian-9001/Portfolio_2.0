import Image from 'next/image'
import React from 'react'

const curriculum = () => {
  return (
    <div className='w-full min-h-[100vh] py-[100px] px-[20px] flex flex-col items-center justify-center gap-[20px]'>
      <div className='w-full max-w-[350px] h-[500px]  relative aspect-[1/1]'>
        <Image src={'/img/Fabian cruz.gif'} fill={true} alt='' />
      </div>
      <button className='w-full h-[50px] border flex items-center justify-center max-w-[350px]'>
        <a download={'../files/curriculum.pdf'}>Download</a>
      </button>
    </div>
  )
}

export default curriculum
