import React from 'react'
import moment from 'moment'
import Link from 'next/link'

const PostCard = ({ post }) => {
  return (
    <div className="mb-8 rounded-lg bg-white p-0 pb-12 shadow-lg lg:p-8">
      <div className="relative mb-6 overflow-hidden shadow-md pb-96">
        <img
          src={post.featuredImage.url}
          alt={post.title}
          className="absolute h-96 w-full rounded-t-lg object-cover object-top shadow-lg lg:rounded-lg"
        />
      </div>
      <div className="mb-10 pb-2 inline-block items-center justify-between lg:mb-0 lg:ml-2 lg:flex w-full">
        <div className="mb-4 mr-8 flex w-full items-center lg:mb-0 lg:w-auto lg:float-left">
          <img
            src={post.author.photo.url}
            alt={post.author.name}
            height="30px"
            width="30px"
            className="rounded-full align-middle"
          />
          <p className="ml-2 inline align-middle text-lg text-gray-700">
            {post.author.name}
          </p>
        </div>
      </div>
      <div className="mb-8 block w-full items-center justify-center text-center lg:flex">
        <h1 className="mb-4 cursor-pointer text-center text-3xl font-semibold transition duration-700 hover:text-blue-600">
          <Link href={`/post/${post.slug}`}>{post.title}</Link>
        </h1>
      </div>
      <p className="text-center-text-lg mb-8 px-4 font-normal text-gray-700 lg:px-20">
        {post.excerpt}
      </p>
      <div className="text-center pb-4">
        <Link href={`/post/${post.slug}`}>
          <span className="inline-block transform cursor-pointer rounded-full bg-blue-600 px-8 py-3 text-lg font-medium text-white transition duration-500 hover:-translate-y-1">
            Continuar Leyendo
          </span>
        </Link>
      </div>
      <div className="float-right mb-4 mr-6 w-auto py-2 font-medium text-gray-700 lg:mb-2 lg:mr-1 lg:w-auto lg:py-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="mr-2 inline h-6 w-6 text-blue-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
        <span className="align-middle">
          {moment(post.createdAt).format('DD MMM, YYYY')}
        </span>
      </div>
    </div>
  )
}

export default PostCard
