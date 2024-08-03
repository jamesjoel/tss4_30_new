import React, {useState} from 'react'

const Event6 = () => {

    let [col1, setCol1] = useState("white");

    let demo1 = ()=>{
        setCol1("red");
    }
    let demo2 = ()=>{
        setCol1("yellow");
    }

    let demo3 = (e)=>{
        e.preventDefault();
        console.log("#####")
    }
  return (
    <div className="container my-5">
        <div className="row">
            <div className="col-md-12">
                <input onBlur={demo2} onFocus={demo1} style={{backgroundColor : col1}} type='text' />
                <br />
                <br />
                <input type='text' onCopy={(event)=>demo3(event)}/>
                <br />
                <br />
                <input type='text' />
                <br />
            </div>
        </div>
    </div>
  )
}

export default Event6