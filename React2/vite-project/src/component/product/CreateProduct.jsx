import axios from 'axios'
import React, { useState } from 'react'

const CreateProduct = () => {
  // declare four variables to store the values of the input fields
  let[name,setName]=useState("")
  let[price,setPrice]=useState("")
  let[quantity,setQuantity]=useState("")
  let[description,setDescription]=useState("")
    const handleSubmit = async(e) => {
        e.preventDefault()//prevents from refreshing the page when the form is submitted
        let data={
          name:name,// first name is from the backend and second name is from the frontend
          price:price,
          quantity:quantity,
          description:description
        }
        console.log(data)
        try {
          let result=await axios//use await before axios
        ({
          // use url of backend to send data to backend
          url:"http://localhost:8000/product",
          method:"POST",
          data:data
        })
        } catch (error) {
          
        }
        // to send data to backend we can use fetch or axios
        
    }
  return (
    <div>
      {/* this shows inside form, we have button and input fields */}
      <form onSubmit={handleSubmit}> {/* onSubmit is an event handler that is triggered when the form is submitted */ }
        <div>
          <div>
            <label htmlFor="name">Name</label>
            <input id="name" type="text" onChange={(e)=>{
              setName(e.target.value)}}></input>{/* htmlFor and id is used to link the label with the input field */ }
          </div>
          <div>
            <label htmlFor="price">Price</label>
            <input id="price" type="number"onChange={(e)=>{
              setPrice(e.target.value)}}></input>
          </div>
          <div>
            <label htmlFor="quantity">Quantity</label>
            <input id="quantity" type="number" onChange={(e)=>{
              setQuantity(e.target.value)}}></input> {/* it is empty tag not to write anything inside it*/ }
          </div>
          <div>
            <label htmlFor="description">Description</label>
            <textarea id="description" onChange={(e)=>{
              setDescription(e.target.value)}}></textarea>
          </div>
        </div>
        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
    
  )
}

export default CreateProduct