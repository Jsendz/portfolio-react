import React, {useState} from 'react';
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {Link} from 'react-scroll';
import {useTranslation} from "react-i18next";


const Navbar = () => {

    const [nav, setNav] = useState(false)
    const handleClick = () => setNav(!nav)
    const [t, i18n] = useTranslation("global");

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#012F44] text-[#FF9D0A]">
        <div className="w-24">
            <img src="/assets/joshlogo.svg" alt="" />
        </div>
        <div className="flex border-2 border-[#DEEFE7] rounded-lg">
            
                <button className="px-4" onClick={() => i18n.changeLanguage("en")} >EN</button>
                <button className="px-4" onClick={() => i18n.changeLanguage("es")} >ES</button>
                <button className="px-4" onClick={() => i18n.changeLanguage("fr")} >FR</button>
                
        </div>
        <div className="hidden md:flex">
            <ul className="hidden md:flex md:justify-around">
                <li className=""><Link  to="home" smooth={true} duration={500} >
          {t("Navbar.Home")}
        </Link></li>
               
                <li className=""><Link  to="about" smooth={true} duration={500} >
                {t("Navbar.About")}
        </Link>
            </li>
                <li className=""><Link  to="skills" smooth={true} duration={500} >
                {t("Navbar.Skill")}
        </Link></li>
                <li className=""> <Link  to="work" smooth={true} duration={500} >
                {t("Navbar.Work")}
        </Link></li>
                <li className=""> <Link  to="contact" smooth={true} duration={500} >
                {t("Navbar.Contact")}
        </Link></li>
            </ul>
        </div>

        {/*hamburger */}
        <div onClick={handleClick} className="md:hidden z-10">
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile menu */}
        <div className={!nav ? "hidden" : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"}>
        <ul>
               <li className=" py-6 text 4xl"><Link onClick={handleClick}  to="home" smooth={true} duration={500} >
               {t("Navbar.Home")}
        </Link></li>
               <li className=" py-6 text 4xl"><Link onClick={handleClick}  to="about" smooth={true} duration={500} >
               {t("Navbar.About")}
        </Link></li>
               <li className=" py-6 text 4xl"><Link onClick={handleClick}  to="skills" smooth={true} duration={500} >
               {t("Navbar.Skill")}
        </Link></li>
               <li className=" py-6 text 4xl"><Link onClick={handleClick}  to="work" smooth={true} duration={500} >
               {t("Navbar.Work")}
        </Link></li>
               <li className=" py-6 text 4xl"><Link onClick={handleClick}  to="contact" smooth={true} duration={500} >
               {t("Navbar.Contact")}
        </Link></li>
           </ul>
           
        </div>

        {/* Social icons */}
        <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
            <ul>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300" href="/">
                        Linkedin<FaLinkedin size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300" href="/">
                        Github<FaGithub size={30} />
                    </a>
                </li>
                <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300 bg-blue-600">
                    <a className="flex justify-between items-center w-full text-gray-300" href="/">
                        Email<HiOutlineMail size={30} />
                    </a>
                </li>
            </ul>
        </div>



    </div>
  )
}

export default Navbar