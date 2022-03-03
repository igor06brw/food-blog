import matter from 'gray-matter';
import fs from 'fs'
import path from 'path'
import React from 'react';
import Recipe from '../../components/Recipe';
import {marked} from 'marked'

export default function BlogPage({ frontmatter: {title}, content}) {
  return <div>

                <div className="blog-text mt-2">
                    <div dangerouslySetInnerHTML={{__html: marked(content)}}>

                    </div>
                </div>
  </div>;
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

