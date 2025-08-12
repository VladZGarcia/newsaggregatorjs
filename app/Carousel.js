'use client'

import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Article from './Article'
import CarouselItem from './CarouselItem'
import Autoscroll from 'embla-carousel-auto-scroll'

function Carousel({ news }) {
  
const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true,loop: true}, [Autoscroll({ speed: 0.5, stopOnMouseEnter: false, stopOnInteraction: false, startDelay: 50 })])

useEffect(() => {
  if (emblaApi) {
    console.log(emblaApi.slideNodes()) // Access API
  }
}, [emblaApi])
  
  const startIndex = 6;
  if (!news || !news.data) {
    return <div>Loading...</div>;
  }
  const articlesWithImages = news.data.filter(article => !!article.image);
  if (articlesWithImages.length === 0) {
    return null;
  }
  return (
    <div className='relative'>
      <div className="embla mb-0 mt-5 mx-10" ref={emblaRef}>
        <div className="relative embla__container h-auto  ">
          {articlesWithImages.slice(startIndex).map((article, idx) => (
            <CarouselItem key={article.url || article.title + idx} article={article} />
          ))}
        </div>
      </div>
      <h2 className="absolute top-0 left-0 text-left font-bold text-white bg-black  px-4 py-2 rounded-t-lg font-serif mx-10">
        Actual
      </h2>
    </div>
  );
}

export default Carousel