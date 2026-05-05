import React from 'react'

const App = () => {
  const user1 = {
    name:"John",
    age:30,
    city:"New York"
  }
  localStorage.setItem("user", JSON.stringify(user1))
  let data=localStorage.getItem("user")
  data=JSON.parse(data)
  console.log(data)
  return (
    <div>
    </div>
  )
}

export default App
