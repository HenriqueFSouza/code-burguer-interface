import PropTypes from 'prop-types'
import React, { createContext, useContext, useEffect, useState } from 'react'

const CartContext = createContext({})

export const CartProvider = ({ children }) => {
  const [cartProducts, setCartProducts] = useState([])

  const updateLocalStorage = async (products) => {
    await localStorage.setItem('codeburguer:cartInfo', JSON.stringify(products))
  }

  const putProductsInCart = async (product) => {
    const cartIndex = cartProducts.findIndex(
      (cartProduct) => cartProduct.id === product.id
    )

    let newCartProducts = []
    if (cartIndex >= 0) {
      newCartProducts = cartProducts

      newCartProducts[cartIndex].quantity += 1

      setCartProducts(newCartProducts)
    } else {
      product.quantity = 1
      newCartProducts = [...cartProducts, product]
      setCartProducts(newCartProducts)
    }

    await localStorage.setItem(
      'codeburguer:cartInfo',
      JSON.stringify(newCartProducts)
    )
  }

  const deleteProduct = async (productId) => {
    const newCart = cartProducts.filter((product) => product.id !== productId)
    setCartProducts(newCart)
    await updateLocalStorage(newCart)
  }

  const increaseProducts = async (ProductId) => {
    const newCart = cartProducts.map((product) => {
      return product.id === ProductId
        ? { ...product, quantity: product.quantity + 1 }
        : product
    })

    setCartProducts(newCart)

    await updateLocalStorage(newCart)
  }

  const decreaseProducts = async (ProductId) => {
    const cartIndex = cartProducts.findIndex((pd) => pd.id === ProductId)

    if (cartProducts[cartIndex].quantity > 1) {
      const newCart = cartProducts.map((product) => {
        return product.id === ProductId
          ? { ...product, quantity: product.quantity - 1 }
          : product
      })
      setCartProducts(newCart)

      await updateLocalStorage(newCart)
    } else {
      deleteProduct(ProductId)
    }
  }

  useEffect(() => {
    const loadCartData = async () => {
      const cartData = await localStorage.getItem('codeburguer:cartInfo')

      if (cartData) {
        setCartProducts(JSON.parse(cartData))
      }
    }

    loadCartData()
  }, [])

  return (
    <CartContext.Provider
      value={{
        putProductsInCart,
        cartProducts,
        increaseProducts,
        decreaseProducts
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCar must be used with CartContext')
  }

  return context
}

CartProvider.propTypes = {
  children: PropTypes.node
}
