import React from 'react'
import Image from 'next/image'

export default function Recipe({ item }) {
    console.log(item)
    return (
        <div className='inline-block mx-4 text-center my-6'>
            <Image
                    className='rounded-full'
                    src={item.recipe.image}
                    height={250}
                    width={250}
                    alt="Recipe Food"
                />
            <h1>{item.recipe.label}</h1>

        </div>
    )
}
