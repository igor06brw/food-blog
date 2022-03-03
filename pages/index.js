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
      <div>
        <Link href="/blog">
          <a className="block">
            All Recipes
          </a>
        </Link> 
      </div>
      {
        recipes.map((recipe, index) => 
           <Recipe key={index} recipe={recipe} />
        )
      }

    </Layout>
  )
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