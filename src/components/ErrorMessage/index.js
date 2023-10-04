import PropTypes from 'prop-types'
import React from 'react'

import { ErrorMessageStyled } from './styles'
export function ErrorMessage({ children }) {
  return <ErrorMessageStyled>{children}</ErrorMessageStyled>
}

ErrorMessage.propTypes = {
  children: PropTypes.string
}
