import React,{useState} from 'react'

const App = () => {
  const[name,setName]=useState([10,20,30]);
  const changearr=()=>{
  const newname=[...name]
  newname.push(90)
  setName(newname)
  }
  return (
    <div>
     <h1>{name}</h1>
     <button onClick={changearr}>click</button> 
    </div>
  )
}

export default App
