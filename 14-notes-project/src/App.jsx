import React,{useState} from 'react'

const App = () => {
  const [title, setTitle] = useState('')
  const[details,setDetails]=useState("")
  const[task,setTask]=useState([])
  const submitHandler = (e) => {
  e.preventDefault();

  const obj = { title, details }

  setTask([...task, obj]) 

  setTitle('')
  setDetails("")
}
const delete1=(idx)=>{
  const copytask=[...task]
  copytask.splice(idx,1)
  setTask(copytask)
}

  return (
    <div className="flex h-screen w-screen bg-black text-white">

      {/* LEFT SIDE - FORM */}
      <form 
        onSubmit={(e) => submitHandler(e)} 
        className="flex gap-4 lg:w-1/2 p-10 flex-col items-start"
      >
        <h1 className="text-4xl font-bold">Add Notes</h1>

        <input
          type="text"
          placeholder="Enter Notes Heading"
          className="px-5 w-full font-medium py-2 border-2 outline-none rounded"
          value={title}
          onChange={(e)=>{
            setTitle(e.target.value)
          }}
        />

        <textarea
          placeholder="Write Details"
          className="px-5 w-full font-medium h-32 py-2 border-2 outline-none rounded"
          value={details}
          onChange={(e)=>{
            setDetails(e.target.value)
          }}
        ></textarea>

        <button className="bg-white font-medium w-full outline-none text-black px-5 py-2 rounded">
          Add Note
        </button>
      </form>

      {/* RIGHT SIDE - NOTES DISPLAY */}
      <div className="lg:w-1/2 lg:border-l-2 p-10">
        <h1 className="text-4xl font-bold">Your Notes</h1>

        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map((e, idx) => {
         return (
        <div key={idx} className="bg-white text-black p-4 rounded w-40 h-52">
        <h1 className="font-bold">{e.title}</h1>
        <p>{e.details}</p>
        <button 
        onClick={() => delete1(idx)} 
        className="bg-red-500 text-white p-1 mt-2 rounded"
      >
        Delete
      </button>
    </div>
  )
})}


        </div>
      </div>

    </div>
  )
}

export default App