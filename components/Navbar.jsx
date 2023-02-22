import Link from 'next/link'
import { useState } from 'react'

const Navbar = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <nav
      onScroll={() => setIsActive(isActive)}
      className={`fixed z-[2] left-[50%] translate-x-[-50%] w-full h-[100px] bg-[#252525] md:w-[calc(100%-200px)]
    ${isActive ? 'top-0' : 'top-[-100px]'}`}
    >
      <ul className={'w-full h-full flex items-center justify-evenly'}>
        <li>
          <a href={'#about'}>Home</a>
        </li>
        <li>
          <a href={'#kills'}>About Me</a>
        </li>
        <li>
          <a href={'#experience'}>Experience</a>
        </li>
        <li>
          <a href={'#work'}>Projects</a>
        </li>
        <li>
          <a href={'#contact'}>Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
