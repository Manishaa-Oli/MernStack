import React from 'react'

const Info = ({sem,roll,hobby}) => {
  return (
    <div>
        <h1>My info</h1>
        <p>I study in {sem} sem.</p>
        <p>{roll} is my student roll number.</p>
        <p>My hobby is {hobby}.</p>
    </div>
  )
}

export default Info