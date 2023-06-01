import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'

const postsDirectory = path.join(process.cwd(), 'posts')

const getId = fileName => fileName.replace(/\.md$/, '')

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    return { id: getId(fileName), ...matterResult.data }
  })

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostIds() {
  return fs.readdirSync(postsDirectory).map(fileName => {
    return {
      params: {
        id: getId(fileName),
      },
    }
  })
}

export async function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  const processedContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processedContent.toString()

  return { id, contentHtml, ...matterResult.data }
}
