import React, { useEffect, useState } from 'react'
import SongCard from './components/SongCard'
import { getData } from '../../Api'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const Slider = () => {
  const [topAlbums, setTopAlbums] = useState()
  useEffect(() => {
    console.log(topAlbums)
    getData('albums/top').then((res) => setTopAlbums(res.data)).catch(err => console.log(err))
  }, [])
  return (
    <div className='mt-12 mx-12 flex gap-10 justify-center relative'>
      <Swiper
        spaceBetween={2}
        slidesPerView={6}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          topAlbums && topAlbums.map((data) => <SwiperSlide key={data.id}>
            <SongCard data={data} />
          </SwiperSlide>
          )
        }
        {/* <button className='w-[52px] h-[52px] bg-green border absolute'>Next</button> */}
      </Swiper>
    </div>
  )
}

export default Slider