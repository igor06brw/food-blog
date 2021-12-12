import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import Search from '../components/Search'
import RecipeList from '../components/RecipeList'

export const getStaticProps = async () => {
  const res = await fetch("https://api.edamam.com/api/recipes/v2?type=public&q=chicken&app_id=58db830c&app_key=794e5ae32193b0e1a3e8ded017ea9f8f")

  const data = await res.json()

  return {
    props: {
      data,
    }
  }

}

export default function Home({ data }) {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Food Recipe Blog</title>
        <meta name="description" content="All tasty foods in basic recipes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
      <RecipeList recipes={data} itemsPerPage={6} />
    </div>
  )
}
