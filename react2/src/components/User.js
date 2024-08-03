import React, {useState} from 'react'
import axios from 'axios'

const User = () => {

    let [user, setUser] = useState([]);
    let [showSpinner, setShowSpinner] = useState(false);

    let getData = ()=>{
        setShowSpinner(true);

        axios.get("https://jsonplaceholder.typicode.com/users").then(apidata=>{
            // console.log(apidata.data)
            setUser(apidata.data);
            setShowSpinner(false);
        })
    }

  return (
    <div className="container my-5">
        <div className="row">
            <div className='col-md-12'>
                <button onClick={getData} className='btn btn-success'>Get Data { showSpinner==true ? <span className='spinner-border spinner-border-sm'></span> : '' } </button>
                <table className="table table-dark table-bordered my-3">
                    <thead>
                        <tr>
                            <th>S.No.</th>
                            <th>Name</th>
                            <th>Username</th>
                            <th>Email</th>
                            <th>City</th>
                            <th>Company</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user.map((item, index)=>{
                                return(
                                    <tr>
                                        <td>{ index+1 }</td>
                                        <td>{ item.name }</td>
                                        <td>{ item.username }</td>
                                        <td>{ item.email }</td>
                                        <td>{ item.address.city }</td>
                                        <td>{ item.company.name }</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default User