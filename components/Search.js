import React, { useState } from 'react'

export default function Search({ handleChange }) {

    const handleEvent = (event) => {    
        handleChange(event.target.value)
    }
    
    return (
        <div className='flex justify-center my-4'>
            <input type="text"  placeholder="Search recipes..." name="search" className='bg-slate-100 p-2 px-6 ' onChange={handleEvent} />
        </div>
    )
}
