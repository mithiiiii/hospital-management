import React from 'react'
import Image from "../assets/2.jpeg"
export default function Card({ image, title }) {
    return (
        <div className='bg-gray-500 rounded-xl flex flex-col p-10
    m-4'>
            <img src={image} alt="" />
            <p>{title}</p>


        </div>
    )
}
