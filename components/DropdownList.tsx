'use client';
import React, { useState } from 'react'
import Image from 'next/image';
const DropdownList = () => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className='relative'>
        <div className='cursor-pointer' onClick={()=> setIsopen(!isOpen)}>
        <div className='filter-trigger'>
            <figure>
                <Image src = "/assets/icons/hamburger.svg" alt="menu" width={14} height={14}/>
                Most Recent
            </figure>

        </div>
        </div>

    </div>
  )
}

export default DropdownList