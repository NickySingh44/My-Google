import Image from 'next/image'
import React from 'react'

const Avatar = ({className}) => {
    return (
        <>
           
            <div className={` rounded-full border-8 border-black
            flex justify-center items-center
            cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}>
            <Image 
           
            src="/profile.jpg"
            width="20px"
            height="20px"
            loading='lazy'
            alt='profile pic'
                />
            </div>
           
        </>
    )
}

export default Avatar
