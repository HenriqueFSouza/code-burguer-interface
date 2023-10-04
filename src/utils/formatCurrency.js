const formatCurrency = (value) => {
  return new Intl.NumberFormat('pr-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(value)
}

export default formatCurrency
