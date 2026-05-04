import React from 'react'
import { MoveRight } from 'lucide-react';

const Rightcardcontent = (props) => {
  return (
    <div className='flex flex-col  justify-between absolute top-0 left-0 h-full w-full px-5 py-5'>
               <h1 className='bg-amber-50 text-black rounded-full px-3 py-1 w-fit'>{props.idx}</h1>
               <p className='text-lg font-bold leading-normal mt-auto mb-8 text-amber-100'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur quaerat doloribus officiis, odio consectetur perferendis.</p>
               <div className='flex flex-row justify-between'>
                <button style={{backgroundColor:props.color}} className='text-md font-bold rounded-xl px-2 py-1'>{props.tag}</button>
                <button className='text-md font-bold rounded-xl px-2 py-1'> <MoveRight /></button>
               </div>
              </div>
  )
}

export default Rightcardcontent
