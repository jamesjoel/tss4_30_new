import React, {useState} from 'react'

const Event3 = () => {

    let [x, setX] = useState(0)
    let [y, setY] = useState(0)

    let moveHandler = (event)=>{
        setX(event.clientX-50)
        setY(event.clientY)
    }

  return (
    <>
    <h1>Position ---- X : {x}  Y : {y}</h1>
    <div onMouseMove={(event)=>moveHandler(event)} style={{backgroundColor : "#ccc", height : "500px", width : "100%"}}></div>
    </>
  )
}

export default Event3