import axios from 'axios'
import React from 'react'
import Recipe from './Recipe'


export default function RecipeList({ recipes }) {


    return (
        <div> 
        {
            recipes.hits.map((recipe) => (
                <Recipe item={recipe} key={recipe.label} />
            ))
        }
        </div>
    )
}

