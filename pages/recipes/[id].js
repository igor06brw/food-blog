import React from 'react'
import { getRecipeData, getAllRecipeIds } from '../../lib/recipes'


export default function Recipe({ recipeData }) {
    return (
        <div>
            {recipeData.id}
        </div>
    )
}


export async function getStaticPaths() {
    // Return a list of possible value for id
    const paths =  getAllRecipeIds()
    return {
        paths,
        fallback: false
    }
  }

export async function getStaticProps({ params }) {
    const recipeData = getRecipeData(params.id)
    return {
      props: {
        recipeData
      }
    }
}
