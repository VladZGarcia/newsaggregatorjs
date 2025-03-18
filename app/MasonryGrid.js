'use client'

import React from "react";

const { useRouter } = require("next/navigation");


function MasonryGrid({ news }) {
  console.log(news.data.length)
  //const shuffledArticles = shuffleArray(news.data);
  
    const [article1, article2, article3, article4, article5, article6] = news.data.slice(0, 6);
    
  
  
  const router = useRouter();
  const querystring = require('querystring');
  const handleClick = (article) => {
    const queryString = querystring.stringify(article);
    console.log(queryString)
    const url = `/article?${queryString}`;
    console.log(url)
    router.push(url);
  }

  return (
    <div className="container mx-auto px-10 py-5  lg:pt-10 flex items-center">
      <div className="-m-1 flex flex-col sm:flex-row lg:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          <div className="w-full lg:w-1/2 p-1 md:p-2" onClick={() => handleClick(article1)}>
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col  shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article1.title}
            </h2>
              <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={article1.image}
              />
          </article>
          </div>
          <div className="w-full lg:w-1/2 p-1 md:p-2" onClick={() => handleClick(article2)}>
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article2.title}
            </h2>
              <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={article2.image}
              />
          </article>
            </div>
          <div className="w-full p-1 md:p-2" onClick={() => handleClick(article3)}>
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article3.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center max-h-none lg:max-h-[1000px]"
              src={article3.image}
              />
          </article>
          </div>
        </div>
        <div className="flex w-full sm:w-1/2 flex-wrap">
          <div className="w-full p-1 md:p-2" onClick={() => handleClick(article4)}>
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article4.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full object-cover object-center"
              src={article4.image}
              />
          </article>
          </div>
          <div className="lg:w-1/2 p-1 md:p-2" onClick={() => handleClick(article5)}>
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article5.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={article5.image}
              />
          </article>
          </div>
          <div className="lg:w-1/2 p-1 md:p-2" onClick={() => handleClick(article6)}>
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article6.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full  object-cover object-center"
              src={article6.image}
              />
          </article>
          </div>
        </div>
      </div>
    </div>
       );
 };
 export default MasonryGrid;
