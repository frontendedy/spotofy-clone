import React from 'react'
import { BiPlay } from 'react-icons/bi'

const SongCard = ({ data }) => {
  const { image, follows, title } = data
  return (
    <div className='group transition duration-400 ease-in-out w-[210px] bg-light-grey rounded-[8px] p-3 hover:bg-grey cursor-pointer relative'>
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