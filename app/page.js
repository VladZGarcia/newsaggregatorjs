import { categories } from '@/constants'
import React from 'react'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList'
import response from '../response.json'
import sortNewsByImage from '@/lib/sortNewsByImage'

async function Homepage() {
  // fetch the news data
  const news =  await fetchNews(categories.join(','))
  //await fetchNews(categories.join(','))
  //sortNewsByImage(response)
  //console.log(news)

  return (
    <div> 
      <NewsList news= {news}/>
    </div>
  )
}

export default Homepage