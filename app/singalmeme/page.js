"use client"

import { Button } from '@mui/material';
import Image from 'next/image';
import { userAgentFromString } from 'next/server';
import React, { useRef, useState } from 'react'

const SingalMeme = (searchParam) => {
    const { url, box_count, id } = searchParam.searchParams
    console.log(box_count);

    // state for get input value
    const text1Val = useRef()
    const text2Val = useRef()
    const [myMeme, setmyMeme] = useState(null)

    // generate meme function 
    const generateMeme = async (event) => {
        event.preventDefault()
        console.log(text1Val.current.value);
        console.log(text2Val.current.value);
        const data = await fetch(`https://api.imgflip.com/caption_image?template_id=${id}&username=haseeburrehmanjs&password=haseeb123&text0=${text1Val.current?.value}&text1=${text2Val.current?.value}`)
        const respone = await data.json()
        console.log(respone.data.url);
        setmyMeme(respone.data.url)
        text1Val.current.value = ''
        text2Val.current.value = ''
    }

    return (
        <div className='container mx-auto'>
            <h1 className='text-4xl justify-center flex flex-col items-center mt-10 font-bold'>
                <div className='flex justify-center gap-5 mt-5'>
                    <Image src={searchParam.searchParams.url} width={300} height={300} />
                    {myMeme && <Image src={myMeme} width={300} height={300} />}
                </div>
                <div>
                    <form className='flex flex-col gap-1' onSubmit={generateMeme}>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input ref={text1Val} className="w-[300px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                        <div className="w-full max-w-sm min-w-[200px]">
                            <input ref={text2Val} className="w-[300px] bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow" placeholder="Type here..." />
                        </div>
                        <Button type='submit' variant='contained'>submit</Button>
                    </form>
                </div>
            </h1>

        </div>
    )
}

export default SingalMeme
