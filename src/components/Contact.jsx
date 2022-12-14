import { t } from 'i18next'
import React from 'react'


const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#012F44] flex justify-center items-center p-4 ">
        <form action="" className="flex flex-col max-w-[600px w-full]">
            <div className="pb-8">
                <p className="text-4xl font-bold inline border-b-4 border-[#EA604D] text-gray-300">{t("Contact.h-contact")}</p>
                <p className=" text-gray-300 py-4">{t("Contact.p-contact")}</p>
            </div>
            <input className="bg-[#ccd6f6] p-2" type="text" placeholder='Name' name='name' />
            <input className="my-4 p-2 bg-[#ccd6f6] " type="email" placeholder='Email' name='email' />
            <textarea className="bg-[#ccd6f6] p-2" name="message" rows="10" placeholder='message'></textarea>
            <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact