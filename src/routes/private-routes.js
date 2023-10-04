import PropTypes from 'prop-types'
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'

import { Header } from '../components'

function PrivateRoute({ isAdmin }) {
  const user = localStorage.getItem('codeburguer:userData')

  if (!user) {
    return <Navigate to="/login" replace={true} />
  }

  if (isAdmin && !JSON.parse(user).admin) {
    return <Navigate to="/" replace={true} />
  }

  return (
    <>
      {!isAdmin && <Header />}
      <Outlet />
    </>
  )
}

export default PrivateRoute

PrivateRoute.propTypes = {
  isAdmin: PropTypes.bool
}
