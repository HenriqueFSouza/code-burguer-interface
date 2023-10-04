import React from 'react'

import CartLogo from '../../assets/cart-image.svg'
import { CartItems, CartResume } from '../../components'
import { Container, CartImage, Wrapper } from './styles'

export function Cart() {
  return (
    <Container>
      <CartImage src={CartLogo} alt="logo-da-carrinho" />
      <Wrapper>
        <CartItems />
        <CartResume />
      </Wrapper>
    </Container>
  )
}
