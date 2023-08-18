import React from 'react'

const SongCard = ({ data }) => {
  const { image, follows, title } = data
  return (
    <div className='w-[200px] bg-black rounded-[8px] p-3 transition-transform hover:bg-grey cursor-pointer'>
      <img src={image} className='rounded-[5px] w-[200px] h-[220px] object-cover object-top' alt="" />
      <p className='text-[16px] text-white font-semibold mt-3'>{title}</p>
      <p className='text-[14px] text-text font-normal mt-1'>{follows} Follows </p>
    </div>
  )
}

export default SongCard