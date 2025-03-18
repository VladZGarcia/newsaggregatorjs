import { categories } from '@/constants'
import React from 'react'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList'
import Carousel from './Carousel'
import MasonryGrid from './MasonryGrid'

async function Homepage() {
  // fetch the news data
  const news = await fetchNews(categories.join(","));
  

  return (
    <div> 
      <Carousel news= {news}/>
      <MasonryGrid news= {news}/>
      <NewsList news= {news}/>
      
    </div>
  )
}

export default Homepage