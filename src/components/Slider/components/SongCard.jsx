import React from 'react'

const SongCard = () => {
  return (
    <div className='w-[200px] h-[270px] bg-grey rounded-[8px] p-3'>
        <img src="album.jpg" className='rounded-[8px]' alt="" />
        <p className='text-[16px] text-white font-semibold mt-3'>Pain</p>
        <p className='text-[14px] text-white font-normal'>Ryan Jones</p>
    </div>
  )
}

export default SongCard