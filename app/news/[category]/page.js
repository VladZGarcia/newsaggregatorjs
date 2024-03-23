import NewsList from '@/app/NewsList';
import fetchNews from '@/lib/fetchNews';
import { categories } from '@/constants'
import sortNewsByImage from '@/lib/sortNewsByImage'
import response from '@/response.json'


async function NewsCategory(props) {
    const { category } = props.params
    //MediaStack seems to have problem with their categories so we made it like a searchterm.
    
    const news = await fetchNews(categories.join(','), category, true);

    //to not use up the api use the response.json
    //const news = sortNewsByImage(response)

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