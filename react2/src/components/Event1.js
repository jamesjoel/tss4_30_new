import React, {useState} from 'react'

const Event1 = () => {

    

    let clickHandler = (e)=>{
        
        console.log("__________")
    }

    let contextHander = (event)=>{
        console.log("##############")
        event.preventDefault();
    }
    
    let pasteHandler = (event)=>{
        
        event.preventDefault();
    }

    let Demo = ()=>{
        console.log("@@@@@@@@@")
    }

  return (
    <div className='row'>
        <div className='col-md-12'>
            
            {/* <button onClick={clickHandler} className='btn btn-info'>OK</button> */}
            <button onDoubleClick={Demo} onContextMenu={(event)=>contextHander(event)} onClick={(event)=>clickHandler(event)} className='btn btn-info'>OK</button>

            <br />
            <br />
            <input type='text' onPaste={(event)=>pasteHandler(event)} />
        </div>
    </div>
  )
}

export default Event1