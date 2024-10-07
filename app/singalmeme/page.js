import Image from 'next/image';
import React from 'react'

const SingalMeme = (searchParam) => {
    console.log(searchParam.searchParams.url);
    console.log(searchParam.searchParams.box_count);


    // for(let i = 1; i < searchParam.searchParams.box_count; i++){
    //     <div>
    //         <input type="text" placeholder='i am here'/>
    //     </div>
    // }

    return (
        <div>
            <h1 className='text-4xl justify-center flex items-center h-[100vh] font-bold'>
                <Image width={300} height={300} src={searchParam.searchParams.url} />
                {for}
            </h1>
        </div>
    )
}

export default SingalMeme
