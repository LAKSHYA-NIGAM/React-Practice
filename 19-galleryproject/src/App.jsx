import React from 'react'
import axios from 'axios'
import {useState,useEffect} from 'react'
import Card from './Components/Card'

const App = () => {
  const [userData,setUserData] = useState([])
  const[index,setIndex] = useState(1)
  const data=async ()=>{
    const data1=await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=18`)
    setUserData(data1.data)
  }
  useEffect(function(){
    data()
  },[index])
  var printdata="no users available"
  if(userData.length>0){
    printdata=userData.map(function(e,idx){
      return (
        <div key={idx}>
          <Card e={e}/>
        </div>
      )
    })
  }
  return (
    <div className='bg-black text-white p-4 min-h-screen'>
     <div className='flex flex-wrap gap-4'>{printdata}</div>
     <div className='flex justify-center gap-3 mt-4 items-center'>
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4' onClick={()=>{
        if(index>0){
          setIndex(index-1)
          setUserData([])
        }
      }}>prev</button>
      <h3>page {index}</h3>
      <button className='bg-blue-500 text-white px-4 py-2 rounded mt-4' onClick={()=>{
        setIndex(index+1)
        setUserData([])
      }}>next</button>
     </div>
    </div>
  )
}

export default App
