import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Header from '../components/Header'
import Search from '../components/Search'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Food Recipe Blog</title>
        <meta name="description" content="All tasty foods in basic recipes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Search />
    </div>
  )
}
