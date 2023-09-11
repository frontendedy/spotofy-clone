import SongCard from './components/SongCard'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import SwiperNavigationPrev from './components/SwiperNavigationPrev';
import SwiperNavigationNext from './components/SwiperNavigationNext';

const Slider = ({ data }) => {
  return (
    <div className='relative'>
      <Swiper
        modules={[Navigation, Pagination, A11y]}
        spaceBetween={2}
        // slidesPerView={6}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          400:{
            slidesPerView:2,
          },
          639: {
            slidesPerView: 3,
          },
          865:{
            slidesPerView:4
          },
          1000:{
            slidesPerView:6
          },
          1500:{
            slidesPerView:7
          }
        }}
      
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {
          data && data.map((data) => <SwiperSlide key={data.id}>
            <SongCard data={data} />
          </SwiperSlide>
          )
        }
        <SwiperNavigationPrev />
        <SwiperNavigationNext />
      </Swiper>
    </div>
  )
}

export default Slider