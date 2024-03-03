import ComponentD from "./ComponentD"

import { useContext } from "react"
import { userContext } from "./ComponentA"

const ComponentC = () => {

const userName =useContext(userContext)
    return (
    <div className="box">
        <h1>ComponentC</h1>
        <h2>{`Hello again ${userName}`}</h2>
    <ComponentD />
    </div>
  )
}

export default ComponentC