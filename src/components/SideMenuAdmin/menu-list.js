import AddProductIcon from '../../assets/add-product-icon.svg'
import OrdersIcon from '../../assets/orders-icon.svg'
import ProductsIcon from '../../assets/products-icon.svg'
import paths from '../../constants/path'

const listLinks = [
  {
    id: 1,
    label: 'Pedidos',
    link: paths.Order,
    icon: OrdersIcon
  },
  {
    id: 2,
    label: 'Listar Produtos',
    link: paths.Products,
    icon: ProductsIcon
  },
  {
    id: 2,
    label: 'Novo Produto',
    link: paths.NewProduct,
    icon: AddProductIcon
  }
]

export default listLinks
