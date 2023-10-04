import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import paths from '../constants/path'
import { Login, Products, Register, Home, Cart, Admin } from '../containers'
import PrivateRoute from './private-routes'

function MyRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<Products />} />
          <Route path="/carrinho" element={<Cart />} />
        </Route>
        <Route element={<PrivateRoute isAdmin />}>
          <Route path={paths.Order} element={<Admin />} />
          <Route path={paths.Products} element={<Admin />} />
          <Route path={paths.NewProduct} element={<Admin />} />
          <Route path={paths.EditProduct} element={<Admin />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default MyRoutes
