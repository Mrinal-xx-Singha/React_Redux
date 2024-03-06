import  { useEffect, useState } from 'react'



const getDate = ()=>{
    const today = new Date()
    const month =today.getMonth() + 1
    const year = today.getFullYear()
    const date = today.getDate()

    return `${month}/${date}/${year}`
    
}






const DisplayDate = () => {

    const [currentDate,setCurrentDate] = useState(getDate())
  
    useEffect(()=>{
      setCurrentDate(currentDate)

    },[currentDate])
  
    return (
    <div>
        <h1>Todays Date</h1>
        <p>{currentDate}</p>
    </div>
  )
}

export default DisplayDate