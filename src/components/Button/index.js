import PropTypes from 'prop-types'
import React from 'react'

import { ContainerButton } from './styles'

export function Button({ children, ...props }) {
  return <ContainerButton {...props}>{children}</ContainerButton>
}

Button.propTypes = {
  children: PropTypes.string,
  type: PropTypes.string
}
