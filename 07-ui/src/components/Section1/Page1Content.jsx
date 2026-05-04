import React from 'react'
import Leftsize from './Leftsize'
import Rightside from './Rightside'

const Page1Content = (props) => {
  return (
    <div className='w-full h-screen bg-gray-200 flex  items-center gap-10 px-10 py-15 justify-between margin mt-40'>
      <Leftsize />
      <Rightside user={props.user} />
    </div>
  )
}

export default Page1Content
