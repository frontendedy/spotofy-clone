import React, { useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const Faq = () => {
    const faqs = [
        {
            id: 1,
            faq: "Is QTify free to use?",
            ans: "Yes! QTify is absolutely free to use"
        },
        {
            id: 2,
            faq: "Can I download and listen to songs offline?",
            ans: "Sorry, unfortunately we don't provide the service to download any songs."
        },

    ]
    const [open, setOpen] = useState(null)

    const handleOpen = (id) =>{
        if(id){
            setOpen(null)
        }
        setOpen(id)
    }

    return (
        <div className='text-center mt-[33px] w-full flex flex-col items-center'>
            <h2 className='text-[50px] text-white font-semibold'>FAQs</h2>
            {
                faqs.map((data) => <div key={data.id} className='max-w-[1135px] w-full bg-white rounded-[10px] mt-[24px]'>
                    <div className='border rounded-[10px] bg-black border-white py-[24px] px-[32px] flex items-center justify-between cursor-pointer'
                    onClick={()=>handleOpen(data.id)}>
                        <p className='text-white text-[20px]'>{data.faq}</p>
                        <IoIosArrowDown className={`text-green ${open === data.id ? 'rotate-180' : 'rotate-0'}`} size={30} />
                    </div>
                    {
                        open === data.id && <div className='text-start py-[24px] px-[32px] text-[18px]'>
                        {data.ans}
                    </div>
                    }
                    
                </div>)
            }
        </div>
    )
}

export default Faq