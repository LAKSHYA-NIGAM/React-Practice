import React from 'react'
const App = () => {
  function btnclicked() {
    console.log("button is clicked");
  }

  const mouse = () => {
    console.log("mouse is hovered");
  }
  function inputvalue(val){
    console.log(val);
  }
  function pagescrolling(val) {
    if(val > 0){
      console.log("page scrolling downwards");
    }
    else{
      console.log("page scrolling upwards");
    }
  }
  return (
    <div>
      <button 
        className='btn' 
        onMouseEnter={mouse} 
        onClick={btnclicked}
      >
        Click Me
      </button>
      <input type="text" placeholder='enter name' onChange={function(elem){
       inputvalue(elem.target.value);
      }}></input>
      <div className='box' onMouseMove={(elem)=>{
        console.log(elem.clientX);
      }}>
      </div>
      <div onWheel={(elem)=>{
        pagescrolling(elem.deltaY);
      }}>
        <div className='page1'></div>
        <div className='page2'></div>
        <div className='page3'></div>
      </div>
    </div>
  )
}

export default App