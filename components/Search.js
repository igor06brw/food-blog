import React from 'react'

export default function Search() {
    return (
        <div className='flex justify-center my-4'>
            <input type="text"  placeholder="Search recipes..." name="search" className='bg-slate-100 p-2 px-6 ' />
        </div>
    )
}
