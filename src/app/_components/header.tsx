import React from 'react'
import { useState } from 'react';
import Logo from '../../../public/Typist.png'
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
const Header = () => {
    return (
        <div className='flex justify-center sm:justify-between px-10 py-10 text-teal-200'>
            <div className='flex gap-3 items-center text-teal-200'>
                <Image src={Logo} width={60} height={60} alt='logo' />
                <h1 className='text-3xl font-mono font-bold'> Typist.</h1>
            </div>
            <div className='hidden md:block'>
                <ModeToggle />
            </div>
        </div>
    )
}
export default Header