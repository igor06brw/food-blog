import React from 'react';
import Layout from '../../../components/Layout';
import fs from 'fs'
import path from 'path'
import Recipe from '../../../components/Recipe';
import matter from 'gray-matter'
import Pagination from '../../../components/Pagination';

export default function BlogPage({ recipes, numPages, currentPage }) {
  return (
    <Layout>
      <h1 className="text-5xl font-bold border-b-4 p-5 pt-12">
      Blog
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {recipes.map((recipe, index) => <Recipe key={index} recipe={recipe}/>)}
      </div>

      <Pagination currentPage={currentPage} numPages={numPages}/>

    </Layout>
    );
}


export async function getStaticPaths() {


  const files = fs.readdirSync(path.join('recipes'))

  const numPages = Math.ceil(files.length / 3)

  let paths = []

  for(let i = 1; i <= numPages; i++) {
    paths.push({
      params: {
        page_index: i.toString()
      }
    })
  }

  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log(params)
  const page = parseInt((params && params.page_index) || 1)

  const files = fs.readdirSync(path.join('recipes'))
  
  const recipes = files.map((filename) => {
    const slug = filename.replace('.md', '')

    const markdownWithMeta = fs.readFileSync(
      path.join('recipes', filename),
      'utf-8'
    )

    const {data: frontmatter} = matter(markdownWithMeta)

    return {
      slug,
      frontmatter
    }
  })

  const numPages = Math.ceil(files.length / 3)
  const pageIndex = page - 1
  const orderedRecipes = recipes
    .slice(pageIndex * 3, (pageIndex + 1) * 3)


  return {
    props: {
      recipes: orderedRecipes,
      numPages,
      currentPage: page
    }
  }
}