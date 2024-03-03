import {useState,useEffect} from 'react'

const DigitalClock = () => {
    const[time,setTime] =useState(new Date())

    useEffect(()=>{
        const interValId=setInterval(()=>{
            setTime(new Date())
        },1000)

        return ()=>{
            clearInterval(interValId)
        }

    },[])

    function formatTime(){
        let hours =time.getHours()
        const minutes =time.getMinutes()
        const seconds =time.getSeconds()
        const meridiem = hours >= 12 ? "PM" : "AM"
        
        hours = hours % 12 || 12;

        return `${paddZero(hours)}:${paddZero(minutes)}:${paddZero(seconds)} ${meridiem}`
    }


    function paddZero(number){
        return (number < 10 ?"0":"") + number;

    }
  return (
    <div className='clock-container'>
        <div className='clock'>
            <span>{formatTime()}</span>
        </div>
    
    </div>
  )
}

export default DigitalClock