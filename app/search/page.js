import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";
import { categories } from '@/constants'
import sortNewsByImage from '@/lib/sortNewsByImage'
import response from '@/response.json'
import Carousel from '../Carousel'
import MasonryGrid from '../MasonryGrid'

async function SearchPage({searchParams}) {
    const news = await fetchNews(
        categories.join(','),
        searchParams?.term,
        true
    );
    
    
  console.log('news',news.length)
  return (
    <div>
        <h1 className="headerTitle">Search Results for: 
        {searchParams?.term}</h1>
        {news === null ? (
                <>
                    <Carousel news={news} />
                    <MasonryGrid news={news} />
                    <NewsList news={news} />
                </>
            ) : (
                <p className="text-red-500 text-center mt-4 p-20">No search results found. Try different keywords</p>
            )}
    </div>
  )
}

export default SearchPage;