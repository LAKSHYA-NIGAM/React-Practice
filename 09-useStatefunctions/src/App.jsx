import React,{useState} from 'react'
const App=()=>{
  const[name,setName]=useState('Lakshya')
  const[age,setAge]=useState(20)
  const[num,setNum]=useState(0)
  function changename(){
   setName('shraddha')
  }
  function changeage(){
    setAge(21)
  }
  function Increase(){
    setNum(prev=>prev+1);
  }
  function Decrease(){
    setNum(prev=>prev-1);
  }


  return(
    <div>
      <h1>value of name is {name} <br /> Age is {age}</h1>
      <button onClick={()=>{changename();
         changeage();
      }}>click me</button>
      <div>
        <h1>{num}</h1>
        <button onClick={Increase}>Increase</button>
        <button onClick={Decrease}>Decrease</button>
      </div>
    </div>
  )
}
export default App