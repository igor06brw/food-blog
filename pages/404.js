import React from 'react'
import Link from 'next/link'
import Layout from '../components/Layout'

function Error() {
  return (
    
    <Layout>
        <div className='flex flex-col justify-center content-center text-center'>
            <h1 className='text-4xl my-10 text-gray-800'>Are you kidding me?! You are in wrong page.</h1>
            <Link href="/">
                <div className='flex justify-center'>
                    <a className='rounded-lg bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ease-in-out duration-150'>
                        Back
                    </a>
                </div>
            </Link>
        </div>
    </Layout>
  )
}

export default Error