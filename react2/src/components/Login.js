import React, {useState} from 'react'


const Login = () => {

  let [x, setX] = useState(true);
  // let [myClass, setMyClass] = useState('btn-info')

  let demo = ()=>{
    if(x==true){
      setX(false);
      // setMyClass('btn-danger');
    }
    else{

      setX(true);
      // setMyClass('btn-info');
    }
  }

  return (
    <>
    <div className="container my-5">
      <div className="row">
        <div className="col-md-12">
          
            
            <button onClick={demo} className={'btn '+ (x==true ? 'btn-info' : 'btn-warning') }>{ x==true ? 'Indore' : 'Mumbai' }</button>
        </div>
      </div>
    </div>
    </>



  )
}

export default Login

/*

if()
{


}
else
{


}



for()

  cons.log()


*/