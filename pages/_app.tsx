import React, { useEffect, useState } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Layout } from '../components'
import 'tailwindcss/tailwind.css'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'

export function MyApp({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}

export default MyApp
