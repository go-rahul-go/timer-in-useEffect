import React, { useEffect, useRef, useState } from 'react'

const Timer = () => {
    const [time,setTime]=useState(10)
    const intervalRef=useRef();
    const boxRef=useRef();
    useEffect(()=>{
        intervalRef.current = setInterval(()=> setTime(time-1),1000);

        if(time===0)
        {
            clearInterval(intervalRef.current)
            boxRef.current.style.backgroundColor="red"
            boxRef.current.style.color="white"
            boxRef.current.style.boxShadow="0px 0px 50px red"
        }
    })
  return (
    <div className="box" ref={boxRef}>
        <p>{time}</p>
    </div>
  )
}

export default Timer