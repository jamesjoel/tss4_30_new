import React, {useState} from 'react'
import './Event5.css'

const Event5 = () => {

    let [src, setSrc] = useState('/assets/images/1.jpg');

    let changeImg = (x)=>{
        setSrc('/assets/images/'+x+'.jpg');
    }

  return (
    <div className='container my-4'>
        <div className='row'>
            <div className='col-md-6 offset-md-3'>
               <img src={src} className='img-thumbnail' style={{height : "500px"}} />
               <br />
               <br />
               <img onMouseOver={()=>changeImg(1)} src='/assets/images/1.jpg' className='small-img'/>
               
               <img onMouseOver={()=>changeImg(2)} src='/assets/images/2.jpg' className='small-img'/>
               
               <img onMouseOver={()=>changeImg(3)} src='/assets/images/3.jpg' className='small-img'/>
               
               <img onMouseOver={()=>changeImg(4)} src='/assets/images/4.jpg' className='small-img'/>
               
               <img onMouseOver={()=>changeImg(5)} src='/assets/images/5.jpg' className='small-img'/>
               
            </div>
        </div>
    </div>
  )
}

export default Event5