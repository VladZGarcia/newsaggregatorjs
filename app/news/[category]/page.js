import NewsList from '@/app/NewsList';
import fetchNews from '@/lib/fetchNews';
import { categories } from '@/constants'


async function NewsCategory(props) {
    const { category } = props.params
    //MediaStack seems to have problem with their categories so we made it like a searchterm.
    const news = await fetchNews(categories.join(','), category, true);
    //console.log(news)
  return (
    <div> 
        <h1 className="headerTitle">{category}</h1>
        <NewsList news={news} />
    </div>
  );
}

export default NewsCategory;

export async function generateStaticParams() {
  return categories.map((category) => ({
    category: category,
  }));
}