import React from 'react'
import {useState, useEffect} from 'react'

const App = () => {
  const[num1,setNum1] = useState(0)
  const [num2,setNum2] = useState(100)
  function a(){
    console.log("changed A")
  }
  function b(){
    console.log("changed B")
  }
  useEffect(function(){
    a()
  }, [num1])
  useEffect(function(){
    b()
  }, [num2])
  return (
    <div>
      <h1>Num1: {num1}</h1>
      <h1>Num2: {num2}</h1>
      <button onClick={() => setNum1(num1 + 1)}>Increment Num1</button>
      <button onClick={() => setNum2(num2 + 1)}>Increment Num2</button>
    </div>
  )
}

export default App
