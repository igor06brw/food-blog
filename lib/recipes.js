import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'



// road to all of recipes directory
const recipesDirectory = path.join(process.cwd(), 'recipes')



export const getRecipesData = () => {
    const fileNames = fs.readdirSync(recipesDirectory)
    
    const allRecipesData = fileNames.map(fileName => {
        const slug = fileName.replace('.md', '')
        
        const fullPath = path.join(recipesDirectory, fileName)
        console.log(fullPath)

        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const {data:frontmatter} = matter(fileContents)
        
        return {
            slug,
            frontmatter
        }
    })

    return {
        allRecipesData
    }
}


export function getAllRecipeIds() {
    const fileName = fs.readdirSync(recipesDirectory)


    return fileName.map(fileName => {
        return {
            params: {
                slug: fileName.replace('.md', '')
            }
        }
    })
}

export async function getRecipeData(slug) {

    // if got slug, then add it to full path variable

    const fullPath = path.join(recipesDirectory, `${slug}.md`)

    console.log(fullPath)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(html)
        .process(matterResult.content)
    const contentHtml = processedContent.toString()

    return {
        slug,
        contentHtml,
        ...matterResult.data
    }
}