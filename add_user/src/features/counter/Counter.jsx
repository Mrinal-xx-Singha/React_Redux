import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./counterSlice.js";



const Counter = () => {
  const count =useSelector((state) =>state.counter.value)
  const dispatch =useDispatch()
  
    return (
    <div>
        <div>
            <button
            onClick={()=>dispatch(increment)}
            >Increment</button>
            <span>{count}</span>

            <button
            onClick={()=>decrement()}
            >Decrement</button>
        </div>

    </div>
  )
}

export default Counter
