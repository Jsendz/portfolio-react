import React from 'react'

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#012F44] text-gray-300">
        <div className=" flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-[#EA604D]">About</p>
                </div>
                <div>

                </div>
                </div>
                <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
                    <div className="sm:text-right text-4xl font -bold">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rem, minus!
                        
                        </p>
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam quos mollitia reiciendis earum laboriosam quasi nostrum dignissimos aspernatur, sit vero porro aut aliquid ea labore corporis saepe, commodi, odit laborum.</p>
                    </div>

                </div>
        
        </div>
    </div>
  )
}

export default About