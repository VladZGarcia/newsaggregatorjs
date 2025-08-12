import NewsList from '@/app/NewsList';
import fetchNews from '@/lib/fetchNews';
import { categories } from '@/constants'
/* import sortNewsByImage from '@/lib/sortNewsByImage'
import response from '@/response.json' */
import Carousel from '@/app/Carousel';
import MasonryGrid from '@/app/MasonryGrid'


async function NewsCategory({params}) {
  const { category } = await params
  const news = await fetchNews(categories.join(','), category, true);
  
  return (
    <div> 
        <h1 className="headerTitle">{category}</h1>
        <Carousel news={news} />
        <MasonryGrid news= {news}/>
        <NewsList news={news} />
    </div>
  );
}

export async function generateStaticParams() {
  return categories.map((category) => ({
    category,
  }));
}

export default NewsCategory;