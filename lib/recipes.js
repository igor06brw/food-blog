import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

const recipesDirectory = path.join(process.cwd(), 'recipes')



export const getRecipesData = () => {
    const fileNames = fs.readdirSync(recipesDirectory)
    console.log(fileNames)
    const allRecipesData = fileNames.map(fileName => {
        const id = fileName.replace(/\.md/, '')
        console.log(id)

        const fullPath = path.join(recipesDirectory, fileName)
        console.log(fullPath)

        const fileContents = fs.readFileSync(fullPath, 'utf8')

        const matterResult = matter(fileContents)
        
        return {
            id,
            ...matterResult.data
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
                id: fileName.replace(/\.md$/, '')
            }
        }
    })
}

export function getRecipeData(id) {
    const fullPath = path.join(recipesDirectory, `${id}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    const matterResult = matter(fileContents)

    return {
        id,
        ...matterResult.data
    }
}