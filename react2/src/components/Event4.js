import React, {useState} from 'react'

const Event4 = () => {

    let [p, setP] = useState(0);
    let [q, setQ] = useState(0)

    let moveHandler = ()=>{
        let a = Math.random()*1000;
        let b = Math.floor(a);
        
        let x = Math.random()*600;
        let y = Math.floor(x);

        setQ(b);
        setP(y);
    }


  return (
    <div onMouseMove={moveHandler} style={{marginTop : p+"px", marginLeft : q+"px", height : "100px", width : "100px", backgroundColor : "#000", borderRadius : "50px"}}></div>
)
}

export default Event4