import React from 'react'


const Login = () => {

  let arr = ["red", "green", "blue", "yellow"]


  return (
    <>
    
    <div>Login</div>

    {
      arr.map(item=>{
        return <h1>{ item }</h1>
      })
    }


    </>



  )
}

export default Login