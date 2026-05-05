import React from 'react'

const Card = (props) => {
  return (
    <div>
      <a href={props.e.url} target='_blank>'>
            <div className='h-50 w-58 bg-white rounded overflow-hidden'>
        <img src={props.e.download_url} className='h-full w-full object-cover' />
        </div>
        <h1 className='text-lg font-bold mt-2'>{props.e.author}</h1>
          </a>
    </div>
  )
}

export default Card
