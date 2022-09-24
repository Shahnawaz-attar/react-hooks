import React from 'react'

const UseRef = () => {
    const myBtn = React.useRef(null);
    const handle = () =>{
        myBtn.current.style.color = "red"
    }
  return (
    <div>
        <h1>UseRef</h1>
        <button ref={myBtn} onClick={handle}>Click Me</button>
    </div>
  )
}

export default UseRef