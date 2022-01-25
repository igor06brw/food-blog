import React from 'react'
import { getRecipeData, getAllRecipeIds } from '../../lib/recipes'


export default function Recipe({ recipeData }) {
    return (
        <div>
            {recipeData.id}

            <div dangerouslySetInnerHTML={{ __html: recipeData.contentHtml }} />
        </div>
    )
}


export async function getStaticPaths() {
    const paths =  getAllRecipeIds()
    return {
        paths,
        fallback: false
    }
  }

export async function getStaticProps({ params }) {
    const recipeData = await getRecipeData(params.slug)
    return {
      props: {
        recipeData  
      }
    }
}
