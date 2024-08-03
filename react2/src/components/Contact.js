import React, {useState} from 'react'

const Contact = () => {

  let [num, setNum] = useState(0);

  let name = "rohit";
  let color = ["red", "green", "blue", "yellow", "black"];
  let user = {
    name : "amar",
    age : 25
  }


  let data = [
    {
      name : "rohit",
      fee : 5000,
      city : "indore"
    },
    {
      name : "rohit",
      fee : 5000,
      city : "indore"
    },
    {
      name : "rohit",
      fee : 5000,
      city : "indore"
    },
    {
      name : "rohit",
      fee : 5000,
      city : "indore"
    },
    {
      name : "rohit",
      fee : 5000,
      city : "indore"
    },
    {
      name : "rohit",
      fee : 5000,
      city : "indore"
    },
    {
      name : "rohit",
      fee : 5000,
      city : "indore"
    }
  ]

  

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
    <br />
    <br />
    <h1>{name}</h1>
    <br />
    <h2>{color[0]}</h2>
    <h2>{color[1]}</h2>
    <h2>{color[2]}</h2>
    <br />
    <h2>{user.name}</h2>
    <h2>{user.age}</h2>
    <br />
    {
        color.map((item, x)=><h3>{x+1} {item}</h3>)
    }
    <br />
    <br />
    <table className="table table-dark table-bordered table-striped table-hover">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Name</th>
          <th>Salary</th>
          <th>City</th>
        </tr>
      </thead>
      <tbody>
        {
          data.map((item, index)=><tr>
                <td>{index+1}</td>
                <td>{item.name}</td>
                <td>{item.fee}</td>
                <td>{item.city}</td>
              </tr>
            
          )
        }
      </tbody>
    </table>
    </>
  )
}

export default Contact