import PropTypes from 'prop-types'
import React from 'react'

import LogoutIcon from '../../assets/logout-icon.svg'
import { useUser } from '../../hooks/UserContext'
import listLinks from './menu-list'
import { Container, ItemContainer, ListLink } from './styles'

export function SideMenuAdmin({ path }) {
  const { logout } = useUser()
  return (
    <Container>
      <hr />
      {listLinks.map((item) => (
        <ItemContainer key={item.id} isActive={path === item.link}>
          <img src={item.icon} alt="label icone" className="icon" />
          <ListLink to={item.link}>{item.label}</ListLink>
        </ItemContainer>
      ))}
      <hr />
      <ItemContainer style={{ position: 'fixed', bottom: 30 }}>
        <img src={LogoutIcon} alt="label icone" className="icon" />
        <ListLink to="/login" onClick={() => logout()}>
          Sair
        </ListLink>
      </ItemContainer>
    </Container>
  )
}

SideMenuAdmin.propTypes = {
  path: PropTypes.string
}
