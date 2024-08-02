import React, {useState} from 'react'

const About = () => {

  let x = false;

  let [name, setName] = useState("Vijay")  // state
  let [num, setNum] = useState(100);

  let demo = ()=>{
    
    setName("Amar")
  }

  let demo2 = ()=>{

    setNum(()=>{
      if(x==true){
        return 500;
      }
      else{
        return 1000;
      }

   })
  }
  
  return (
    <>
    <div>About</div>
    <h1>{name}</h1>
    <h1>{num}</h1>
    <br />
    <br />
    <button onClick={demo} className='btn btn-info'>OK</button>
    <button onClick={demo2} className='btn btn-danger'>Click</button>
  
    </>
  )
}

export default About