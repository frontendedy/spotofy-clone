import React, { useState } from 'react'
import Slider from '../Slider'
import SongCard from '../Slider/components/SongCard'

const Section = ({ data, heading }) => {
    const [show, setShow] = useState(false)

    return (
        <div className='mt-12 mx-12'>
            <div className='flex justify-between mb-[18px]'>
                <h2 className='text-[20px] text-white font-semibold'>{heading}</h2>
                <p className='text-green text-[20px] font-semibold cursor-pointer'
                    onClick={() => setShow(!show)}
                >
                    {!show ? 'Show all' : 'Collapse'}
                </p>
            </div>
            {
                show ? <div className='flex flex-wrap gap-[20px]'>
                    {!data.length ? 'Loading' : data.map((ele) =>
                        <SongCard data={ele} />
                    )}
                </div> : <Slider data={data} />
            }


        </div>
    )
}

export default Section