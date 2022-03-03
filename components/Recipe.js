import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function Recipe({ recipe }) {
    return (
        <div className='relative mx-4 text-center my-6'>
           <h1 className='text-slate-900'>{recipe.frontmatter.title}</h1>
           <div className='relative'>
                <Image 
                    src={recipe.frontmatter.image}
                    alt="Picture of the author"
                    width={250}
                    height={250}
                />
                <div className='absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
                    <Link href={`/blog/${recipe.slug}`}>
                        Read more
                    </Link>
                </div>
           </div>
        </div>
    )
}
