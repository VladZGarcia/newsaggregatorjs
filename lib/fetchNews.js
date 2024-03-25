import { gql } from "graphql-request";
import sortNewsByImage from "./sortNewsByImage";
import response from '../response.json'

// GraphQL query
const fetchNews = async (category, keywords, isDynamic) => {
const query = gql`
  query myQuery(
    $access_key: String!
    $categories: String!
    $keywords: String
  ){
    myQuery(
      access_key: $access_key
      categories: $categories
      keywords: $keywords
      countries: "-es"
      sort: "popularity"      
      languages: "es,-en"
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
const res = await fetch('https://grabovo.stepzen.net/api/getting-started/__graphql', {
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
      },
    }),
  }
);

// console.log(
//   "LOADING NEW DATA FROM API for category >>> ",
//   category,
//   keywords
// );

const newsResponse = await res.json();
console.log("News Response:", newsResponse);
const responseData = newsResponse?.data?.myQuery;

if (!responseData) {
  console.error("Error: mediastackQuery is undefined in the response.");
  const tempNews = sortNewsByImage(response);
  //mockdata if no response
  //const responseData = response
  return tempNews;
}
// sort function by images vs not images present
const news = sortNewsByImage(responseData)
 
 
return news
};

export default fetchNews;