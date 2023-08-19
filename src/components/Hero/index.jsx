import React from 'react'

const Hero = () => {
  return (
    <div className='bg-gradient-to-b from-grey to-black h-[270px] flex gap-[30px] items-center justify-center'>
      <div className=' text-center'>
        <h1 className='text-[32px] font-semibold text-white'>100 Thousand Songs, ad-free</h1>
        <h2 className='text-[32px] font-semibold text-white'>Over thousands podcast episodes</h2>
      </div>
      <img src="headphones.png" className='w-[212px] h-[212px]' alt="" />
    </div>
  )
}

export default Hero