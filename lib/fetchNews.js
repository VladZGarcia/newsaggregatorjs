
import sortNewsByImage from "./sortNewsByImage";
import mockResponse from '../mockResponse.json';



const fetchNews = async (category, keywords, isDynamic, userLanguage, userCountry) => {
  // Set defaults if missing or undefined
  if (!userLanguage || userLanguage === 'undefined') userLanguage = 'es';
  if (!userCountry || userCountry === 'undefined') userCountry = 'ar, co';
  const encodedKeywords = encodeURIComponent(keywords);
  const apiKey = process.env.NEXT_PUBLIC_MEDIASTACK_API_KEY;
  if (!apiKey) {
    console.error("MEDIASTACK_API_KEY is missing. Please set it in your environment variables.");
    return sortNewsByImage(mockResponse);
  }
  const url = `http://api.mediastack.com/v1/news?access_key=${apiKey}&categories=${category}&keywords=${encodedKeywords}&languages=${userLanguage}&countries=${userCountry}&sort=popularity&limit=50`;
  console.log("URL:", url);
  /* console.log("Keywords:", keywords); */
  try {
    const res = await fetch(url, {
      method: 'GET',
      cache: isDynamic ? "no-cache" : "default",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!res.ok) {
      console.error(`API request failed with status ${res.status}: ${res.statusText}`);
      return sortNewsByImage(mockResponse);
    }

    const newsResponse = await res.json();
    let responseData;
    if (newsResponse?.data) {
      responseData = newsResponse;
    } else {
      responseData = { data: [], pagination: { count: 0, limit: 0, offset: 0, total: 0 } };
    }
    /* console.log("Response Data:", responseData); */

    if (!responseData || !Array.isArray(responseData.data)) {
      console.error("Error: No data returned from the API.");
      return sortNewsByImage(mockResponse);
    }

    // Sort function by images vs not images present
    const news = sortNewsByImage(responseData);
    return news;
  } catch (error) {
    console.error("Error fetching news:", error);
    return sortNewsByImage(mockResponse);
  }
};

export default fetchNews;









/* import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
import mockResponse from '../mockResponse.json'

// GraphQL query
const fetchNews = async (category, keywords, isDynamic, userLanguage, userCountry) => {

const query = gql`
  query myQuery(
    $access_key: String!
    $categories: String!
    $keywords: String
    $languages: String!
    $countries: String!
  ){
    myQuery(
      access_key: $access_key
      categories: $categories
      keywords: $keywords
      countries: $countries
      sort: "popularity"      
      languages: $languages
      limit: "50"
      ) {
      data{
            author
            category
            country
            description
            image
            language
            published_at
            source
            title
            url
        }
        pagination{
            count
            limit
            offset
            total
        }
    }
  }
`;
 
// Fetch function with Next.js caching...
const res = await fetch('https://frontovoye.eu-central-a.ibm.stepzen.net/api/getting-started/__graphql', {
  method: 'POST',
  cache: isDynamic ? "no-cache" : "default",
  next: isDynamic ? { revalidate: 0 } : { revalidate: 60 },
  headers: {
    "Content-Type": "application/json",
    Authorization: `Apikey ${process.env.STEPZEN_API_KEY}`,
  },
  body: JSON.stringify({
    query,
    variables: {
      access_key: process.env.MEDIASTACK_API_KEY,
      categories: category,
      keywords: keywords,
      languages: userLanguage,
      countries: userCountry,
      },
    }),
  }
);

const newsResponse = await res.json();
const responseData = newsResponse?.data?.myQuery;

  if (!responseData) {
  console.error("Error: mediastackQuery is undefined in the response.");
  const tempNews = sortNewsByImage(mockResponse);
  return tempNews;
}
// sort function by images vs not images present
const news = sortNewsByImage(responseData)
 
 
return news
};

export default fetchNews; */