import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";
import { categories } from '@/constants'

async function SearchPage({searchParams}) {
    const news = await fetchNews(
        categories.join(','),
        searchParams?.term,
        true
    );
//console.log(news)
  return (
    <div>
        <h1 className="headerTitle">Search Results for: 
        {searchParams?.term}</h1>
        
        <NewsList news={news} />
    </div>
  )
}

export default SearchPage;