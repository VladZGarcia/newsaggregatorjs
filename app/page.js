import { categories } from '@/constants'
import React from 'react'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList'

async function Homepage() {
  // fetch the news data
  const news = await fetchNews(categories.join(','))

  console.log(news)

  return (
    <div> 
      <NewsList news= {news}/>
    </div>
  )
}

export default Homepage