import SongCard from './components/SongCard'
import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import 'swiper/css';

const Slider = ({ data, heading }) => {

  return (
    <div className='mt-12 mx-12'>
      <h2 className='text-[20px] text-white font-semibold'>{heading}</h2>
      <div className='mt-5 flex gap-10 justify-center relative'>
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
            data && data.map((data) => <SwiperSlide key={data.id}>
              <SongCard data={data} />
            </SwiperSlide>
            )
          }
        </Swiper>
      </div>
    </div>
  )
}

export default Slider