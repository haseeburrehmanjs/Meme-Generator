"use client"

import { Button } from '@mui/material';
import Image from 'next/image';
import React from 'react'

const SingalMeme = (searchParam) => {
    const { url, box_count } = searchParam.searchParams
    console.log(box_count);

    // generate meme function 
    const generateMeme = (event) => {
        event.preventDefault()
        console.log(box_count);

    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl justify-center flex flex-col items-center mt-10 font-bold'>
                <Image width={300} height={300} src={searchParam.searchParams.url} />
                <div>
                    <form className='flex flex-col gap-1' onSubmit={generateMeme}>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input className="w-[300px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input className="w-[300px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                        <Button type='submit' variant='contained'>submit</Button>
                    </form>
                </div>
            </h1>
        </div>
    )
}

export default SingalMeme
