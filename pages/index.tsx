import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'

import {PostCard, Categories,PostWidget, Header } from "../components"

const posts = [
  {title: "React Testing", excerpt: "Learn React Testing"},
  {title: "React Testing", excerpt: "Learn React Testing"}
]

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Product People</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className='grid grid-cols-1 lg:grid-cols-12 gap-12'>
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => <PostCard post={post} key={post.title}></PostCard>)}
        </div>
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget/>
            <Categories/>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
