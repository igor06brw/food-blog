import React, { useState } from 'react'
import Search from '../components/Search'
import { getRecipesData } from '../lib/recipes';
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
  console.log(allRecipesData, 'index')
  return (
    <Layout>
      <Search value={value} handleChange={handleChange}/>
      <Pagination items={allRecipesData.allRecipesData} itemsOnPage={3} />
      
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