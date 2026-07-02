import React from 'react'
import { useParams } from 'react-router-dom'

const Contact = () => {
  let params=useParams() // this is for getting dynamic params
  console.log(params)
  return (
    <div>This is contact page</div>
  )
}

export default Contact