import React, { useState } from 'react'

 const LearnUseState = () => {

    let [name,setName]=useState("Manisha")
    let [count,setCount]=useState(1)//make variable by using useState set intial count to 1
  return (
    <div>
       <p>My name is {name}</p>
       <button onClick={()=>{
        console.log("button is clicked")
       }}>Click</button>

       <button onClick={()=>{
        setName("manu") //setname is used to change the name
       }}>Change Name</button>
    

    <p>count is {count}</p>
    <button onClick={()=>{
        setCount(count + 1)
    }}>Count</button>
    </div>
  )
}
export default LearnUseState
