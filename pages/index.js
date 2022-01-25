import React, { useState } from 'react'
import Search from '../components/Search'
import { getRecipesData } from '../lib/recipes';
import Pagination from '../components/Pagination';
import Layout from '../components/Layout';

export default function Home({ allRecipesData }) {

  const [value, setValue] = React.useState("");

  const handleChange = (e) => {
    setValue(e)
    console.log(e)
  }
  console.log(getRecipesData, 'index')
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