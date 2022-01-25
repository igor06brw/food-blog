import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Recipe from './Recipe';

export default function Pagination({ items, itemsOnPage }) {

    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)


    // function, which change by index
    const handleChangePage = (page) => {
        setCurrentPage(page)
    }

    
    useEffect(() => {
        // assign main variables as default values
        let currentPages = [];
        let currentPagesIndex = 0;
        
        // fetch all data from index.js
        if (items) {
            items.forEach(element => {
                // on each element assign to multiple arrays in array with items equal itemsOnPage
                if (currentPages[currentPagesIndex] && currentPages[currentPagesIndex].length === itemsOnPage) currentPagesIndex++;

                // in case of won't finded items {maybe problem with fetched data}, the main array is assign as empty array
                if (currentPages[currentPagesIndex] === undefined) currentPages[currentPagesIndex] = []
                
                // to the first comment in forEach code: it's assign item to array
                currentPages[currentPagesIndex].push(element)

                console.log(currentPage)
            });
        }
        
        // set all separated arrays with items into state
        setPages([...currentPages])
    }, [items, setPages])
    
    return (
        <div className='container'>

            { /* After click button, take index -1 */ }
            <button
                className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                onClick={() => handleChangePage(currentPage - 1)}
                disabled={currentPage === 0 ? true : false}
                > 
                Previous
            </button>
            { /* After click button, take index +1 */ }
            <button
                className='relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50'
                onClick={() => handleChangePage(currentPage + 1)}
                disabled={currentPage === pages.length - 1 ? true : false}
                > 
                Next
            </button>
            {   
                console.log(pages),
                pages.length && pages[currentPage] && pages[currentPage].map((item, index) => (
                    
                    <Link href={`/recipes/${item.slug}`} key={index}>
                        <a className='flex flex-row justify-center'>
                            <Recipe recipe={item} />
                        </a>
                    </Link>
                ))
            }
        </div>
    )
}
