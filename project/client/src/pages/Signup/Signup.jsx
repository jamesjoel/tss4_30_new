import React from 'react'

const Signup = () => {
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
                            <div class="form-group my-3">
                                <label class="text-light">Full Name</label>
                                <input type="text" class="form-control" />
                            </div>
                            <div class="form-group my-3">
                                <label class="text-light">Username/Email</label>
                                <input type="text" class="form-control" id="fname" />
                            </div>
                            <div class="form-group my-3">
                                <label class="text-light">Password</label>
                                <input type="password" class="form-control"  />
                            </div>
                            <div class="form-group  my-3">
                                <label class="text-light">Re-Password</label>
                                <input type="password" class="form-control"  />
                            </div>
                            <div class="form-group  my-3">
                                <label class="text-light">Address</label>
                                <textarea class="form-control"  ></textarea>
                            </div>
                            <div class="form-group  my-3">
                                <label class="text-light">Contact</label>
                                <input type="text" class="form-control"  />
                            </div>
                            <div class="form-group  my-3">
                                <label class="text-light">Gender</label>
                                <br />
                                <span className='text-light'>Male</span> <input type='radio' />
                                &nbsp;&nbsp;&nbsp;
                                <span className='text-light'>Female</span> <input type='radio' />
                            </div>
                            <div class="form-group  my-3">
                                <label class="text-light">City</label>
                                <select className='form-control'>
                                    <option>Select City</option>
                                    <option>Indore</option>
                                    <option>Mumbai</option>
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