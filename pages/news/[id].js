import Head from 'next/head'

import { Layout } from '../../components/Layout'
import { getNewsById } from '../api/news/[id]'
import utilStyles from '../../styles/utils.module.css'

export async function getServerSideProps({ params }) {
  const newsData = getNewsById(params.id)

  return {
    props: {
      newsData,
    },
  }
}

export default function News({ newsData }) {
  return (
    <Layout>
      <Head>
        <title>{newsData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{newsData.title}</h1>
        <p className={utilStyles.whiteSpaceBreak}>{newsData.text}</p>
      </article>
      <div className={utilStyles.textCenter}>
        <a href={newsData.link} target="_blank">
          Read more
        </a>
      </div>
    </Layout>
  )
}
