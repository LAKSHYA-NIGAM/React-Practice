import React from 'react'
import Herotext from './Herotext';
import Arrow from './Arrow';

const Leftsize = () => {
  return (
    <div className=' px-5 flex flex-col justify-between  py-5 h-full w-1/3 '>
        <Herotext />
        <Arrow />
    </div>
  )
}

export default Leftsize
