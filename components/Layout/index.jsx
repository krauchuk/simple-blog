import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import { name, siteTitle } from '../../constants'
import styles from './styles.module.css'
import utilStyles from '../../styles/utils.module.css'

export const Layout = ({ children, isHomePage }) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Simple blog application" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {isHomePage ? (
          <>
            <Image
              priority
              src="/images/profile.jpg"
              className={utilStyles.borderCircle}
              height={144}
              width={144}
              alt=""
            />
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image
                priority
                src="/images/profile.jpg"
                className={utilStyles.borderCircle}
                height={108}
                width={108}
                alt=""
              />
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="/" className={utilStyles.colorInherit}>
                {name}
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!isHomePage && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  )
}
