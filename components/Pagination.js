import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import Recipe from './Recipe';

export default function Pagination({ items, itemsOnPage }) {

    const [pages, setPages] = useState([]);
    const [currentPage, setCurrentPage] = useState(0)

    const handleChangePage = (page) => {
        setCurrentPage(page)
    }

    
    useEffect(() => {
        let currentPages = [];
        let currentPagesIndex = 0;
        
        if (items) {
            items.forEach(element => {
                console.log(element)
                if (currentPages[currentPagesIndex] && currentPages[currentPagesIndex].length === itemsOnPage) currentPagesIndex++;
                if (currentPages[currentPagesIndex] === undefined) currentPages[currentPagesIndex] = []
                
                currentPages[currentPagesIndex].push(element)

                console.log(currentPage)
            });
        }
        
        setPages([...currentPages])
    }, [items, setPages])
    
    return (
        <div className='container'>
            <button 
                onClick={() => handleChangePage(currentPage - 1)}
                disabled={currentPage === 0 ? true : false}
                > 
                Previous
            </button>
            <button 
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
