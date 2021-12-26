import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Search from '../components/Search'
import { getRecipesData } from '../lib/recipes';
import Recipe  from '../components/Recipe'
import Link from 'next/link'
import Pagination from '../components/Pagination';

// export const getServerSideProps = async ({ req }) => {
//   console.log(req.method, req.body)


//   const res = await fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=58db830c&app_key=794e5ae32193b0e1a3e8ded017ea9f8f`)
//   const data = await res.json()

//   return {
//     props: {
//       data: "xxx"
//     }
//   }

// }



export default function Home({ allRecipesData }) {

  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e)
    console.log(e)
  }

  return (
    <div className="container mx-auto w-max-content">
      <Head>
        <title>Chicken Recipe Blog</title>
        <meta name="description" content="All tasty chickens in basic recipes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search value={value} handleChange={handleChange}/>
      <Pagination items={allRecipesData.allRecipesData} />
      
    </div>
  )
}

export const getStaticProps = () => {
  const allRecipesData = getRecipesData();
  return {
    props: {
      allRecipesData
    }
  }
}