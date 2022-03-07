import React, { useState, useEffect } from 'react'
import moment from 'moment'
import Link from 'next/link'

import { getSimilarPosts, getRecentPosts } from '../services'

const PostWidget = ({ categories, slug }) => {
  const [relatedPosts, setRelatedPosts] = useState([])

  useEffect(() => {
    if (slug) {
      getSimilarPosts(categories, slug).then((result) => {
        setRelatedPosts(result)
      })
    } else {
      getRecentPosts().then((result) => {
        setRelatedPosts(result)
      })
    }
  }, [slug])

  return (
    <div className="mb-8 rounded-lg bg-white p-8 pb-12 shadow-lg">
      <h3 className="mb-8 border-b pb-4 text-xl font-semibold">
        {slug ? 'Posts Relacionados' : 'Posts Recientes'}
      </h3>
      {relatedPosts.map((post, index) => (
        <Link href={`/post/${post.slug}`} className="text-md" key={index}>
          <div
            key={index}
            className="mb-4 flex w-full cursor-pointer items-center"
          >
            <div className="w-16 flex-none overflow-hidden">
              <img
                src={post.featuredImage.url}
                alt={post.title}
                height="60px"
                width="60px"
                className="rounded-lg align-middle"
              />
            </div>
            <div className="ml-4 flex-grow">
              <p className="font-xs text-gray-500">
                {moment(post.createdAt).format('MMM DD, YYYY')}
              </p>

              {post.title}
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default PostWidget
