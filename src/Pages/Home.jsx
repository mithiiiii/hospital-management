
import React from 'react'
import Slider from '../Components/Slider'
import Card from '../Components/Card'

export default function Home() {
    return (
        <div className="flex flex-col items-centre">
            <div className="max-w-[90vw] ">
                <Slider />
            </div>
            <div className="bg-gray-200 flex-col w-full flex justify-center mt-8 h-48  items-center">

                <p className="text-black font-lemon ">
                    Please take care of your health
                </p>

                <button className='text-white inline-block mt-10
                    py-[10px]
                     px-[20px] 
                     text-[24px] 
                    font-bold
                     text-center 
                     decoration-none
                     bg-[#ff5252]
                     border-black
                     border-[2px]
                     rounded-[10px]
                     shadow-[5px_5px_0px_black]
                     
                     duration-[0.3s]
                     transition-all
                     ease-in
                     hover:bg-white
                     hover:text-[#ff5252]
                     hover:border-[#ff5252]
                     hover:shadow-[#ff5252]
                     active:bg-[#fcf414]
                     active:translate-y-[4px]
                     
                     '>

                    Explore Now
                </button>




            </div>
            <div className='flex flex-row'>
                <Card title={"music"} image={"https://img.icons8.com/color-glass/48/musical-notes.png"} />
                <Card title={"music"} image={"https://img.icons8.com/color-glass/48/musical-notes.png"} />
                <Card title={"music"} image={"https://img.icons8.com/color-glass/48/musical-notes.png"} />


            </div>

        </div>
    )
}
