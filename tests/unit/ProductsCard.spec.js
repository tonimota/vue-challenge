import ProductsCard from '@/components/ProductsCard.vue'

describe('ProductsCard', () => {
  // Inspect the raw component options
  it('has a mounted hook', () => {
    expect(typeof ProductsCard.methods).toBe('object')
  })

  it('sets the correct default data', () => {
    const defaultData = ProductsCard.data()
    expect(typeof ProductsCard.data).toBe('function')
    expect(defaultData.newList).toEqual([])
    expect(typeof defaultData.newList).toBe('object')
  })

  it('validate props', () => {
    const product = ProductsCard.props.product
    expect(product.required).toBeTruthy()
    expect(product.type).toBe(Object)
  })
})
