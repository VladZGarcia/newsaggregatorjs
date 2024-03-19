import { categories } from '@/constants'
import React from 'react'
import fetchNews from '../lib/fetchNews'
import NewsList from './NewsList'
import response from '../response.json'
import sortNewsByImage from '@/lib/sortNewsByImage'

async function Homepage() {
  // fetch the news data
  const news =  sortNewsByImage(response)
  

  //to not use up the api use the response.json
  //const news = sortNewsByImage(response)
  //console.log(news)

  // just to test Loading page.
  //await new Promise((resolve) => setTimeout(resolve, 5000))

  return (
    <div> 
      <NewsList news= {news}/>
    </div>
  )
}

export default Homepage