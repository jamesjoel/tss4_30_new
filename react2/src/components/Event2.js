import React from 'react'

const Event2 = () => {
    let demo1 = ()=>{
        console.log("welcome")
    }
    let demo2 = ()=>{
        console.log("Bye...")
    }
    let demo3 = ()=>{
        console.log("********");
    }

  return (
    <div onMouseMove={demo3} onMouseOut={demo2} onMouseOver={demo1} style={{ height : "200px", width : "200px", backgroundColor : "#000"}}></div>
  )
}

export default Event2