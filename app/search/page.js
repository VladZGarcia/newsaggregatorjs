
import React from 'react';
import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";
import { categories } from '@/constants';
import sortNewsByImage from '@/lib/sortNewsByImage';
import Carousel from '../Carousel';
import MasonryGrid from '../MasonryGrid';
import getUserLanguageAndCountry from '@/lib/getUserLanguageAndCountry';


async function SearchPage({ searchParams }) {
    let news = { data: [] };
    const params = await searchParams;


    try {
        // Get user language and country (server-side: defaults)
        const { language, country } = getUserLanguageAndCountry();
        news = await fetchNews(
            categories.join(','),
            params?.term,
            true,
            language,
            country
        );
    } catch (error) {
        console.error('Error fetching news:', error);
    }

    /* console.log('News length: ', news.data.length); */

    return (
        <div>
            <h1 className="headerTitle">Search Results for: {params?.term}</h1>
            {news.data.length > 0 ? (
                <>
                    <Carousel news={news} />
                    {<MasonryGrid news={news} />}
                    <NewsList news={news} />
                </>
            ) : (
                <p className="text-red-500 text-center mt-4 p-20">No search results found. Try different keywords</p>
            )}
        </div>
    );
}

export default SearchPage;
