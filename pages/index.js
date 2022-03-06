import React, { useState } from 'react'
import Layout from '../components/Layout';
import Recipe from '../components/Recipe';
import Link from 'next/link';
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'


export default function Home({ recipes }) {

  return (
    <Layout>
      <div className='flex flex-col flex-wrap justify-center'>
        <h2 className='text-2xl text-center mt-24 font-extralight'>Latest Posts</h2>
        <div className='flex flex-row justify-center'>
        {
          sortedByDate(recipes).slice(0, 3).map((recipe, index) => (
            // eslint-disable-next-line react/jsx-key
            <div>
              <Recipe key={index} recipe={recipe} />
              <p className='text-center'>{recipe.frontmatter.date}</p>
            </div>
          ))
        }
        </div>
      </div>
      <div className='flex mx-12 my-12 justify-center'>
        <Link href="/blog">
          <a className=" rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 ease-in-out duration-150 font-normal">
            All Recipes
          </a>
        </Link> 
      </div>
      

    </Layout>
  )
}

const sortedByDate = (params) => {
  return params.sort((param1, param2) => {
    return Date.parse(param2.frontmatter.date) - Date.parse(param1.frontmatter.date)   
  })
}

export async function getStaticProps() {

  // Read all files from recipes folder
  const files = fs.readdirSync(path.join('recipes'))


  // Map all files from directory 
  const recipes = files.map((filename) => {

    // Assign each variable slu and replace it's name removed .md
    const slug = filename.replace('.md','')

    // Read all content from file by  filename and encode by utf-8
    const mdWithMetaData = fs.readFileSync(
      path.join('recipes', filename),
      'utf-8'
    )

    // convert md file to object & string
    const { data: frontmatter } = matter(mdWithMetaData)

    // return slug & frontmatter
    return {
      slug,
      frontmatter
    }
  })


  return {
    props: {
      recipes: recipes
    }
  }
}