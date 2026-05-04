import React from 'react'
import {Bookmark} from 'lucide-react'

const Card = (props) => {
  return (
    <div className='Card'>

        <div className='top'>
            <img src={props.img} alt='amazon logo' />
            <button className='btn'> <Bookmark /> Save</button>
        </div>
        <div className='center'>
           <h3>{props.company} <span> {props.datePosted} </span></h3>
           <h4>{props.post}</h4>
           <div>
            <h4 className='tag1'>{props.tag1}</h4>
            <h4 className='tag2'>{props.tag2}</h4>
           </div>
        </div>
        <div className='bottom'>
           <div>
            <h4>Salary</h4>
            <h4>{props.pay}</h4>
            </div>
            <button className='btn'>Apply Now</button>
        </div>
    </div>  
    )
}

export default Card
