import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai';

const NavBar = () => {
  return (
    <nav className='bg-green px-[32px] py-[13px] flex justify-between items-center'>
      <p>Logo</p>
      <div className='py-[14px] px-[20px] bg-white flex border border-black items-center rounded-[8px] max-w-[568px] w-full'>
        <input type="text" className='!outline-none max-w-[502px] w-full '/>
        <AiOutlineSearch size={25}/>
      </div>
      <button className='px-[16px] py-[10px] bg-black text-green text-[18px] font-semibold rounded-[8px]'>Give Feedback</button>
    </nav>
  )
}

export default NavBar