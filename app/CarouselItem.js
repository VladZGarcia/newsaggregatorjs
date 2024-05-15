'use client'

import React from 'react';
import LiveTimestamp from '../components/LiveTimestamp';

const { useRouter } = require("next/navigation");

function CarouselItem({ article }) {
  if (!article.image) {
    return null;
  }

  const router = useRouter();
    const querystring = require('querystring');

    const handleClick = () => {
        const queryString = querystring.stringify(article);
        console.log(queryString)
        const url = `/article?${queryString}`;
        console.log(url)
            router.push(url);
  }
  
  return (
    <div className="embla__container h-auto p-1 gap-10" onClick={handleClick} >
      <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out embla__slide items-center justify-center h-auto ">
        <h2 className="absolute top-0 left-0 right-0 text-center font-bold text-white bg-black bg-opacity-70 px-4 py-2 rounded-t-lg font-serif">
          {article.title}
        </h2>
        <div className="flex-1 flex flex-col justify-end w-full">
          <footer className="absolute bottom-0 left-0 right-0 text-xs text-center px-4 py-2 bg-black bg-gradient-to-t from-black bg-opacity-10 text-white">
          <p className="italic text-gray-100">{article.source}</p>
            {/* <p>
              <LiveTimestamp time={article.published_at} />
            </p> */}
          </footer>
        </div>
        <img
          src={article.image}
          alt={article.title}
          className="h-56 w-full object-cover rounded-t-lg shadow-md"
        />
      </article>
    </div>
  );
}

export default CarouselItem;
