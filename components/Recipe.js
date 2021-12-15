import React from 'react'
import Image from 'next/image'

export default function Recipe({ recipe }) {
    console.log(recipe)
    return (
        <div className='relative inline-block mx-4 text-center my-6 flex justify-center'>
            {/* <Image
                    className='rounded-full'
                    src={item.recipe.image}
                    height={250}
                    width={250}
                    alt="Recipe Food"
                /> */}
            <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-neutral-900/50 w-full h-full rounded-full flex justify-center items-center'>
                <h1 className='text-slate-900 w-1/2'>{recipe.id}</h1>
            </div>
        </div>
    )
}
