import matter from 'gray-matter';
import fs from 'fs'
import path from 'path'
import React from 'react';
import {marked} from 'marked'
import Layout from '../../components/Layout';
import { useRouter } from 'next/router'

export default function BlogPage({ frontmatter: {title}, content}) {
    const router = useRouter()
    return <Layout>
                <div className="blog-text mt-2">
                    <div dangerouslySetInnerHTML={{__html: marked(content)}}></div>
                    <button className="rounded-lg bg-gray-200 hover:bg-gray-300 text-gray-800 py-2 px-4 ease-in-out duration-150 font-normal my-12" type="button" onClick={() => router.back()}>Back</button>
                </div>
  </Layout>;
}

export async function getStaticPaths() {
    const files = fs.readdirSync(path.join('recipes'))

    const paths = files.map(filename => ({
        params: {
            slug: filename.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: {slug} }) {
    const mdWithMetaData = fs.readFileSync(path.join('recipes', slug + '.md'), 'utf-8')

    const {data: frontmatter, content} = matter(mdWithMetaData)

    return {
        props: {
            frontmatter,
            content,
            slug
        },
    }
}

