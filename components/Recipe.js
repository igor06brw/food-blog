import React from 'react'
import Image from 'next/image'

export default function Recipe({ item }) {
    console.log(item)
    return (
        <div>
            <Image
                    className='rounded-full'
                    src={item.recipe.image}
                    height={150}
                    width={150}
                    alt="Recipe Food"
                />
            <h1>{item.recipe.label}</h1>

        </div>
    )
}
