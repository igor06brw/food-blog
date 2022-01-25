import Image from 'next/image'
import React from 'react'

export default function Recipe({ recipe }) {
    return (
        <div className='relative mx-4 text-center my-6 flex justify-center'>
           <h1 className='text-slate-900'>{recipe.slug}</h1>
           <Image 
            src={recipe.frontmatter.image}
            alt="Picture of the author"
            width={250}
            height={250}
           />
        </div>
    )
}
