import React, { useState } from 'react'

const CreateUser = () => {
  let[name,setName]=useState("namevalue")
  let[address,setAddress]=useState("addressvalue")
  let[email,setEmail]=useState("emailvalue")
  let[password,setPassword]=useState("passwordvalue")
  let[phone,setPhone]=useState("phonevalue")
  const handleSubmit = (e) => {
    e.preventDefault()  
    let data={
      name:name,
      address:address,
      email:email,
      password:password,
      phone:phone,
    }
    //prevents from refreshing the page when the form is submitted
    console.log(data)
  
  }
  return (
    <div>
      <form onSubmit={handleSubmit}> {/* onSubmit is an event handler that is triggered when the form is submitted */ } 
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" value={name} onChange={(e) => setName(e.target.value)}></input> {/* htmlFor and id is used to link the label with the input field */ }  
          </div>
          <div>
            <label htmlFor="address">Address</label>
            <input id="address" type="text" value={address} onChange={(e) => setAddress(e.target.value)}></input>  {/* htmlFor and id is used to link the label with the input field */ }  
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)}></input>  {/* htmlFor and id is used to link the label with the input field */ }   
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)}></input>  {/* htmlFor and id is used to link the label with the input field */ }   
          {/* type "password" hides password */}
          </div>

          <div>
            <label htmlFor="phone">Phone</label>
            <input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}></input>  {/* htmlFor and id is used to link the label with the input field */ }   
          </div>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  )
}

export default CreateUser