import React from 'react'

const Login = () => {
    return (
        <>
        <div className='container my-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 my-5'>
                    <div className='card my-5' style={{backgroundColor : "#3b5d50"}}>
                        <div className='card-header'>
                            <h4 className='text-light'>Login</h4>
                        </div>
                        <div className='card-body'>
                            <div class="form-group">
                                <label class="text-light">Username/Email</label>
                                <input type="text" class="form-control" id="fname" />
                            </div>
                            <div class="form-group">
                                <label class="text-light">Password</label>
                                <input type="passwrod" class="form-control"  />
                            </div>
                        </div>
                        <div className="card-footer">
                            <button className='btn btn-dark'>Login</button>
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

export default Login