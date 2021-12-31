import Image from 'next/image'
import React from 'react'

export default function Recipe({ recipe }) {
    return (
        <div className='relative inline-block mx-4 text-center my-6 flex justify-center'>
           <h1 className='text-slate-900'>{recipe.slug}</h1>
        </div>
    )
}
