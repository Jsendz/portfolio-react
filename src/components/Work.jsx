import React from 'react'
import Nomad from '../assets/nomadterapiasreact3.png'
import Sweet from '../assets/sweethome3.png'
import { t } from 'i18next'

const Work = () => {
  return (
    <div name='work' className="w-full md:h-screen text-gray-300 bg-[#012F44]">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
            <div className="pb-8">
                <p className="text-4xl font-bold inline b-4 text-gray-300 border-[#EA604D]">{t("Work.h-work")}</p>
                <p className="py-6">{t("Work.p-list")}</p>
            </div>

            {/*container*/}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">

                {/*grid item*/}
                <div style={{backgroundImage: `url(${Nomad})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effetcs */}

                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font-bold text-white tracking-wider">React JS Application

                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://serene-einstein-e4215d.netlify.app/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage: `url(${Sweet})`}}  className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effetcs */}

                    <div className="opacity-0 group-hover:opacity-100 ">
                        <span className="text-2xl font-bold text-white tracking-wider">React JS Application

                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://www.thesweethomecompany.com/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Demo</button>
                            </a>
                            <a href="/">
                                <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                
                
            </div>
            
        </div>

    </div>
  )
}

export default Work