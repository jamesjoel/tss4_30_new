import React, {useEffect, useState} from 'react'
import axios from 'axios'
const Signup = () => {
    let [city, setCity] = useState([]);
    let [state, setState] = useState([]);

    useEffect(()=>{

        axios.get("http://localhost:3000/api/v1/city")
        .then(response=>{
            // console.log(response.data);
            setState(response.data);
        })


    }, [])
    


  return (
    <>
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 my-5'>
                
                    <div className='card my-5' style={{backgroundColor : "#3b5d50"}}>
                        <div className='card-header'>
                            <h4 className='text-light'>Registration</h4>
                        </div>
                        <div className='card-body'>
                            <div className="form-group my-3">
                                <label className="text-light">Full Name</label>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="form-group my-3">
                                <label className="text-light">Username/Email</label>
                                <input type="text" className="form-control" id="fname" />
                            </div>
                            <div className="form-group my-3">
                                <label className="text-light">Password</label>
                                <input type="password" className="form-control"  />
                            </div>
                            <div className="form-group  my-3">
                                <label className="text-light">Re-Password</label>
                                <input type="password" className="form-control"  />
                            </div>
                            <div className="form-group  my-3">
                                <label className="text-light">Address</label>
                                <textarea className="form-control"  ></textarea>
                            </div>
                            <div className="form-group  my-3">
                                <label className="text-light">Contact</label>
                                <input type="text" className="form-control"  />
                            </div>
                            <div className="form-group  my-3">
                                <label className="text-light">Gender</label>
                                <br />
                                <span className='text-light'>Male</span> <input type='radio' />
                                &nbsp;&nbsp;&nbsp;
                                <span className='text-light'>Female</span> <input type='radio' />
                            </div>
                            <div className='form-group my-3'>
                                <label className='text-light'>State</label>
                                <select className='form-control'>
                                    <option>Select</option>
                                    {
                                        state.map(item=><option>{item}</option>)
                                    }
                                </select>
                            </div>
                            <div className="form-group  my-3">
                                <label className="text-light">City</label>
                                <select className='form-control'>
                                    <option>Select City</option>
                                    {
                                        city.map(item=>{
                                            return(
                                                <option>{item.name}</option>
                                            )
                                        })
                                    }
                                </select>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-dark'>Registartion</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
        <div className='container my-5'>&nbsp;</div>
        <div className='container my-5'>&nbsp;</div>
        
        
        </>
  )
}

export default Signup