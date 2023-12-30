"use client";
import React from 'react'
import { useSystem } from '../../hooks/useSystem'
export const Stats = () => {
    const { results } = useSystem()

    return (
        <div className='flex justify-around font-mono text-white'>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl '>Accuracy</h1>
                <p className='text-xl '>{results.accuracy}%</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl '>WPM</h1>
                <p className='text-xl '>{results.wpm}</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl '>CPM</h1>
                <p className='text-xl '>{results.cpm}</p>
            </div>
            <div className='flex flex-col items-center'>
                <h1 className='text-xl '>Errors</h1>
                <p className='text-xl '>{results.error}</p>
            </div>
        </div>
    )
}
