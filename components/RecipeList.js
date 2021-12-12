import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate';
import Recipe from './Recipe'



export default function RecipeList({ recipes, itemsPerPage }) {

     // We start with an empty list of items.
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    // Here we use item offsets; we could also use page offsets
    // following the API or data you're working with.
    const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
        // Fetch items from another resources.
        const endOffset = itemOffset + itemsPerPage;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        setCurrentItems(recipes.hits.slice(itemOffset, endOffset));
        setPageCount(Math.ceil(recipes.hits.length / itemsPerPage));
      }, [itemOffset, itemsPerPage]);
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % recipes.hits.length;
        console.log(
          `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    }





    return (
        <div className='flex flex-col'>
                <ReactPaginate
                    className='flex flex-row my-5 justify-center items-center text-sm'
                    previousClassName='bg-gray-400 rounded-full mx-2 h-8 w-8 flex justify-center items-center'
                    previousLinkClassName='text-gray-100 p-2 ' 
                    nextClassName='bg-gray-400 rounded-full mx-2 h-8 w-8 flex justify-center items-center'
                    nextLinkClassName='text-gray-100'
                    pageClassName='m-1 bg-gray-400 rounded-full h-8 w-8 flex justify-center items-center'
                    pageLinkClassName='text-gray-100 p-2'
                    breakLabel="..."
                    nextLabel=">"
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />
            <div className='flex justify-center flex-wrap'>
                {
                    currentItems.map((recipe) => (
                        <Recipe item={recipe} key={recipe.label} />
                        ))
                    }
            </div>
        </div>
    )
}

