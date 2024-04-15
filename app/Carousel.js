'use client'

import React, {useEffect} from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Article from './Article'
import CarouselItem from './CarouselItem'
import Autoplay from 'embla-carousel-autoplay'

function Carousel({news}) {
const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true}, [Autoplay({ delay: 3200 })])

useEffect(() => {
  if (emblaApi) {
    console.log(emblaApi.slideNodes()) // Access API
  }
},[emblaApi])

  return (
    <div className="embla mx-auto  mt-12 max-w-screen-lg border" ref={emblaRef}>
      <div className="embla__container h-auto ">
          {news.data.map((article) => (
          <CarouselItem key={article.title} article={article} />
        ))}
      </div>
    </div>

  )
}

export default Carousel