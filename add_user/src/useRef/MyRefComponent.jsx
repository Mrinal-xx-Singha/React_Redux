import React,{useState,useEffect,useRef} from 'react'

const MyRefComponent = () => {

 
    const inputRef = useRef("")
    useEffect(()=>{
        console.log("Component Rendered")
    })
  
  function handleClick (){
    inputRef.current.focus()
  }
  
    return (
    <>
    <button
    onClick={handleClick}
    >Click Me
    </button>
    <input type="text"
    placeholder='type..'
    ref={inputRef}
    />

    </>
  )
}

export default MyRefComponent