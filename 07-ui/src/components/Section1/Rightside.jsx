import React from 'react'
import Rightsidecontent from './Rightsidecontent'
const Rightside = (props) => {
  return (
    <div className='flex flex-nowrap gap-10 px-10 py-5 h-full w-2/3' >
        {props.user.map(function(elem,idx){
          return <Rightsidecontent key={idx} idx={idx+1} color={elem.color} img={elem.img} tags={elem.tag}/>
        })}
    </div>
  )
}

export default Rightside
