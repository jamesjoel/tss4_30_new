import React, {useState} from 'react'

const Contact = () => {

  let [num, setNum] = useState(0);

  let inc = ()=>{
    // setNum(1)
    setNum(()=>{
      let x = num;
      x++;
      return x;
    })
  }
  let dec = ()=>{
    // setNum(1)
    setNum(()=>{
      let x = num;
      x--;
      return x;
    })
  }

  return (
    <>
    <div>Contact</div>

    <h1>{ num }</h1>
    <button onClick={inc} className='btn btn-info'>+</button>
    <button onClick={dec} className='btn btn-danger'>-</button>
    </>
  )
}

export default Contact