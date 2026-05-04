import React,{useState} from 'react'

const App = () => {
  const [name,setName]=useState({user:'lakshya',age:20})
  const change=()=>{
   const newname={...name};
   newname.user='shraddha';
   newname.age='22'
   setName(newname);
  }
  return (
    <div>
    <h1>{name.user},{name.age}</h1>
    <button onClick={change}>click</button>
    </div>
  )
}

export default App
