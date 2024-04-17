import React from "react";
import MasonryGridItem from './MasonryGridItem'
import Article from './Article'


function MasonryGrid ({news}) {

    //const shuffledArticles = shuffleArray(news.data);
    const [article1, article2, article3, article4, article5, article6] = news.data.slice(0, 6);

    const articlesSmall1 = news.data.slice(0, 2);
    const articleBig1 = news.data[2];
    const articleBig2 = news.data[3];
    const articlesSmall2 = news.data.slice(4, 6);

  return (
    <div className="container mx-auto px-10 py-2  lg:pt-24 flex items-center">
      <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
        <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
          <a href={article1.url} className="w-full lg:w-1/2 p-1 md:p-2">
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article1.title}
            </h2>
              <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={article1.image}
              />
          </article>
          </a>
          <a href={article2.url} className="w-full lg:w-1/2 p-1 md:p-2">
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article2.title}
            </h2>
              <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={article2.image}
              />
          </article>
            </a>
          <a href={article3.url} className="w-full p-1 md:p-2">
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article3.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center max-h-none lg:max-h-[1000px]"
              src={article3.image}
              />
          </article>
          </a>
        </div>
        <div className="flex w-full sm:w-1/2 flex-wrap">
          <a href={article4.url} className="w-full p-1 md:p-2">
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article4.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={article4.image}
              />
          </article>
          </a>
          <a href={article5.url} className="w-1/2 p-1 md:p-2">
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article5.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={article5.image}
              />
          </article>
          </a>
          <a href={article6.url} className="w-1/2 p-1 md:p-2">
          <article className="relative bg-slate-100 dark:bg-slate-800 flex flex-col rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-slate-200 transition-all duration-200 ease-out items-center justify-center h-full">
            <h2 className="absolute bottom-0 left-0 right-0 text-center font-bold text-white bg-black bg-gradient-to-t from-black bg-opacity-5 px-4 py-2 rounded-t-lg font-serif">
              {article6.title}
            </h2>
            <img
              alt="gallery"
              className="block h-full w-full rounded-lg 2xl:rounded-2xl object-cover object-center"
              src={article6.image}
              />
          </article>
          </a>
        </div>
      </div>
    </div>
       );
 };
 export default MasonryGrid;
//     <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-24 flex items-center">
//       <div className="-m-1 flex flex-row sm:flex-wrap md:-m-2">
//         <div className="flex w-full sm:w-1/2 flex-wrap lg:flex-row flex-row-reverse">
//             {articlesSmall1.map((article, index) => (
//                 <div key={index} className="w-full p-1 md:p-2">
//                     <MasonryGridItem article={article} />
//                 </div>
//             ))}
//           <div className="w-full p-1 md:p-2">
//                 <MasonryGridItem article={articleBig1} />
//           </div>
//         </div>
//         <div className="flex w-full sm:w-1/2 flex-wrap">
//             <div className="w-full p-1 md:p-2">
//                 <MasonryGridItem article={articleBig2} />
//             </div>
//           {articlesSmall2.map((article, index) => (
//           <div key={index} className="w-1/2 p-1 md:p-2">
//             <MasonryGridItem article={article} />
//           </div>
//         ))}
//         </div>
//       </div>
//     </div>


// // Function to shuffle an array(Fisher-Yates)
// function shuffleArray(array) {
//   for (let i = array.length - 1; i > 0; i--) {
//     const j = Math.floor(Math.random() * (i + 1));
//     [array[i], array[j]] = [array[j], array[i]];
//   }
//   return array;
// }

