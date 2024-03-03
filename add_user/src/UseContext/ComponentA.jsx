
import { useState,createContext } from 'react'
import ComponentB from './ComponentB'

export const userContext = createContext();



const ComponentA = () => {

    const[user,setUser]=useState("MrinalSingha")
  return (
    <div className='box'>
        <h1>ComponentA</h1>
        <h2>{`Hello ${user}`}</h2>
        <userContext.Provider value={user}>
        <ComponentB user={user}/>
        </userContext.Provider>
   
        
    </div>
  )
}

export default ComponentA