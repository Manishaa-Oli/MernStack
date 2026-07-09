import React from 'react'
import { Route, Routes } from 'react-router-dom'
import ReadAllProduct from './product/ReadAllProduct'
import ReadSpecificProduct from './product/ReadSpecificProduct'
import CreateProduct from './product/CreateProduct'
import UpdateProduct from './product/UpdateProduct'
import ReadAllUser from './user/ReadAllUser'
import ReadSpecificUser from './user/ReadSpecificUser'
import CreateUser from './user/CreateUser'
import UpdateUser from './user/UpdateUser'

const CosmosRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/product" element={<ReadAllProduct></ReadAllProduct>}></Route>
            <Route path="/product/:id" element={<ReadSpecificProduct></ReadSpecificProduct>}></Route>
            <Route path="/product/create" element={<CreateProduct></CreateProduct>}></Route>
            <Route path="/product/update/:id" element={<UpdateProduct></UpdateProduct>}></Route>

            <Route path="/user" element={<ReadAllUser></ReadAllUser>}></Route>
            <Route path="/user/:id" element={<ReadSpecificUser></ReadSpecificUser>}></Route>
            <Route path="/user/create" element={<CreateUser></CreateUser>}></Route>
            <Route path="/user/update/:id" element={<UpdateUser></UpdateUser>}></Route>
        </Routes>
    </div>
  )
}

export default CosmosRoute