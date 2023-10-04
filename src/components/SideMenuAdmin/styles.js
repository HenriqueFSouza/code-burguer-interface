import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Container = styled.div`
  background: #3c3c3c;
  box-shadow: 0px 0px 14px 0px rgba(0, 0, 0, 0.15);
  width: 300px;
  top: 0;
  left: 0;

  hr {
    margin: 50px 15px;
  }
`
export const ItemContainer = styled.div`
  height: 55px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  background: ${({ isActive }) => (isActive ? '#565656' : 'none')};
  margin: 8px;
  padding-left: 20px;
  transition: ease-in-out 0.3s;

  .icon {
    width: 25px;
  }
`
export const ListLink = styled(Link)`
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  text-decoration: none;
  margin-left: 15px;
`
