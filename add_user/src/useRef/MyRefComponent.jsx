import {useEffect,useRef} from 'react'

const MyRefComponent = () => {

    const inputRef1 = useRef("")
    const inputRef2 = useRef("")
    const inputRef3 = useRef("")
    const inputRef4 = useRef("")

    useEffect(()=>{
        console.log("Component Rendered")
    })




  function handleClick1 (){
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor="yellow"
    inputRef2.current.style.backgroundColor=""
    inputRef3.current.style.backgroundColor=""
    inputRef4.current.style.backgroundColor=""
  }
  function handleClick2 (){
    inputRef2.current.focus()
    inputRef1.current.style.backgroundColor=""
    inputRef2.current.style.backgroundColor="yellow"
    inputRef3.current.style.backgroundColor=""
    inputRef4.current.style.backgroundColor=""
  }
  function handleClick3 (){
    inputRef1.current.focus()
    inputRef1.current.style.backgroundColor=""
    inputRef2.current.style.backgroundColor=""
    inputRef3.current.style.backgroundColor="yellow"
    inputRef4.current.style.backgroundColor=""
  }
  function handleClick4 (){
    inputRef4.current.focus()
    inputRef1.current.style.backgroundColor=""
    inputRef2.current.style.backgroundColor=""
    inputRef3.current.style.backgroundColor=""
    inputRef4.current.style.backgroundColor="yellow"
  }
  
    return (
    <>
    <button
    onClick={handleClick1}
    >Click Me
    </button>
    <input type="text"
    placeholder='type..'
    ref={inputRef1}
    />
        <button
    onClick={handleClick2}
    >Click Me
    </button>
    <input type="text"
    placeholder='type..'
    ref={inputRef2}
    />

<button
    onClick={handleClick3}
    >Click Me
    </button>
    <input type="text"
    placeholder='type..'
    ref={inputRef3}
    />

<button
    onClick={handleClick4}
    >Click Me
    </button>
    <input type="text"
    placeholder='type..'
    ref={inputRef4}
    />


    </>
  )
}

export default MyRefComponent