import { t } from 'i18next'
import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import Aboutmepic from '../assets/aboutmepic.png'
import {useTranslation} from "react-i18next";

const Home = () => {

  const [t] = useTranslation("global");
  return (
    <div name="home" className="w-full h-screen bg-[#012F44]">

      {/* COntainer */}
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        

      <div className="max-w-[1000px] h-full mx-auto px-6 flex flex-col justify-center">
        <p className=" text-[#F28749]">{t("Home.Pname")}</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-[#FF9D0A]">{t("Home.p-me")}</h1>
        <h2 className="text-4xl sm:text-6xl font-bold text-slate-300">{t("Home.H2stack")}</h2>
        <p className="text-[#DEEFE7] py-4 max-w-[700px]">{t("Home.Pdescrip")}</p>
        <div className="pl-8">
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center group-container hover:bg-pink-600 hover:border-pink-600">View Work 
          <span className="group-hover:rotate-90 duration-300">
          <HiArrowNarrowRight className="ml-3" />
          </span>
          </button>
          
        </div>
      </div>
      <div className="" >
          <img className="rounded-2xl mx-auto w-2/3 md:w-full" src={Aboutmepic} alt="aboutmepic" />
        </div>
      </div>

    </div>
  )
}

export default Home