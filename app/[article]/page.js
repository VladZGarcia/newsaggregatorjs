
import { notFound } from 'next/navigation'
import React from 'react';
import LiveTimestamp from '../../components/LiveTimestamp';
import SentimentAnalysis from '@/lib/SentimentAnalysis';


function ArticlePage({ searchParams }) {

    if (
        (searchParams && Object.entries(searchParams).length === 0) || !searchParams
    ) {
        return notFound();
    }

    const article = searchParams;
    const prompt = 'Är artikeln Objektiv eller subjektiv, positiv eller negativ, vänster, mitten eller höger: '; 

  return (
    <a href={article.url} className="block">
    <article>
        <section className="flex flex-col  pb-10 px-0 lg:px-10">
            {article.image && (
                <img className="h-50 max-w-md mx-auto md:max-w-lg lg:max-w-xl object-cover rounded-lg shadow-md"
                src={article.image}
                alt={article.title}
                />
            )}

            <div className="px-10">
                <h1 className="headerTitle px-0 no-underline pb-2">
                {article.title}
                </h1>

                <div className="flex divide-x-2 space-x-4">
                    <h2 className="font-bold">Autor: {article.author}</h2>
                    <h2 className="font-bold pl-4">Fuente: {article.source}</h2>
                    {/* <p> <LiveTimestamp time={article.published_at} /></p> */}
                </div>
                <p className="py-4">{article.description}</p>
                  </div>
                  
              </section>
              <h2 className='relative z-1 flex items-center h-full mb-5 p-8 border  rounded-3xl overflow-hidden list-disc '><SentimentAnalysis articleTitle={article.title} articleText={article.description} prompt ={prompt}/></h2>
    
    </article>
    </a>
  );
}

export default ArticlePage;