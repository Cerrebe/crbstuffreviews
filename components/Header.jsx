import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import { getCategoriesHeader } from '../services'
import Link from 'next/link'
import { useSession, signIn, signOut } from 'next-auth/react'
import Image from 'next/image'

const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategoriesHeader().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="container mx-auto mb-8 px-10">
      <Head>
        <title>CRBStuffReviews</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:site_name" content="CRBStuffReviews" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://crbstuffreviews.es/" />
        <meta name="theme-color" content="#FF0000" />
      </Head>
      <div className="inline-block w-full border-b border-blue-100 py-4">
        <div className="block md:float-left align-middle">
          <span className="cursor-pointer text-4xl font-bold text-white align-middle">
            <Link href={'/'}>CRBStuffReviews</Link>
          </span>
        </div>

        <div className="content hidden md:float-right md:contents py-0 mb-0 align-middle">
          {/*
            {
              categories
            .map((category) => {
                return category.featuredCategory ? (
                  <ul className="float-right">
                    <Link key={category.slug} href={`/category/${category.slug}`}>
                      <span className="ml-4 mt-2 cursor-pointer align-middle font-semibold text-white md:float-left">
                        {category.name}
                        {console.log(category.name)}
                      </span>
                    </Link>
                  </ul>
                ) : null
              })
                .filter(Boolean)
            }
          */}
          <ul className="float-right py-0 mb-0 overflow-hidden relative table-cell">
            <li className="inline ml-4 mt-0 cursor-pointer align-middle font-semibold text-white float-left">
              <a
                href={'https://anilist.co/user/Cerrebe/'}
                target="_blank"
                className="align-top"
                title="Anilist"
              >
                <Image
                  src="Anilistlogo.svg"
                  height="40px"
                  width="40px"
                  className="align-middle overflow-hidden inline relative py-0"
                  unoptimized
                />
              </a>
            </li>
            <li className="inline ml-4 mt-2 cursor-pointer align-middle font-semibold text-white md:float-left">
              <a href={'https://www.backloggd.com/u/Cerrebe/'} target="_blank">
                Backloggd
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header
