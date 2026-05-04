import React from 'react'
import Card from './components/Card'
const App = () => {
  return (
    <div className='parent'>
      <Card name="Lakshya Nigam" age={22} location="India" img="https://images.unsplash.com/photo-1774719194893-a8e7f20363b1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name="John Doe" age={30} location="USA" img="https://images.unsplash.com/photo-1777223130640-d0e29c171358?q=80&w=736&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      <Card name="Jane Smith" age={28} location="UK" img="https://images.unsplash.com/photo-1777128248968-762739f9b7bd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"/>
    </div>
  )
}

export default App
