import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="container mx-auto">
      <Head>
        <title>Food Recipe Blog</title>
        <meta name="description" content="All tasty foods in basic recipes!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='flex justify-center my-4'>
        <div className='inline-block'>
          <Image
            className='rounded-full'
            src="https://lh3.googleusercontent.com/GrQx2bXJfqWsY5J9YVQdjixy0Mi675_bCLmV10_jSPJeVLLBgHuBk3or8gb95lsMYTmZMiYT8omiZYdB_64crHtCxVdL8dEpKd1m"
            height={150}
            width={150}
            alt="Recipe Food"
          />
        </div>
      </div>
      <h1 className=' text-center text-3xl font-bold'>
        Food Recipe Blog
      </h1>
    </div>
  )
}
