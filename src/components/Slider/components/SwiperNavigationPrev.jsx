import React from 'react'
import { MdOutlineArrowBackIosNew } from 'react-icons/md'
import { useSwiper } from 'swiper/react'

const SwiperNavigationPrev = () => {
    const swiper = useSwiper();
    return (
        <button 
        onClick={()=>swiper.slidePrev()}
        className='bg-green w-[32px] h-[32px] absolute z-[9999] left-0 top-0 bottom-0 m-auto flex items-center justify-center text-white rounded-full'>
            <MdOutlineArrowBackIosNew />
        </button>
    )
}

export default SwiperNavigationPrev