import React, { useState, useEffect } from 'react'
import { getCategoriesHeader } from '../services'
import Link from 'next/link'

const Header = () => {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getCategoriesHeader().then((newCategories) => setCategories(newCategories))
  }, [])
  return (
    <div className="container mx-auto mb-8 px-10">
      <div className="inline-block w-full border-b border-blue-400 py-8">
        <div className="block md:float-left">
          <span className="cursor-pointer text-4xl font-bold text-white">
            <Link href={'/'}>CRBStuffReviews</Link>
          </span>
        </div>
        <div className="content hidden md:float-right md:contents">
          {categories
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
            .filter(Boolean)}
        </div>
      </div>
    </div>
  )
}

export default Header
