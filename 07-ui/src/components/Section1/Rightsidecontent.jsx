import React from 'react'
import Rightcardcontent from './Rightcardcontent'

const Rightsidecontent = (props) => {
  return (
    <div className='h-full w-80  bg-black text-white rounded-2xl overflow-hidden relative'>
          <img src={props.img} className='object-cover h-full w-full' />
          <Rightcardcontent idx={props.idx} color={props.color} tag={props.tags}/>
        </div>
  )
}

export default Rightsidecontent
