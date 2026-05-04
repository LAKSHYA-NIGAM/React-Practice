import React from 'react'

const App = () => {
  const submithandler=(e)=>{
   e.preventDefault();
   console.log("submitted");
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e);
      }}>
    <input type='text' placeholder="enter your text"></input>
    <button>Submit</button>
    </form>
    </div>
  )
}

export default App
