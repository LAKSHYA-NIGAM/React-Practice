import React from 'react'

const Card = (props) => {
  return (
    <div className='card'>
        <img src={props.img} alt='Profile'></img>
        <h3>{props.name}</h3>
        <p>Age: {props.age}</p>
        <p>Location: {props.location}</p>
      </div>
  )
}

export default Card
