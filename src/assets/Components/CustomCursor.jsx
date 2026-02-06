import React, { useEffect, useState } from 'react'

const CustomCursor = () => {
const [position,setPosition]=useState({x:0,y:0})

useEffect(()=>{
    const movehandler=(e)=>{
     setPosition({x:e.clientX,y:e.clientY})
    };

    window.addEventListener("mousemove",movehandler)
    return ()=> window.removeEventListener("mousemove",movehandler)
},[])


  return (
    <div className='pointer-events-none z-9999 fixed top-0 left-0' style={{transform:`translate(${position.x - 40}px, ${position.y - 40}px)`}}>
        <div className='w-20 h-20 rounded-full  bg-linear-to-r from-pink-500 to-blue-500 blur-3xl opacity-80'></div>
      
    </div>
  )
}

export default CustomCursor
