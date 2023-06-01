import Head from 'next/head'

import { Layout } from '../components/Layout'
import { siteTitle } from '../constants'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../utils/postsParser'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()

  return {
    props: { allPostsData },
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout isHomePage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is my simple blog in which I publish stories from my life</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
