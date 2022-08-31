import React from 'react'
import HTML from '../assets/html.png';
import CSS from '../assets/css.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import {useTranslation} from "react-i18next";

const Skill = () => {

    const [t] = useTranslation("global");
  return (
    <div name='skills' className="w-full h-screen bg-[#012F44] text-gray-300">
        {/*container */}
        <div className="max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full">
            <div className="">
                <p className="text-4xl font-bold inline border-b-4 border-[#EA604D]">{t("Experience.p-exp")}</p>
                <p className="py-4">{t("Experience.p-stack")}</p>
            </div>
            <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
                    <p className="py-4">HTML</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
                    <p className="py-4">CSS</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Javascript} alt="Javascript icon" />
                    <p className="py-4">Javascript</p>
                </div>
                <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img className="w-20 mx-auto" src={Node} alt="Node icon" />
                    <p className="py-4">Node</p>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Skill