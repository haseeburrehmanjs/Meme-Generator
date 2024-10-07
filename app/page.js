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
      <marquee>
        Do you Want Generate Meme to Click Image
      </marquee>
      <section className='mx-auto container'>
        <div className='flex flex-wrap justify-between mt-10 gap-3'>
          {responce.data.memes.map((item,index) => (
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
              <Image className='tilt-in-top-1' src={item.url} width={200} height={100} />
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}

export default page
