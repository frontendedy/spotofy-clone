import React, { useState } from 'react'
import Slider from '../Slider'
import SongCard from '../Slider/components/SongCard'

const Section = ({ data, heading, genere, setSelected, selected }) => {
    const [show, setShow] = useState(false)

    return (
        <div className='mt-12 mx-12'>
            <div className='flex justify-between mb-[18px]'>
                <h2 className='text-[20px] text-white font-semibold'>{heading}</h2>

                {
                    heading !== 'Songs' && <p className='text-green text-[20px] font-semibold cursor-pointer'
                        onClick={() => setShow(!show)}
                    >
                        {!show ? 'Show all' : 'Collapse'}
                    </p>
                }

            </div>
            {
                heading === 'Songs' && <ul className='flex text-white text-[16px] font-semibold gap-[28px] mb-[23px]'>
                    {
                        genere.map((ele) =>
                            <li
                            onClick={()=>setSelected(ele)}
                                className={`${selected === ele && 'underline decoration-4 underline-offset-8 decoration-green'} cursor-pointer`}>
                                {ele}
                            </li>
                        )
                    }


                </ul>
            }

            {
                show ? <div className='flex flex-wrap gap-[20px] text-white'>
                    {!data.length ? 'Loading' : data.map((ele) =>
                        <SongCard data={ele} />
                    )}
                </div> : <Slider data={data} />
            }


        </div>
    )
}

export default Section