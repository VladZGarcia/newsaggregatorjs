
import { categories } from '@/constants';
import fetchNews from '../lib/fetchNews';
import NewsList from './NewsList';
import Carousel from './Carousel';
import MasonryGrid from './MasonryGrid';
import getUserLanguageAndCountry from '@/lib/getUserLanguageAndCountry';

export default async function Homepage() {
  // Optionally, get user language and country if needed
  const { language, country } = getUserLanguageAndCountry();
  const news = await fetchNews(categories.join(','), '', true, language, country);

  return (
    <div>
      <Carousel news={news} />
      <MasonryGrid news={news} />
      <NewsList news={news} />
    </div>
  );
}