import React from 'react'

const Navbar = () => {
  return (
    <div className=' absolute top-0 left-0 w-full flex items-center justify-between px-16 py-6 bg-white shadow-md '>
      <h4 className='bg-black text-white px-5 py-3 rounded-full'>
        TARGET AUDIENCE
      </h4>
      <button className='bg-gray-500 text-white px-5 py-3 rounded-full hover:bg-gray-200'>
        Digital Dancing Platform
      </button>

    </div>
  )
}

export default Navbar