import React from 'react'
import { BiPlay } from 'react-icons/bi'

const Player = ({playing}) => {
    if(playing)
    return (
        <div className='h-[130px] fixed bottom-0 bg-black w-full z-50 flex items-center justify-center'>
            <div className='absolute left-[32px] flex gap-[8px] items-center'>
                <div className="bg-grey w-[75px] h-[82px] rounded-[10px]"></div>
                <div className='text-[16px] text-white flex flex-col'>
                    <p>Song name</p>
                    <p>Album name</p>
                </div>
            </div>
            <div className='flex flex-col w-full items-center justify-center gap-[25px]'>
                <div className='w-[48px] h-[48px] bg-white flex items-center justify-center rounded-full cursor-pointer'>
                    <BiPlay size={35} />
                </div>
                <div className='flex items-center text-white text-[14px] gap-[7px]'>
                    <p>0:38</p>
                    <div className='w-[676px] bg-white h-[6px] rounded-lg'>
                        <div className='w-[120px] bg-green h-full rounded-lg'></div>
                    </div>
                    <p>3:38</p>
                </div>
            </div>
        </div>

    )
}

export default Player