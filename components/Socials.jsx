import Image from "next/image"
import style from '../styles/index.module.css'
import Link from "next/link"

const Socials = () => {
    return (
        <div className={`hidden fixed top-0 left-0 w-[100px] h-[100vh] bg-[#282828] md:grid grid-rows-[50%_40%_10%] ${style.animate2}`}>
            <div className='w-[2px] h-[100%] bg-white order-1 ml-[48px]'></div>
            <div className='order-2 flex flex-col items-center justify-center gap-[30px]'>
                <Link target="_blank" href={'https://github.com/Fabian-9001'}>
                    <Image loading="lazy" className="hover:translate-y-[-5px] duration-[0.3s]" src={'/svg/github.svg'} width={40} height={30} alt="Icon of Github" />
                </Link>
                <Link target="_blank" href={'https://www.linkedin.com/in/fabian-cruz-7631a924b/'}>
                    <Image loading="lazy" className="hover:translate-y-[-5px] duration-[0.3s]" src={'/svg/linkedin.svg'} width={40} height={30} alt="Icon of Linkedin" />
                </Link>
                <Link target="_blank" href={'https://www.instagram.com/fabian_cruz21/?theme=dark'}>
                    <Image loading="lazy" className="hover:translate-y-[-5px] duration-[0.3s]" src={'/svg/instagram.svg'} width={40} height={30} alt="Icon of Instagram" />
                </Link>
            </div>
            <div className='w-[2px] h-[100%] bg-white order-3 ml-[48px]'></div>
        </div>
    )
}

export default Socials