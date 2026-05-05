import React,{useState} from 'react'
import axios from 'axios'

const App = () => {
  const[data,setData]=useState([])
  const displaydata=async ()=>{
    const res=await axios.get('https://picsum.photos/v2/list')
    setData(res.data)
  }
  return (
    <div>
    <button onClick={displaydata} >Display Data</button>
    <div>
      <h3>Displaying Data:    </h3>
        {data.map(function(e,idx){
           return(
            <h4 key={idx}>
              hello {idx} {e.author}
            </h4>
           )
        }
      )}
    </div>
    </div>
  )
}

export default App
