import NewsList from '@/app/NewsList';
import fetchNews from '@/lib/fetchNews';
import { categories } from '@/constants'


async function NewsCategory(props) {
    const { category } = props.params
    const news = await fetchNews(category, category, true);
    //console.log(news)
  return (
    <div> 
        <h1 className="headerTitle">{category}</h1>
        <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;