import React from 'react'
import { MdOutlineArrowForwardIos } from 'react-icons/md'
import { useSwiper } from 'swiper/react'

const SwiperNavigationNext = () => {
    const swiper = useSwiper();
    return (
        <button 
        onClick={()=>swiper.slideNext()}  
        className='bg-green w-[32px] h-[32px] absolute z-[9999] right-0 top-0 bottom-0 m-auto flex items-center justify-center text-white rounded-full'>
            <MdOutlineArrowForwardIos />
        </button>
    )
}

export default SwiperNavigationNext