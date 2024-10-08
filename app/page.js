import { ListItem } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

const page = async () => {
  const memes = await fetch('https://api.imgflip.com/get_memes')
  const responce = await memes.json()
  console.log(responce.data.memes);

  return (
    <>
      <h1 className='text-center mt-5 text-5xl font-bold'>
        Meme Generator
      </h1>
      <marquee className='mt-3'>
      Do you want to generate a meme? Click on the image!
      </marquee>
      <section className='mx-auto container'>
        <div className='flex flex-wrap justify-center mt-10 gap-3'>
          {responce.data.memes.filter(item => item.box_count === 2).map((item, index) => (
            <Link key={index} href={
              {
                pathname: "singalmeme",
                query: {
                  url: item.url,
                  id: item.id,
                  box_count: item.box_count
                }
              }
            }>
              <Image className='tilt-in-top-1 hover:relative hover:bottom-2 hover:shadow-lg hover:border hover: transition-delay: 150ms' src={item.url} width={400} height={'300'} />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default page


