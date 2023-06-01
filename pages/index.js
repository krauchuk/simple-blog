import Head from 'next/head'
import Link from 'next/link'

import { Layout, siteTitle } from '../components/Layout'

import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout isHomePage>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, this is my simple blog in which I publish stories from my life</p>
      </section>
      <section>
        <Link href="/posts/first-post">My first post</Link>
      </section>
    </Layout>
  )
}
