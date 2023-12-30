"use client";
import React from 'react'
import { Instagram, Github, Twitter, Linkedin, User2 } from 'lucide-react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../public/Typist.png'
const Footer = () => {
    const router = useRouter()
    return (
        <div className='  flex flex-col  sm:flex-row sm:justify-between text-white px-20 py-4 '>
            <div className="flex justify-center my-4 sm:justify-between  gap-4">
                <Instagram size={30} color='#99f6e4' className='hover:cursor-pointer' onClick={() => {
                    window.open('https://www.instagram.com/vinayselukar/', '_blank')
                }} />
                <Github size={30} color='#99f6e4' className='hover:cursor-pointer' onClick={() => {
                    window.open('https://github.com/Vinayselukar21', '_blank')
                }} />
                <Twitter size={30} color='#99f6e4' className='hover:cursor-pointer' onClick={() => {
                    window.open('https://twitter.com/Vinayselukar21', '_blank')
                }} />
                <Linkedin size={30} color='#99f6e4' className='hover:cursor-pointer' onClick={() => {
                    window.open('https://www.linkedin.com/in/vinayselukar/', '_blank')
                }} />
                <User2 size={30} color='#99f6e4' className='hover:cursor-pointer' onClick={() => {
                    window.open('https://portfolio-five-virid-25.vercel.app/', '_blank')
                }} />
            </div>
            <div className='flex flex-no justify-center sm:justify-between gap-3 items-center text-teal-200'>
                <Image src={Logo} width={30} height={30} alt='logo' />
                <span>Made by <Link href='https://portfolio-five-virid-25.vercel.app/' target='_blank'>Vinay Selukar</Link></span>
            </div>
        </div>
    )
}
export default Footer
