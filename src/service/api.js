import products from './http'

export const getAllProducts = () => {
  return products.get('/products')
}
