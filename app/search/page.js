import React from 'react';
import fetchNews from "@/lib/fetchNews";
import NewsList from "../NewsList";
import { categories } from '@/constants';
import sortNewsByImage from '@/lib/sortNewsByImage';
import Carousel from '../Carousel';
import MasonryGrid from '../MasonryGrid';

async function SearchPage({ searchParams }) {
    let news = [];

    try {
        news = await fetchNews(
            categories.join(','),
            searchParams?.term,
            true
        );
        console.log('Fetched news:', news);
    } catch (error) {
        console.error('Error fetching news:', error);
    }

    console.log('News length: ', news.data.length);

    return (
        <div>
            <h1 className="headerTitle">Search Results for: {searchParams?.term}</h1>
            {news.data.length > 0 ? (
                <>
                    <Carousel news={news} />
                    {/* <MasonryGrid news={news} /> */}
                    <NewsList news={news} />
                </>
            ) : (
                <p className="text-red-500 text-center mt-4 p-20">No search results found. Try different keywords</p>
            )}
        </div>
    );
}

export default SearchPage;
