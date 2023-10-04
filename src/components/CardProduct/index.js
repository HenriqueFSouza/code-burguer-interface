import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate } from 'react-router-dom'

import { useCart } from '../../hooks/CartContext'
import { Button } from '../Button'
import { Container, Image, Name, Price } from './styles'

export function CardProduct({ product }) {
  const { putProductsInCart } = useCart()
  const navigate = useNavigate()

  return (
    <Container>
      <Image src={product.url} alt="imagem do produto" />
      <div>
        <Name>{product.name}</Name>
        <Price>{product.formatedPrice}</Price>
        <Button
          onClick={() => {
            putProductsInCart(product)
            navigate('/carrinho')
          }}
        >
          Adicionar
        </Button>
      </div>
    </Container>
  )
}

CardProduct.propTypes = {
  product: PropTypes.object
}
