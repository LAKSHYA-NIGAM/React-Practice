import React,{useState} from 'react'

const App = () => {
  const [title,setTitle]=useState('')
  const submithandler=(e)=>{
   e.preventDefault();
   console.log("submitted by",title);
   setTitle('');
  }
  const textprint=(e)=>{
    setTitle(e.target.value);
  }
  return (
    <div>
      <form onSubmit={(e)=>{
        submithandler(e);
      }}>
    <input type='text' 
    placeholder="enter your text"
    value={title}
     onChange={(e)=>{
      textprint(e);
    }}></input>
    <button>Submit</button>
    </form>
    </div>
  )
}

export default App