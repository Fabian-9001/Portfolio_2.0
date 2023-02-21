import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import style from '../styles/index.module.css'

const Navbar = () => {
    const [isActive, setIsActive] = useState(false)
    return (
        <nav className='fixed z-[2] top-0 left-0 w-full h-[100px] flex items-center justify-end px-[100px]'>
            <ul className={`fixed top-0 left-0 w-full min-h-[100vh] bg-black  text-[1.3rem] text-white flex flex-col items-center justify-center gap-[20px]
            ${isActive ? '' : 'hidden'}`}>
                <li>
                    <Link href={'/about'}>About</Link>
                </li>
                <li>
                    <Link href={'skills'}>My Skills</Link>
                </li>
                <li>
                    <Link href={'/experience'}>Experience</Link>
                </li>
                <li>
                    <Link href={'/work'}>Work</Link>
                </li>
                <li>
                    <Link href={'/contact'}>Contact</Link>
                </li>
            </ul>
            <button className=' bg-[#282828] p-[10px] rounded-[10px]' onClick={() => setIsActive(!isActive)}>
                <Image className={style.menu} width={40} height={40} src={'/img/menu.png'} alt='' />
            </button>
        </nav>
    )
}

export default Navbar