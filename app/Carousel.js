'use client'

import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Article from './Article'
import CarouselItem from './CarouselItem'
import Autoscroll from 'embla-carousel-auto-scroll'

function Carousel({news}) {
const [emblaRef, emblaApi] = useEmblaCarousel({ dragFree: true,loop: true}, [Autoscroll({ speed: 1, stopOnMouseEnter: false, stopOnInteraction: false, startDelay: 50 })])

useEffect(() => {
  if (emblaApi) {
    console.log(emblaApi.slideNodes()) // Access API
  }
},[emblaApi])

  return (
    
    <div className='relative'>
        <div className="embla mt-12 mx-10" ref={emblaRef}>
          <div className="relative embla__container h-auto  ">
          {news.data.map((article) => (
          <CarouselItem key={article.title} article={article} />
            ))}
          </div>
        </div>
        <h2 className="absolute top-0 left-0 text-left font-bold text-white bg-black  px-4 py-2 rounded-t-lg font-serif mx-10">
          Actual
        </h2>
    </div>

  )
}

export default Carousel