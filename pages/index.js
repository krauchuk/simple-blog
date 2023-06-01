import Head from 'next/head'
import Link from 'next/link'

import { Layout } from '../components/Layout'
import { LocalDate } from '../components/LocalDate'
import { siteTitle } from '../constants'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../utils/postsParser'
import { getAllNewsData } from '../pages/api/news'

export async function getServerSideProps() {
  const allPostsData = getSortedPostsData()
  const allNewsData = getAllNewsData()

  return {
    props: { allPostsData, allNewsData },
  }
}

export default function Home({ allPostsData, allNewsData }) {
  return (
    <Layout isHomePage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is my simple blog about Next.js. Here you can find interesting news</p>
        <p>
          Didn't find what you were looking for? Check the official{' '}
          <a href="https://nextjs.org/" target="_blank">
            website
          </a>
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest news</h2>
        <ul className={utilStyles.list}>
          {allNewsData.map(({ id, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/news/${id}`}>{title}</Link>
            </li>
          ))}
        </ul>
        <a href="https://nextjs.org/blog" target="_blank">
          <small>List of all changes</small>
        </a>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <LocalDate dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
