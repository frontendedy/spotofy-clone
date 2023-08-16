import React from 'react'
import SongCard from './components/SongCard'

const Slider = () => {
  return (
    <div className='mt-12 flex gap-10 justify-center'>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
        <SongCard/>
    </div>
  )
}

export default Slider