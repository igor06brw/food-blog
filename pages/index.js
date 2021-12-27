import React, { useState } from 'react'
import Head from 'next/head'
import Header from '../components/Header'
import Search from '../components/Search'
import { getRecipesData } from '../lib/recipes';
import Recipe  from '../components/Recipe'
import Link from 'next/link'
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';

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
    <Layout>
      <Search value={value} handleChange={handleChange}/>
      <Pagination items={allRecipesData.allRecipesData} />
      
    </Layout>
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