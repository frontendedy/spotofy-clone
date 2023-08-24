import React from 'react'
import { BiPlay } from 'react-icons/bi'

const SongCard = ({ data }) => {
  const { image, follows, title } = data
  return (
    <div className='group transition inline-block border-b duration-400 ease-in-out w-[210px] bg-light-grey rounded-[8px] p-3 hover:bg-grey cursor-pointer relative'>
      <div class="opacity-0 w-28 bg-light-grey text-white text-center text-xs rounded-lg py-2 absolute z-[999] group-hover:opacity-100 px-4 pointer-events-none">
        Tooltip center
        <svg class="absolute text-white h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255">
          <polygon className="fill-current" points="0,0 127.5,127.5 255,0" fill="#181818"/>
        </svg>
      </div>
      <div className='transition transform group-hover:visible
            translate-y-4 ease-in-out invisible group-hover:translate-y-0 bg-green w-[45px] h-[45px] absolute bottom-[80px] right-[20px] rounded-full flex items-center justify-center'>
        <BiPlay size={32} />
      </div>
      <img src={image} className='rounded-[5px] w-[200px] h-[220px] object-cover object-top' alt="" />
      <p className='text-[16px] text-white font-semibold mt-3'>{title}</p>
      <p className='text-[14px] text-text font-normal mt-1'>{follows} Follows </p>
    </div>
  )
}

export default SongCard